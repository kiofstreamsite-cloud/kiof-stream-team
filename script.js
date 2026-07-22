let content = window.SITE_CONTENT || {};
function safeLink(url) { return url && url !== "#" ? url : "#"; }
function linkAttrs(url) {
  return url && url !== "#" ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="return false;"';
}
function iconTile(icon, fallbackLetter, variant, extraVariant) {
  const variantClass = variant ? ` icon-tile--${variant}` : "";
  const extraClass = extraVariant ? ` icon-tile--${extraVariant}` : "";
  if (icon) {
    return `<span class="icon-tile${variantClass}${extraClass}"><img src="${icon}" alt="" loading="lazy" /></span>`;
  }
  return `<span class="icon-tile icon-tile--fallback${variantClass}${extraClass}">${(fallbackLetter || "?").slice(0, 1)}</span>`;
}
function renderSiteContent() {
  const site = content.site || {};
  const hero = content.hero || {};
  const missions = content.todayMission || [];
  const platforms = content.streamingPlatforms || [];
  const notices = content.notices || [];
  const about = content.about || {};
  const links = content.links || {};
  const tickerText = content.ticker || "";
  document.title = site.title || "KISS OF LIFE STREAM TEAM";
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute("content", site.description || "");
  document.querySelectorAll(".brand-sub").forEach(el => { el.textContent = site.subtitle || "STREAM TEAM"; });
  const heroCopy = document.getElementById("heroCopy");
  if (heroCopy) {
    const description = (hero.description || "").replace(/\n/g, "<br>");
    heroCopy.innerHTML = `
      <p class="eyebrow">${hero.eyebrow || ""}</p>
      <h1>${hero.titleTop || ""}<br><span>${hero.titleBottom || ""}</span></h1>
      <p class="hero-description">${description}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="#stream">${hero.primaryButtonText || "지금 스트리밍하기"}</a>
        <a class="button button-ghost" href="#guide">${hero.secondaryButtonText || "가이드 보기"}</a>
      </div>
    `;
  }
  const tickerTrack = document.getElementById("tickerTrack");
  if (tickerTrack && tickerText) {
    const group = `<div class="ticker-group"><span>${tickerText}</span><span>${tickerText}</span><span>${tickerText}</span></div>`;
    tickerTrack.innerHTML = group + group.replace('class="ticker-group"', 'class="ticker-group" aria-hidden="true"');
  }
  const missionGrid = document.getElementById("missionGrid");
  if (missionGrid) {
    missionGrid.innerHTML = missions.map((item, index) => `
      <article class="mission-card ${item.featured ? "mission-main" : ""}">
        <span class="mission-number">${item.number || String(index + 1).padStart(2, "0")}</span>
        <div>
          <p class="card-kicker">${item.kicker || ""}</p>
          <h3>${item.title || ""}</h3>
          <p>${item.description || ""}</p>
        </div>
        ${item.featured ? '<a href="#stream" class="circle-arrow" aria-label="스트리밍 섹션으로 이동">↗</a>' : ""}
      </article>
    `).join("");
  }
  const platformList = document.getElementById("platformList");
  if (platformList) {
    platformList.innerHTML = platforms.map((item, index) => `
      <a class="platform-card" href="${safeLink(item.url)}" ${linkAttrs(item.url)}>
        <span class="platform-index">${String(index + 1).padStart(2, "0")}</span>
        ${iconTile(item.icon, item.name)}
        <span class="platform-name">${item.name || ""}</span>
        <span class="platform-tag">${item.tag || ""}</span>
        <span class="platform-arrow">↗</span>
      </a>
    `).join("");
  }
  const guidePlatforms = content.guidePlatforms || [];
  const guidePlatformGrid = document.getElementById("guidePlatformGrid");
  if (guidePlatformGrid) {
    guidePlatformGrid.innerHTML = guidePlatforms.map((item, index) => `
      <button class="platform-pick" type="button" data-guide-platform-index="${index}">
        ${iconTile(item.icon, item.name)}
        <span class="platform-pick-text">
          <span class="platform-pick-name">${item.name}</span>
          <span class="platform-pick-tag">${item.tag}</span>
        </span>
      </button>
    `).join("");
    document.querySelectorAll("[data-guide-platform-index]").forEach(button => {
      button.addEventListener("click", () => {
        const item = guidePlatforms[Number(button.dataset.guidePlatformIndex)];
        if (!item) return;
        openPlatformGuideModal(item);
      });
    });
  }
  const voteShows = content.voteShows || [];
  const voteShowGrid = document.getElementById("voteShowGrid");
  if (voteShowGrid) {
    voteShowGrid.innerHTML = voteShows.map((item, index) => `
      <button class="platform-pick" type="button" data-vote-show-index="${index}">
        ${iconTile(item.icon, item.name, "logo", item.iconFlush ? "flush" : null)}
        <span class="platform-pick-text">
          <span class="platform-pick-name">${item.name}</span>
          <span class="platform-pick-tag">${item.tag}</span>
        </span>
      </button>
    `).join("");
    document.querySelectorAll("[data-vote-show-index]").forEach(button => {
      button.addEventListener("click", () => {
        const item = voteShows[Number(button.dataset.voteShowIndex)];
        if (!item) return;
        openVoteShowModal(item);
      });
    });
  }
  const radioStations = content.radioStations || [];
  const radioStationGrid = document.getElementById("radioStationGrid");
  if (radioStationGrid) {
    radioStationGrid.innerHTML = radioStations.map((item, index) => `
      <button class="action-row" type="button" data-radio-station-index="${index}">
        ${iconTile(item.logo, item.name, "logo")}
        <span class="action-row-title">${item.name} 라디오 가이드</span>
        <span class="action-row-meta">${item.recommendedShow || ""} ${item.reflectRate || ""} · ${item.programs.length}개 프로그램</span>
        <span class="action-row-arrow">↗</span>
      </button>
    `).join("");
    document.querySelectorAll("[data-radio-station-index]").forEach(button => {
      button.addEventListener("click", () => {
        const item = radioStations[Number(button.dataset.radioStationIndex)];
        if (!item) return;
        openRadioStationModal(item);
      });
    });
  }
  const idDonationGuide = content.idDonationGuide || {};
  const idDonationSubtitle = document.getElementById("idDonationSubtitle");
  if (idDonationSubtitle && idDonationGuide.subtitle) idDonationSubtitle.textContent = idDonationGuide.subtitle;
  const idDonationGrid = document.getElementById("idDonationGrid");
  if (idDonationGrid) {
    const donationButtons = idDonationGuide.buttons || [];
    idDonationGrid.innerHTML = donationButtons.map((item, index) => `
      <button class="action-row" type="button" data-donation-index="${index}">
        ${iconTile(item.icon, item.icon ? item.name : "+")}
        <span class="action-row-title">${item.name || ""}</span>
        <span class="action-row-meta">${item.type === "guide" ? "GUIDE" : "ID DONATION"}</span>
        <span class="action-row-arrow">↗</span>
      </button>
    `).join("");
    document.querySelectorAll("[data-donation-index]").forEach(button => {
      button.addEventListener("click", () => {
        const item = donationButtons[Number(button.dataset.donationIndex)];
        if (!item) return;
        if (item.type === "guide") {
          openSecondNumberGuideModal(item);
        } else {
          openDonationModal(item);
        }
      });
    });
  }
  const fanchants = content.fanchants || [];
  const fanchantGrid = document.getElementById("fanchantGrid");
  if (fanchantGrid) {
    fanchantGrid.innerHTML = fanchants.map((item, index) => `
      <button class="fanchant-card" type="button" data-fanchant-index="${index}">
        <span class="fanchant-album">${item.album || ""}</span>
        <span class="fanchant-title">${item.title || ""}</span>
        <span class="fanchant-icon">♪</span>
      </button>
    `).join("");
    document.querySelectorAll("[data-fanchant-index]").forEach(button => {
      button.addEventListener("click", () => {
        const item = fanchants[Number(button.dataset.fanchantIndex)];
        if (!item) return;
        openFanchantModal(item);
      });
    });
  }
  const noticeList = document.getElementById("noticeList");
  if (noticeList) {
    noticeList.innerHTML = notices.map((item, index) => `
      <button class="notice-item notice-button" type="button" data-notice-index="${index}">
        <div>
          <span class="notice-tag ${item.important ? "important" : ""}">${item.tag || "NOTICE"}</span>
          <h3>${item.title || ""}</h3>
        </div>
        <time>${item.date || ""}</time>
      </button>
    `).join("");
    document.querySelectorAll("[data-notice-index]").forEach(button => {
      button.addEventListener("click", () => {
        const item = notices[Number(button.dataset.noticeIndex)];
        if (!item) return;
        openNoticeModal(item);
      });
    });
  }
  const aboutPanel = document.getElementById("aboutPanel");
  if (aboutPanel) {
    const title = (about.title || "").replace(/\n/g, "<br>");
    const paragraphs = (about.paragraphs || []).map(text => `<p>${text}</p>`).join("");
    aboutPanel.innerHTML = `
      <div>
        <p class="eyebrow">ABOUT US · 05</p>
        <h2>${title}</h2>
      </div>
      <div class="about-copy">
        ${paragraphs}
        <div class="social-links">
          <a href="${safeLink(links.twitter)}" ${linkAttrs(links.twitter)}>X / TWITTER ↗</a>
        </div>
      </div>
    `;
  }
}
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLinks = mobileMenu.querySelectorAll("a");
function closeMenu() {
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}
menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});
menuLinks.forEach(link => link.addEventListener("click", closeMenu));
const today = new Date();
document.getElementById("todayDate").textContent =
  new Intl.DateTimeFormat("ko-KR", { month: "2-digit", day: "2-digit", weekday: "short" }).format(today);
