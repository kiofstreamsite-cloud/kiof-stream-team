/**
 * 이 파일만 수정하면 사이트 주요 내용이 바뀝니다.
 * 따옴표(" ") 안의 글자와 링크만 바꾸세요.
 */
window.SITE_CONTENT = {
  site: {
    title: "KISS OF LIFE STREAM TEAM · SWEAT",
    shortTitle: "KIOF",
    subtitle: "STREAM TEAM",
    description: "키스오브라이프 SWEAT 음원총공팀 홈페이지"
  },
  hero: {
    eyebrow: "KISS OF LIFE — SWEAT STREAMING TEAM",
    titleTop: "STREAM",
    titleBottom: "SWEAT",
    description: "가장 뜨거운 순간이 차트에 남을 수 있도록\n오늘의 총공과 스트리밍 가이드를 확인해 주세요.",
    primaryButtonText: "지금 스트리밍하기",
    secondaryButtonText: "가이드 보기"
  },
  ticker: "DON'T LET THEM SEE YOUR STREAM BREAK · LET THEM SEE THE NUMBERS · NOT THE SWEAT · SILENT EFFORT · LOUD NUMBERS · MAKE IT LOOK EASY · KEEP IT COOL · KEEP IT STREAMING · HIDE THE PRESSURE · SHOW THE RESULT ·",
  todayMission: [
    { number: "01", kicker: "DAILY STREAMING", title: "SWEAT 스트리밍", description: "각 음원 플랫폼의 권장 재생 방법을 확인하고 스트리밍에 참여해 주세요.", featured: true },
    { number: "02", kicker: "MUSIC SHOW", title: "사전 투표 참여", description: "샘플 문구입니다. 투표 앱과 기간을 여기에 표시할 수 있습니다.", featured: false },
    { number: "03", kicker: "SOCIAL SUPPORT", title: "뮤직비디오 공유", description: "공식 링크를 이용해 영상과 해시태그를 함께 공유해 주세요.", featured: false }
  ],
  streamingPlatforms: [
    { name: "Melon", tag: "국내 스트리밍", url: "#", icon: "assets/icons/streaming/melon.webp" },
    { name: "Genie", tag: "국내 스트리밍", url: "#", icon: "assets/icons/streaming/genie.webp" },
    { name: "Bugs!", tag: "국내 스트리밍", url: "#", icon: "assets/icons/streaming/bugs.webp" },
    { name: "FLO", tag: "국내 스트리밍", url: "#", icon: "assets/icons/streaming/flo.webp" },
    { name: "Spotify", tag: "GLOBAL", url: "#", icon: "assets/icons/streaming/spotify.webp" },
    { name: "YouTube", tag: "MV STREAMING", url: "#", icon: "assets/icons/streaming/youtube.webp" }
  ],
  guidePlatforms: [
    { name: "Melon", slug: "melon", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/melon.webp" },
    { name: "Melon MV", slug: "melon-mv", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/melon.webp" },
    { name: "Genie", slug: "genie", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/genie.webp" },
    { name: "Bugs!", slug: "bugs", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/bugs.webp" },
    { name: "Bugs MV", slug: "bugs-mv", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/bugs.webp" },
    { name: "FLO", slug: "flo", tag: "국내", hasDownload: false, icon: "assets/icons/streaming/flo.webp" },
    { name: "카카오뮤직", slug: "kakao-music", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/kakaomusic.webp" },
    { name: "V컬러링", slug: "v-coloring", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/vcoloring.webp" },
    { name: "YouTube Music", slug: "youtube-music", tag: "글로벌", hasDownload: false, icon: "assets/icons/streaming/youtubemusic.webp" },
    { name: "YouTube MV", slug: "youtube-mv", tag: "글로벌", hasDownload: false, icon: "assets/icons/streaming/youtube.webp" },
    { name: "Spotify", slug: "spotify", tag: "글로벌", hasDownload: false, icon: "assets/icons/streaming/spotify.webp" },
    { name: "Apple Music", slug: "apple-music", tag: "글로벌", hasDownload: false, icon: "assets/icons/streaming/applemusic.webp" },
    { name: "vibe", slug: "vibe", tag: "글로벌", hasDownload: false, icon: "assets/icons/streaming/vibe.webp" },
    { name: "Stationhead", slug: "stationhead", tag: "글로벌", hasDownload: false, icon: "assets/icons/streaming/stationhead.webp" },
    { name: "Shazam", slug: "shazam", tag: "글로벌", hasDownload: false, icon: "assets/icons/streaming/shazam.webp" }
  ],
  idDonationGuide: {
    subtitle: "가이드에 따라 아이디 생성 후 기부해주세요. 타이틀곡 다운로드 총공에 사용합니다.",
    commonPassword: "temp",
    notice: "아이디가 다량인 경우 총공팀 X DM으로 연락주세요.",
    formUrl: "#",
    buttons: [
      { name: "Bugs! 아이디 기부", type: "donation", icon: "assets/icons/streaming/bugs.webp", url: "#" },
      { name: "Genie 아이디 기부", type: "donation", icon: "assets/icons/streaming/genie.webp", url: "#" },
      { name: "투 넘버 가이드", type: "guide", icon: null, url: "#" }
    ]
  },
  guideCommonNotes: {
    streaming: [
      "무음 스밍 금지",
      "하트 누르기",
      "재생바 조작 절대 금지",
      "랜덤 재생 OFF 하기",
      "전체 반복 ON"
    ],
    download: [
      "모든 다운로드는 계정 당 최초 1회만 반영됩니다.",
      "한 계정으로 재다운로드 시 반영되지 않습니다.",
      "아이디 1개 당 개별곡 MP3와 FLAC이 각각 1회씩 차트에 반영됩니다.",
      "동시에 MP3와 FLAC 다운로드를 금지합니다. 다운로드 진행 순서는 MP3 → FLAC.",
      "다운로드 후 반드시 다운로드한 폴더에 들어가 파일을 완전히 삭제한 뒤 스트리밍하세요."
    ]
  },
  voteShows: [
    { name: "더쇼", tag: "SBS M", icon: "assets/icons/musicshow/theshow.jpg", iconFlush: true },
    { name: "뮤직뱅크", tag: "KBS", icon: "assets/icons/musicshow/musicbank.webp" },
    { name: "쇼챔피언", tag: "MBC M", icon: "assets/icons/musicshow/showchampion.webp" },
    { name: "엠카운트다운", tag: "Mnet", icon: "assets/icons/musicshow/mcountdown.webp" },
    { name: "음악중심", tag: "MBC", icon: "assets/icons/musicshow/musiccore.svg" },
    { name: "인기가요", tag: "SBS", icon: "assets/icons/musicshow/ingigayo.webp" }
  ],
  radioCommonGuide: {
    howTo: "각 방송사 신청 게시판 또는 문자메시지로 'KISS OF LIFE - SWEAT'을 신청해 주세요.",
    chartRatio: "실제로 음악방송 차트에 반영되는 방송(선곡이 집계되는 프로그램)은 공식적으로 비공개입니다. 아래는 참고용으로 알려진 권장 채널이에요.",
    tips: "문자메시지로 신청하면 앱 신청보다 선곡될 확률이 훨씬 더 높아져요. 프로그램 성격과 어울리는 사연을 함께 적어 보내면 더 좋아요."
  },
  radioStations: [
    {
      code: "kbs", name: "KBS", logo: "assets/icons/musicshow/kbs-logo.png", recommendedShow: "뮤직뱅크", reflectRate: "20% 반영", channel: "Cool FM", sms: "#8910",
      programs: [
        { name: "박명수의 라디오쇼", time: "11시", url: "#" },
        { name: "폴킴의 가요광장", time: "12–13시", url: "#" },
        { name: "하하의 슈퍼라디오", time: "14–15시", url: "#" },
        { name: "윤정수 남창희의 미스터라디오", time: "16–17시", url: "#" },
        { name: "오마이걸 효정의 볼륨을 높여요", time: "20–21시", url: "#" },
        { name: "한해의 키스 더 라디오", time: "22–23시", url: "#" }
      ]
    },
    {
      code: "mbc", name: "MBC", logo: "assets/icons/musicshow/mbc-logo.png", recommendedShow: "음악중심", reflectRate: "10% 반영", channel: "FM4U", sms: "#8000",
      programs: [
        { name: "굿모닝FM 테이입니다", time: "07–08시", url: "#" },
        { name: "오늘아침 윤상입니다", time: "09–10시", url: "#" },
        { name: "정오의 희망곡 김신영입니다", time: "12–13시", url: "#" },
        { name: "두시의 데이트 안영미입니다", time: "14–15시", url: "#" },
        { name: "김이나의 별이 빛나는 밤에", time: "20–21시", url: "#" },
        { name: "친한친구 방송반", time: "22시", url: "#" },
        { name: "IDOL RADIO", time: "23시", url: "#" }
      ]
    },
    {
      code: "sbs", name: "SBS", logo: "assets/icons/musicshow/sbs-logo.png", recommendedShow: "인기가요", reflectRate: "10% 반영", channel: "파워 FM", sms: "#1077",
      programs: [
        { name: "12시엔 주현영", time: "12–13시", url: "#" },
        { name: "두시탈출 컬투쇼", time: "14–15시", url: "#" },
        { name: "황제성의 황제파워", time: "16–17시", url: "#" },
        { name: "박소현의 러브게임", time: "18–19시", url: "#" },
        { name: "웬디의 영스트리트", time: "20–21시", url: "#" },
        { name: "배성재의 TEN", time: "22시", url: "#" },
        { name: "딘딘의 뮤직하이", time: "23–00시", url: "#" }
      ]
    }
  ],
  fanchants: [
    { album: "싱글 3집", title: "Sweat", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "싱글 2집", title: "Who is she", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "디지털 싱글 Lucky", title: "Lucky", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "미니 4집 224", title: "Lips Hips Kiss", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "미니 3집 Lose Yourself", title: "Get Loud", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "디지털 싱글 Sticky", title: "Sticky", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "싱글 1집 Midas Touch", title: "Midas Touch", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "미니 2집 Born to be XX", title: "Nobody Knows", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "미니 2집 Born to be XX", title: "Bad News", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "미니 1집 KISS OF LIFE", title: "쉿 (Shhh)", chant: "이 곡의 응원법을 이곳에 입력해 주세요." }
  ],
  notices: [
    { tag: "IMPORTANT", important: true, title: "SWEAT 음원총공팀 홈페이지 오픈", date: "2026.07.21", content: "SWEAT 컴백 스트리밍 총공 사이트 오픈 안내입니다. 주요 스트리밍 링크와 오늘의 총공 내용을 확인해 주세요." },
    { tag: "NOTICE", important: false, title: "컴백 대비 스트리밍 계정 점검 안내", date: "2026.07.20", content: "컴백 전 사용 중인 음원 플랫폼 계정의 로그인 상태와 이용권을 미리 점검해 주세요." },
    { tag: "EVENT", important: false, title: "스트리밍 인증 이벤트 안내", date: "2026.07.18", content: "스트리밍 인증 이벤트의 참여 기간과 인증 방법은 추후 공지를 통해 안내됩니다." },
    { tag: "GUIDE", important: false, title: "플랫폼별 스트리밍 유의사항 업데이트", date: "2026.07.15", content: "각 플랫폼의 최신 정책을 확인해 권장 스트리밍 방법과 유의사항을 업데이트했습니다." }
  ],
  about: {
    title: "DON'T LET THEM SEE\nYOUR STREAM BREAK",
    paragraphs: [
      "KISS OF LIFE의 음원 스트리밍·투표·홍보를 지원하는 비공식 팬 운영 사이트입니다. KISS OF LIFE 및 S2엔터테인먼트와는 공식적인 관련이 없습니다."
    ]
  },
  links: { twitter: "https://x.com/KIOF_STREAM" }
};
