const sheetConfig = window.SHEET_CONFIG || {};
const fallbackContent = window.SITE_CONTENT || {};
function csvUrl(sheetName) {
  const id = sheetConfig.spreadsheetId;
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}
function parseCSV(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && inQuotes && next === '"') { value += '"'; i++; }
    else if (char === '"') { inQuotes = !inQuotes; }
    else if (char === "," && !inQuotes) { row.push(value); value = ""; }
    else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i++;
      row.push(value);
      if (row.some(cell => cell !== "")) rows.push(row);
      row = []; value = "";
    } else { value += char; }
  }
  row.push(value);
  if (row.some(cell => cell !== "")) rows.push(row);
  return rows;
}
function rowsToObjects(rows) {
  if (!rows.length) return [];
  const headers = rows[0].map(header => header.trim());
  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((header, index) => { obj[header] = (row[index] || "").trim(); });
    return obj;
  }).filter(obj => Object.values(obj).some(Boolean));
}
function toBoolean(value) {
  return ["true", "1", "yes", "y", "예", "중요"].includes(String(value).trim().toLowerCase());
}
// Google's gviz endpoint silently returns the spreadsheet's first/default tab
// whenever the requested sheet name doesn't exist, instead of erroring.
// If a tab (설정/오늘의총공/스트리밍링크/공지사항/응원법) hasn't been created yet,
// every mismatched request would otherwise return another tab's rows and
// pollute that section. This checks that the fetched rows actually contain
// the columns that section expects before trusting them.
function isValidSheet(rows, requiredColumns) {
  if (!rows.length) return false;
  return requiredColumns.every(key => Object.prototype.hasOwnProperty.call(rows[0], key));
}
async function fetchSheet(sheetName) {
  const response = await fetch(csvUrl(sheetName), { cache: "no-store" });
  if (!response.ok) throw new Error(`${sheetName} 시트를 불러오지 못했습니다.`);
  return rowsToObjects(parseCSV(await response.text()));
}
function buildSettings(rows) {
  const map = {};
  const validRows = isValidSheet(rows, ["key", "value"]) ? rows : [];
  validRows.forEach(row => { if (row.key) map[row.key] = row.value || ""; });
  return {
    site: {
      title: map.siteTitle || fallbackContent.site?.title,
      shortTitle: map.shortTitle || fallbackContent.site?.shortTitle,
      subtitle: map.subtitle || fallbackContent.site?.subtitle,
      description: map.siteDescription || fallbackContent.site?.description
    },
    hero: {
      eyebrow: map.heroEyebrow || fallbackContent.hero?.eyebrow,
      titleTop: map.heroTitleTop || fallbackContent.hero?.titleTop,
      titleBottom: map.heroTitleBottom || fallbackContent.hero?.titleBottom,
      description: (map.heroDescription || fallbackContent.hero?.description || "").replace(/\\n/g, "\n"),
      primaryButtonText: map.primaryButtonText || fallbackContent.hero?.primaryButtonText,
      secondaryButtonText: map.secondaryButtonText || fallbackContent.hero?.secondaryButtonText
    },
    ticker: map.tickerText || fallbackContent.ticker,
    about: {
      title: (map.aboutTitle || fallbackContent.about?.title || "").replace(/\\n/g, "\n"),
      paragraphs: [
        map.aboutParagraph1 || fallbackContent.about?.paragraphs?.[0] || "",
        map.aboutParagraph2 || fallbackContent.about?.paragraphs?.[1] || ""
      ].filter(Boolean)
    },
    links: {
      twitter: map.twitter || fallbackContent.links?.twitter || "#",
      email: map.email || fallbackContent.links?.email || "#",
      form: map.form || fallbackContent.links?.form || "#"
    }
  };
}
async function loadGoogleSheetContent() {
  const id = sheetConfig.spreadsheetId;
  if (!id || id.includes("여기에_")) {
    if (sheetConfig.useFallbackContent) return fallbackContent;
    throw new Error("config.js에 스프레드시트 ID를 입력해 주세요.");
  }
  const names = sheetConfig.sheets || {};
  const [settingsRows, missionRows, platformRows, noticeRows, fanchantRows] = await Promise.all([
    fetchSheet(names.settings || "설정").catch(() => []),
    fetchSheet(names.missions || "오늘의총공").catch(() => []),
    fetchSheet(names.platforms || "스트리밍링크").catch(() => []),
    fetchSheet(names.notices || "공지사항").catch(() => []),
    fetchSheet(names.fanchants || "응원법").catch(() => [])
  ]);
  const settings = buildSettings(settingsRows);
  const validMissions = isValidSheet(missionRows, ["kicker", "title"]);
  const validPlatforms = isValidSheet(platformRows, ["name", "tag", "url"]);
  const validNotices = isValidSheet(noticeRows, ["tag", "date"]);
  const validFanchants = isValidSheet(fanchantRows, ["album", "chant"]);
  return {
    ...fallbackContent,
    ...settings,
    todayMission: validMissions
      ? missionRows.map((row, index) => ({
          number: row.number || String(index + 1).padStart(2, "0"),
          kicker: row.kicker || "", title: row.title || "", description: row.description || "", featured: toBoolean(row.featured)
        }))
      : fallbackContent.todayMission,
    streamingPlatforms: validPlatforms
      ? platformRows.map(row => ({ name: row.name || "", tag: row.tag || "", url: row.url || "#" }))
      : fallbackContent.streamingPlatforms,
    notices: validNotices
      ? noticeRows.map(row => ({
          tag: row.tag || "NOTICE", important: toBoolean(row.important), title: row.title || "", date: row.date || "", content: row.content || ""
        }))
      : fallbackContent.notices,
    fanchants: validFanchants
      ? fanchantRows.map(row => ({
          album: row.album || "", title: row.title || "",
          chant: (row.chant || "").replace(/\\n/g, "\n"),
          videoUrl: row.videoUrl || ""
        }))
      : fallbackContent.fanchants
  };
}
window.loadGoogleSheetContent = loadGoogleSheetContent;