const guideContent = {
  vote: {
    title: "투표 가이드",
    steps: [
      "해당 음악방송의 공식 투표 앱과 투표 기간을 확인합니다.",
      "미리 계정을 만들고 필요한 투표 재화를 모읍니다.",
      "사전 투표와 실시간 투표 시간을 구분합니다.",
      "투표 완료 화면은 이벤트 참여용으로 저장할 수 있습니다."
    ],
    tip: "실제 사이트에서는 방송별 버튼과 마감 시간을 함께 표시하면 편리합니다."
  }
};
const modal = document.getElementById("guideModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalEyebrow = document.getElementById("modalEyebrow");
function setModalEyebrow(text) {
  if (modalEyebrow) modalEyebrow.textContent = text;
}
function openModal(key) {
  const data = guideContent[key];
  if (!data) return;
  setModalEyebrow("VOTE GUIDE");
  modalTitle.textContent = data.title;
  modalBody.innerHTML = `
    <ol>${data.steps.map(step => `<li>${step}</li>`).join("")}</ol>
    <div class="modal-tip">${data.tip}</div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function openVoteShowModal(show) {
  const data = guideContent.vote;
  setModalEyebrow("VOTE GUIDE · 투표 가이드");
  modalTitle.textContent = show.name;
  modalBody.innerHTML = `
    <p class="modal-lead">${show.tag} · 사전·실시간 투표 가이드</p>
    <ol>${data.steps.map(step => `<li>${step}</li>`).join("")}</ol>
    <div class="modal-tip">${data.tip}</div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function openRadioStationModal(station) {
  const common = content.radioCommonGuide || {};
  setModalEyebrow("RADIO GUIDE · 라디오 가이드");
  modalTitle.textContent = `${station.name} 라디오 신청 가이드`;
  modalBody.innerHTML = `
    <ul class="radio-common-list">
      <li><strong>신청 방법</strong>${common.howTo || ""}</li>
      <li><strong>차트 반영</strong>${common.chartRatio || ""}</li>
      <li><strong>확률 UP</strong>${common.tips || ""}</li>
    </ul>
    <div class="radio-station-highlight">
      <span class="radio-station-highlight-show">${station.recommendedShow || ""} <em>${station.reflectRate || ""}</em></span>
      <span class="radio-station-highlight-row"><span>권장 채널</span>${station.channel || ""}</span>
      <span class="radio-station-highlight-row"><span>문자 신청</span>${station.sms || ""}</span>
    </div>
    <p class="modal-lead">프로그램을 선택하면 신청 사이트로 이동합니다.</p>
    <div class="platform-picker">
      ${station.programs.map(program => `
        <a class="platform-pick" href="${safeLink(program.url)}" ${linkAttrs(program.url)}>
          <span class="platform-pick-name">${program.name}</span>
          <span class="platform-pick-tag">${program.time || ""}</span>
        </a>
      `).join("")}
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function renderCommonNotes(kind) {
  const notes = (content.guideCommonNotes && content.guideCommonNotes[kind]) || [];
  return `
    <div class="guide-modal-bar">
      <span class="bar-tag">음원 사이트 공통 필수 가이드</span>
      <ul class="bar-note-list">${notes.map(note => `<li>${note}</li>`).join("")}</ul>
    </div>
  `;
}
function openPlatformGuideModal(platform) {
  setModalEyebrow("STREAMING GUIDE · 스트리밍 & 다운로드");
  modalTitle.textContent = platform.name;
  if (!platform.hasDownload) {
    modalBody.innerHTML = `
      ${renderCommonNotes("streaming")}
      <div class="guide-tab-placeholder">
        <strong>${platform.name} 스트리밍 가이드 준비중</strong>
        이미지가 준비되면 이 자리에 들어갑니다.
      </div>
    `;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    return;
  }
  modalBody.innerHTML = `
    <div class="guide-tab-bar">
      <button type="button" class="guide-tab active" data-tab="streaming">스트리밍</button>
      <button type="button" class="guide-tab" data-tab="download">다운로드</button>
    </div>
    <div class="guide-tab-panel" data-panel="streaming">
      ${renderCommonNotes("streaming")}
      <div class="guide-tab-placeholder">
        <strong>${platform.name} 스트리밍 가이드 준비중</strong>
        이미지가 준비되면 이 자리에 들어갑니다.
      </div>
    </div>
    <div class="guide-tab-panel" data-panel="download" hidden>
      ${renderCommonNotes("download")}
      <div class="guide-tab-placeholder">
        <strong>${platform.name} 다운로드 가이드 준비중</strong>
        이미지가 준비되면 이 자리에 들어갑니다.
      </div>
    </div>
  `;
  const tabs = modalBody.querySelectorAll(".guide-tab");
  const panels = modalBody.querySelectorAll(".guide-tab-panel");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      panels.forEach(panel => { panel.hidden = panel.dataset.panel !== tab.dataset.tab; });
    });
  });
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function openFanchantModal(item) {
  setModalEyebrow("FANCHANT · 응원법");
  modalTitle.innerHTML = `<span class="modal-album">${item.album || ""}</span>${item.title || ""}`;
  modalBody.innerHTML = `<div class="fanchant-modal-content">${(item.chant || "응원법이 아직 등록되지 않았습니다.").replace(/\n/g, "<br>")}</div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function openNoticeModal(item) {
  setModalEyebrow("NOTICE · 공지사항");
  modalTitle.textContent = item.title || "공지사항";
  modalBody.innerHTML = `
    <p class="notice-modal-meta">${item.tag || "NOTICE"} · ${item.date || ""}</p>
    <div class="notice-modal-content">${(item.content || "상세 내용이 아직 등록되지 않았습니다.").replace(/\n/g, "<br>")}</div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function openDonationModal(item) {
  const guide = content.idDonationGuide || {};
  setModalEyebrow("ID DONATION · 아이디 기부");
  modalTitle.textContent = item.name || "";
  modalBody.innerHTML = `
    <p class="modal-lead">${guide.subtitle || ""}</p>
    <div class="donation-password">
      <span>공통 비밀번호</span>
      <code>${guide.commonPassword || "temp"}</code>
    </div>
    <div class="donation-notice">
      <strong>유의사항</strong>
      ${guide.notice || ""}
    </div>
    <a class="cta-button" href="${safeLink(guide.formUrl)}" ${linkAttrs(guide.formUrl)}>기부 폼 바로가기 ↗</a>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function openSecondNumberGuideModal(item) {
  setModalEyebrow("ID DONATION · 투넘버 가이드");
  modalTitle.textContent = item.name || "투넘버 가이드";
  modalBody.innerHTML = `
    <p class="modal-lead">아이디 기부용 계정을 추가로 만들 때 필요한 세컨 넘버(투넘버) 발급 방법이에요.</p>
    <div class="guide-tab-placeholder">
      <strong>투넘버 발급 가이드 준비중</strong>
      서비스명, 앱 스토어 링크, 발급 절차가 준비되면 이 자리에 들어갑니다.
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => openModal(button.dataset.modal));
});
document.querySelectorAll("[data-close-modal]").forEach(button => {
  button.addEventListener("click", closeModal);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeModal(); closeMenu(); }
});
const sections = [...document.querySelectorAll("main section[id]")];
const bottomLinks = [...document.querySelectorAll(".bottom-nav a")];
const topLinks = [...document.querySelectorAll(".desktop-nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    bottomLinks.forEach(link => { link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`); });
    topLinks.forEach(link => { link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`); });
  });
}, { threshold: 0.35 });
sections.forEach(section => observer.observe(section));
const topbar = document.getElementById("topbar");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });
async function initializeSite() {
  const status = document.getElementById("sheetStatus");
  try {
    if (typeof window.loadGoogleSheetContent === "function") {
      content = await window.loadGoogleSheetContent();
    }
    renderSiteContent();
    if (status) {
      status.textContent = "스프레드시트 연결 완료";
      status.classList.add("success");
      setTimeout(() => status.remove(), 2500);
    }
  } catch (error) {
    console.error(error);
    if (window.SHEET_CONFIG?.useFallbackContent) {
      content = window.SITE_CONTENT || {};
      renderSiteContent();
    }
    if (status) {
      status.textContent = "스프레드시트 연결 실패 · 샘플 내용을 표시 중";
      status.classList.add("error");
    }
  }
}
initializeSite();
