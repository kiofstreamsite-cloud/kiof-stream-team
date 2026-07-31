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
    { number: "01", kicker: "DAILY STREAMING", title: "SWEAT 스트리밍", description: "각 음원 플랫폼의 권장 재생 방법을 확인하고 스트리밍에 참여해 주세요.", featured: true, url: "#stream" },
    { number: "02", kicker: "MUSIC SHOW", title: "사전 투표 참여", description: "샘플 문구입니다. 투표 앱과 기간을 여기에 표시할 수 있습니다.", featured: false, url: "#" },
    { number: "03", kicker: "SOCIAL SUPPORT", title: "뮤직비디오 공유", description: "공식 링크를 이용해 영상과 해시태그를 함께 공유해 주세요.", featured: false, url: "#" }
  ],
  streamingPlatforms: [
    { name: "Melon", tag: "국내 스트리밍", url: "#", icon: "assets/icons/streaming/melon.webp", oneClickUrls: ["https://vo.la/sVAdDxH", "https://vo.la/019z5UX", "https://vo.la/rKCr6HG", "https://vo.la/M5NMkjn"] },
    { name: "Bugs!", tag: "국내 스트리밍", url: "#", icon: "assets/icons/streaming/bugs.webp", oneClickUrls: ["https://vo.la/OCrvF2d"] },
    { name: "Genie", tag: "국내 스트리밍", url: "#", icon: "assets/icons/streaming/genie.webp", oneClickUrls: ["https://vo.la/Jil0ZO4"] },
    { name: "FLO", tag: "국내 스트리밍", url: "#", icon: "assets/icons/streaming/flo.webp", oneClickUrls: [] },
    { name: "Spotify", tag: "GLOBAL", url: "#", icon: "assets/icons/streaming/spotify.webp", oneClickUrls: [] },
    { name: "YouTube", tag: "MV STREAMING", url: "#", icon: "assets/icons/streaming/youtube.webp" }
  ],
  guidePlatforms: [
    { name: "Melon", slug: "melon", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/melon.webp" },
    { name: "Melon MV", slug: "melon-mv", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/melon.webp" },
    { name: "Bugs!", slug: "bugs", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/bugs.webp" },
    { name: "Bugs! MV", slug: "bugs-mv", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/bugs.webp" },
    { name: "Genie", slug: "genie", tag: "국내", hasDownload: true, icon: "assets/icons/streaming/genie.webp" },
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
    commonPassword: "kiofsweat0804!",
    notice: "아이디가 다량인 경우 총공팀 X DM으로 연락주세요.",
    formUrl: "#",
    buttons: [
      {
        name: "Bugs! 아이디 기부",
        type: "donation",
        icon: "assets/icons/streaming/bugs.webp",
        url: "https://forms.gle/Yuqx45d1GaktnraU6",
        steps: [
          "벅스에서 아이디를 만든다. (인당 3개 생성 가능)",
          "비밀번호 <strong>kiofsweat0804!</strong>로 설정한다.",
          "반드시 한국 번호로 본인인증을 완료한다.",
          "기부할 아이디를 폼에 넣고 제출하면 끝!"
        ],
        notice: "· 아이디 만들 때마다 비행기 모드 ON / OFF\n· 로그아웃 후 ID 제출\n· 제출한 아이디로 재로그인 금지!\n· 개인이 사용할 아이디, 페이코 아이디는 기부 금지!\n· kissoflife530 등 연속성 있는 아이디 금지"
      },
      {
        name: "Genie 아이디 기부",
        type: "donation",
        icon: "assets/icons/streaming/genie.webp",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfutKS0G6rv-kVfs3lxGCAcAzi5KrQFJhbVy_7MJW4TOSuC7A/formResponse",
        steps: [
          "지니에서 아이디를 만든다. (1개 번호당 30일마다 3개 생성 가능)",
          "비밀번호 <strong>kiofsweat0804!</strong>로 설정한다.",
          "반드시 한국 번호로 본인인증을 완료한다.",
          "인증 후 프로필에 들어가 본인인증 완료 날짜를 확인한다",
          "로그아웃 후 기부할 아이디를 폼에 넣고 제출하면 끝!"
        ],
        notice: "· 아이디 만들 때마다 비행기 모드 ON / OFF\n· 로그아웃 후 ID 제출\n· 제출한 아이디로 재로그인 금지!\n· 개인이 사용할 아이디는 기부 금지!\n· kissoflife530 등 연속성 있는 아이디 금지"
      },
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
    {
      name: "더 쇼", tag: "SBS Life", icon: "assets/icons/musicshow/theshow.jpg", iconFlush: true,
      guide: {
        broadcastInfo: "매주 화요일 18시",
        app: "BIGC",
        currency: "무료재화 FREE GEM, 유료재화 ROYAL GEM",
        rounds: [
          { label: "사전 투표", percent: "20%", cost: "1표당 ROYAL GEM 20 또는 FREE GEM 400", time: "방송 전주 금요일 17:00 ~ 방송 주 월요일 10:00" },
          { label: "실시간 투표", percent: "20%", cost: "1표당 ROYAL GEM 200 또는 FREE GEM 4,000", time: "방송 당일 18:05 ~ 19:00" }
        ],
        earnMethods: [
          "동영상 광고 시청 : 하루 최대 30회. 광고 1번당 200 FREE GEM (26년 9월 4일까지)",
          "출석체크 : 20 FREE GEM",
          "마케팅 수신 동의 이벤트 : 500 FREE GEM",
          "기타 충전 미션"
        ]
      }
    },
    {
      name: "쇼 챔피언", tag: "MBC M, MBC every1", icon: "assets/icons/musicshow/showchampion.webp",
      guide: {
        broadcastInfo: "매주 수요일 17시",
        app: "아이돌챔프",
        currency: "챔심",
        rounds: [
          { label: "사전 투표", percent: "20%", cost: "1표당 쇼챔피언 투표권 1개 (투표권 1개당 루비 1개 or 타임 5개)", time: "방송 전주 금요일 20:00 ~ 방송 주 월요일 14:59" }
        ],
        earnMethods: [
          "출석체크 : 타임 챔심 30+n개",
          "광고 : 광고 1회당 루비챔심 1~100개",
          "기타 충전 미션"
        ]
      }
    },
    {
      name: "엠 카운트다운", tag: "Mnet", icon: "assets/icons/musicshow/mcountdown.webp",
      guide: {
        broadcastInfo: "매주 목요일 18시",
        app: "Mnet Plus",
        rounds: [
          { label: "사전 투표", percent: "10%", cost: "계정 당 1일 최대 5회", time: "방송 전주 토요일 20:00 ~ 방송 주 월요일 23:59" },
          { label: "실시간 투표", percent: "10%", cost: "계정 당 5회", time: "엠 카운트다운 생방송 중 진행" }
        ]
      }
    },
    {
      name: "뮤직뱅크", tag: "KBS2", icon: "assets/icons/musicshow/musicbank.webp",
      guide: {
        broadcastInfo: "매주 금요일 17시 5분",
        app: "coogoong(쿠궁)",
        rounds: [
          { label: "글로벌 사전 투표", percent: "10%", cost: "계정당 1일 최대 500회, 1표당 50 골드하트 50 블루하트", time: "방송 전주 일요일 18:00 ~ 방송 주 수요일 11:00" }
        ],
        earnMethods: [
          "출석체크 : 1일당 블루하트 10개",
          "광고 : 1회 20 블루하트. 1일 30회",
          "기타 충전 미션"
        ]
      }
    },
    {
      name: "음악중심", tag: "MBC TV", icon: "assets/icons/musicshow/musiccore.svg",
      guide: {
        broadcastInfo: "매주 토요일 15시 15분",
        rounds: [
          { label: "뮤빗 사전 투표", percent: "5%", app: "뮤빗 Mubeat", cost: "1표당 하트비트 3개", time: "방송 주 화요일 18:00 ~ 방송 주 목요일 11:00" },
          { label: "뮤니버스 사전 투표", percent: "5%", app: "뮤니버스", cost: "1표당 50 애드루미", time: "방송 주 화요일 18:00 ~ 방송 주 목요일 11:00" },
          { label: "생방송 앱 투표", percent: "6% (뮤빗 3%, 뮤니버스 3%)", cost: "1위 후보 대상 중 생방송 투표권으로 계정당 최대 5표", time: "방송 당일 생방송 중", note: "뮤빗 생방송 투표권 : 개당 하트비트 30개, 생방송 투표권 5개당 3,000원 · 뮤니버스 생방송 투표권 : 1표당 60 골드루미 or 50 애드루미" },
          { label: "생방송 문자 투표", percent: "4%", cost: "#0505로 'KISSOFLIFE(변경 가능성 있음)' 문자 투표. 건당 100원의 정보 이용료" }
        ],
        apps: [
          { name: "뮤빗 Mubeat", currency: "하트비트", earnMethods: [
            "동영상 광고 시청 : 광고 1회당 하트비트 3개, 하루 최대 광고 15회",
            "기타 충전 미션"
          ] },
          { name: "뮤니버스", currency: "골드루미, 애드루미", earnMethods: [
            "광고 1회당 애드루미 5개. 1일 20회",
            "기타 충전 미션"
          ] }
        ]
      }
    },
    {
      name: "인기가요", tag: "SBS", icon: "assets/icons/musicshow/ingigayo.webp",
      guide: {
        broadcastInfo: "매주 일요일 15시 20분",
        rounds: [
          {
            label: "사전 투표", percent: "5%", app: "LiNC",
            cost: "계정 당 매일 10표. 1표당 30 팬포인트 or 8 젬",
            time: "방송 전주 월요일 12:00 ~ 방송 전주 금요일 23:59"
          },
          {
            label: "실시간 투표", percent: "5%", app: "LiNC",
            cost: "1위 후보 대상. 계정 당 최대 5표. 1표당 50 루비 or 5 다이아",
            time: "방송 당일 생방송 중"
          }
        ],
        apps: [
          { name: "LiNC", earnMethods: [
            "룰렛 : 1회 무료. 광고 1회당 1회 추가(광고 쿨타임 10분)로 팬 포인트 랜덤 획득",
            "TIN 앱과 재화 공유 : 일일 미션 2개(1개당 9 팬포인트), 동영상 광고 일일 20회 1회당 6 팬 포인트",
            "출석체크 : 1일 출석체크 당 루비 1개",
            "행운의룰렛 : 1일 3회 제한. 광고 1개당 룰렛 1번 가능",
            "사다리게임 : 1일 3회 제한. 광고 1개당 사다리 1번 가능",
            "광고 : 동영상 광고 1회 시청당 루비 1개. 1일 최대 광고 50번",
            "기타 충전 미션"
          ] }
        ]
      }
    }
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
    { album: "싱글 2집", title: "Who is she", videoUrl: "https://youtu.be/Uoddc-dUYKY?si=u07XNWIMn78MI5ce", chant: "I feel it, silence gettin' deeper\n숨이 멎는 순간 (<mark>Who is she? 키오프!</mark>)\n\n터질 듯해 I know\nI'm gonna be the girl in the fire (<mark>fire!</mark>)\n(We don't think twice)\n<mark>(길게 함성) I guess you'll never know</mark>\n\n잿빛 속에 피어나는 miracle\n가빠지는 심장 소린 magical\n끝도 없이 빠져들어 <mark>3 2 1</mark>\n<mark>Who is she?</mark>\n\nWhen I walk onto the stage\nYeah I <mark>got this</mark>\n짙게 타오르는 숨\n벅찬 <mark>heartbeat</mark>\n\nCome around\nBaby you can come and see me Making everybody go,\n<mark>Who is she?</mark>\n\nWhen I step onto the stage\nYeah I <mark>got this</mark>\n숨이 멎을듯한 mood\n벅찬 <mark>heartbeat</mark>\n\nFeel the fire\nBaby you can come and see me Making everybody go,\n<mark>Who is she?</mark>\n\n<mark>(키오프!)</mark>\nI can be hot\nI can be cold\nBorn to be X\nNobody knows\n상상은 trigger\nGotta just breathe in\nI'm the whole damn show yeah\n\nWho's the one that takes the reset\n다들 \"쉿!\" 시작되는 burn\n집중해 더 타올라\nWatch me now, now\n<mark>(길게 함성) I guess you'll never know</mark>\n\n부서지고 피어나는 miracle\n내 안에서 눈을 뜨는 magical\n끝도 없이 빠져들어 <mark>3 2 1</mark>\n<mark>Who is she?</mark>\n\nWhen I walk onto the stage\nYeah I <mark>got this</mark>\n짙게 타오르는 숨\n벅찬 <mark>heartbeat</mark>\n\nCome around\nBaby you can come and see me Making everybody go,\n<mark>Who is she?</mark>\n\n<mark>(키오프! Who is she?)</mark>\n<mark>(키오프! Who is she?)</mark>\n<mark>(키오프! Who is she?)</mark>\n<mark>(키오프! Who is she?)</mark>\n\nWhen I move onto the stage\nYeah I <mark>got this</mark>\n짙게 타오르는 숨\n벅찬 <mark>heartbeat</mark>\n\nFeel the vibe\nBaby 느낀 대로 breathing\nMaking everybody go,\n<mark>Who is she?</mark>\n\nWhen I move onto the stage\nYeah I <mark>got this</mark>\n숨이 멎을듯한 mood\n벅찬 <mark>heartbeat</mark>\n\nFeel the vibe\nBaby 느낀 대로 breathing\nMaking everybody go,\n<mark>Who is she!</mark>\n<mark>(키!스!오!브!라!이!프!)</mark>" },
    { album: "디지털 싱글 Lucky", title: "Lucky", videoUrl: "https://youtu.be/XhZ40pXHBBw?si=A5Oq5OW7LHmndGjZ", chant: "(KISS.OF.LIFE)\n(Mission Start!)\n\nHaha <mark>hello, hello</mark>, nice to meet ya\n<mark>I know, you know</mark>, I'm a keeper\n<mark>One two</mark> look 달라지는 Mood\n<mark>Three four</mark>, oops 운에 맡겨 툭\n너와 나 사이 끌림 그대로 와\nNeck gon' break when you see me turn' round\nTime to read focus 옳지 <mark>Wow</mark>\nBaby, <mark>I love ya, I need ya, I want ya</mark>\n\n다 정해진 Game, 혹은 긴 maze\nThere's no escape\n그래 <mark>yeah yeah yeah</mark>\nIs it <mark>yeah, yeah, yes?</mark>\n\nYou don't know how <mark>lucky (lucky)</mark> you are\nSweeter taste than <mark>honey (honey)</mark> we are 깊게, 빠져들고 있어 <mark>Love like this</mark>\n둘만의 Kiss\nSee how <mark>lucky (lucky)</mark> you are You are\n\n떠 있는 red, green light 어때, 넌 혹시 와 느낌이?\n확신이 필요해 한 발 더 다가서 You'll feel it\n\n긴 숨을 참는 순간\nSaying you're a good believer\n이 흐름에 맡겨봐 알게 될 거야 no doubt\n\n다 정해진 Game, 혹은 긴 maze\nThere's no escape\n그래 <mark>yeah yeah yeah</mark>\nIs it <mark>yeah, yeah, yes?</mark>\n\nYou don't know how <mark>lucky (lucky)</mark> you are\nSweeter taste than <mark>honey (honey)</mark> we are 깊게, 빠져들고 있어 <mark>Love like this</mark>\n둘만의 Kiss\nSee how <mark>lucky (lucky)</mark> you are You are\nYou are <mark>(KIOF KIOF KIOF KIOF)</mark>\nYou are <mark>(KIOF KIOF KIOF KIOF)</mark>\nYou are <mark>(KIOF KIOF KIOF KIOF)</mark>\nYou are <mark>(KIOF KIOF KIOF KIOF)</mark> You are\n\nYou don't know how <mark>lucky (lucky)</mark> you are\nSweeter taste than <mark>honey (honey)</mark> we are\nSee that 벗어날 수 없어 <mark>Love like this</mark>\n다가와 Kiss\nSee how <mark>lucky (lucky)</mark> you are You are" },
    { album: "미니 4집 224", title: "Lips Hips Kiss", videoUrl: "https://youtu.be/OdBJKP38H2g?si=Pj-WX2ejv3DlDqFn", chant: "(0:04 키오프!)\n(키오프 Lips! Hips! Kiss!)\n\n<mark>Code blue</mark>\n아득해진 시야 속에, 날 이끄는 너의 <mark>Voice</mark>\n<mark>Love flu</mark>\n낫지 않는 감정들의 허리케인\nYou're that problem\nPerfume shower Make me <mark>sweet</mark>\nDress on, powder Necklace <mark>ching</mark>\nVibes on 짙게 칠해 너와 날\n\n서서히 닿은 눈빛\n달라진 Something\n이대로 <mark>Come with me</mark> You can touch my <mark>lips hips hips hips hips</mark>\nI'm free at <mark>six six six six</mark> oh\n감각을 따라, 널 쫓아 <mark>Hide and seek</mark>\n\nWe should <mark>dip dip dip dip dip</mark>\nJust keep it on the <mark>shh shh shh shh</mark> oh\nMy eyes, my lips, my soul, my body\n완벽해질 Night\n\n<mark>Um alright (함성)</mark>\n\nLove in the air 낯선 공기 위로 <mark>Chilin'</mark>\n과감히 내 쪽으로 끌어 너의 <mark>Rhythm</mark>\n눈이 자꾸 가는 Type\nYou got something, I can't <mark>lie</mark>\n아주 작은 손짓에도 <mark>You can't run away</mark>\n깜빡이는 조명 아래 홀린 듯이 <mark>Do the thing</mark>\n맡겨봐 On my wave You can touch my <mark>lips hips hips hips hips</mark>\nI'm free at <mark>six six six six</mark> oh\n감각을 따라, 널 쫓아 <mark>Hide and seek</mark>\n\nWe should <mark>dip dip dip dip dip</mark>\nJust keep it on the <mark>shh shh shh shh</mark> oh\nMy eyes, my lips, my soul, my body\n완벽해질 Night\n\nRight here, you and I\n더 깊이 빠져가\n흐트러지는 line\n넌 모르게 남겨진 kisses into you\n<mark>(함성)</mark>\n\nLook in my eyes\nThen say my name 내 모든 건 Lean on you\n말해줘 you're mine\n\n<mark>Look in my eyes (Look in my eyes)</mark>\n<mark>Then say my name (Then say my name)</mark>\n내 모든 걸 Lean on you\nSo stay by my side\n\nYou can touch my <mark>lips hips hips hips hips</mark>\nI'm free at <mark>six six six six</mark> oh\n시작해 나와 어둠 속, <mark>Hide and seek</mark>\n\nWe should <mark>dip dip dip dip dip</mark>\nJust keep it on the <mark>shh shh shh shh</mark> oh\nMy eyes, my lips, my soul, my body\n완벽해질 Night\n\n<mark>Lips hips (Lips hips)</mark>\n<mark>Lips kiss (Lips kiss)</mark>\n<mark>Shh shh shh (Shh shh shh)</mark>\n<mark>Shh</mark>" },
    { album: "미니 4집 224", title: "k bye", chant: "이 곡의 응원법을 이곳에 입력해 주세요." },
    { album: "미니 4집 224", title: "Tell Me", chant: "(8박자 쉬고)\n(쥴리 나띠 벨 하늘 키스오브라이프)\n\nJust tell me now 아득한 Breathing\nI can't see you now 낯선 이 느낌\nLike I'm underground\n리듬을 잃어버린 것 같아\nBut I'm falling for more Cuz I'm <mark>hooked, hooked, holding on, yeah</mark>\n깊이 퍼져 더 That's a <mark>no no</mark>\nLo- lo- losing control\n\n매료돼 버린 Ma <mark>breathing</mark>\n입술은 <mark>Mean it</mark>\n온몸이 깨어나 Baby, show me something true\n\n<mark>Tell me</mark> where the real ones at,\n<mark>Cuz I'm in</mark>, 돌이킬 수 없이\n<mark>I don't (really know)</mark>\n<mark>심장 소리로 내게 말해줘</mark>\nBut I need something real, so just\n\n<mark>Tell me</mark> where the real ones at,\n<mark>Cuz I'm in</mark>, 걷잡을 수 없이\nI don't know\n거부할 수 없어 More and more (Through the highs and lows)\nSo just let me risk it all\n\n<mark>Old texts, missed calls</mark> 이젠 Let me out\n<mark>Cycle 벗어나</mark> Out of fake smiles, yeah\nThey call it <mark>danger</mark> (caught up in it)\n지켜봐 <mark>Stranger</mark>, yeah\n\nCuz I'm <mark>hooked, hooked, holding on, yeah</mark>\n깊이 퍼져 더 That's a <mark>no no</mark>\nLo- lo- losing control\n\n매료돼 버린 Ma <mark>breathing</mark>\n입술은 <mark>Mean it</mark>\n경험한 적 없는 감각에 난 이끌려\n\n<mark>Tell me</mark> where the real ones at,\n<mark>Cuz I'm in</mark>, 돌이킬 수 없이\n<mark>I don't (really know)</mark>\n<mark>심장 소리로 내게 말해줘</mark>\nBut I need something real so just\n\n<mark>(함성)</mark>\n<mark>(Tell me)</mark>\n<mark>(Oh ha)</mark>\n<mark>(2,3,4) 키오프 키오프 키오프</mark>\n<mark>키오프 키오프 키오프</mark>\n\nCan you just tell me now\nBaby just tell me now\n\nSo why won't you just <mark>(함성)</mark>\n<mark>Tell me</mark> where the real ones at,\n<mark>Cuz I'm in</mark>, 돌이킬 수 없이\n<mark>I don't (really know)</mark>\n<mark>심장 소리로 내게 말해줘</mark>\nBut I need something real so just\n\n<mark>Tell me</mark> where the real ones at,\n<mark>Cuz I'm in</mark>, 걷잡을 수 없이\nI don't know\n거부할 수 없어 more and more (Through the highs and lows)\nSo just let me risk it all\n\n<mark>(함성)</mark>" },
    { album: "미니 3집 Lose Yourself", title: "Get Loud", videoUrl: "https://youtu.be/U-q8kjGEabA?si=FO3nJIQWt8YVieuy", chant: "That's it\nNow the place is on fire\nThis is the end\nI'd want myself and I can be my muse\n<mark>(겟. 라. 우. 드)</mark>\n\nAin't I dreaming?\n제멋대로 가는 손짓\nDon't feel guilty\n매 순간이 새로운 걸 Like Havana\n\nOhhhh\nFeel the rhythm go <mark>cha cha (박수)</mark>\nGet ready to turn it on Move me like my favorite song like\n\nSuperwoman I wanna feel\nRight, 그려봐 다음 Stage <mark>(벨!)</mark>\n느낌을 따라 난 움직여\nOh 현실과는 다른 Space yeah\n\nOhhhh\nFeel the rhythm go <mark>cha cha (박수)</mark>\nGet ready to turn it on\nIs it real?\nIs it real? Babe\n\n이건 마치 깨지않는 꿈\nCause I get it if I want it, woo <mark>(하늘)</mark>\n현실과 꿈 사이 I don't wanna wake up now\nBlow, <mark>날려 Confetti, oh</mark>\n\n<mark>Get loud</mark>\n커져가는 Bass, I'm down\nBaby come and give it to me\nRed top\n위로 느껴지는 My vibe\nBaby come and give it to me 멈출 생각은 없지\nI love how we're dancing like this\nRoar of the crowd, 느껴봐 넌이미\n<mark>So lose yourself (함성)</mark>\n\nYeah oh I'll be right there\nLet me show you how we move 어디든 무대\nI can bring it, call it dreaming\nNow you'll fidget in a minute\n\nShake the room, feel the vibe\nCause I like that <mark>(쥴리)</mark>\n\nI'll inspire ya\n숨 쉬는 Illusion\n넌 순간 빠져\nTo a new sensation\n\n이건 마치 깨지않는 꿈\nCause I get it if I want it, woo <mark>(하늘)</mark>\n현실과 꿈 사이 I don't wanna wake up now\nBlow, <mark>날려 Confetti, oh</mark>\n\n<mark>Get loud</mark>\n커져가는 Bass, I'm down\nBaby come and give it to me\nRed top\n위로 느껴지는 My vibe\nBaby come and give it to me 멈출 생각은 없지\nI love how we're dancing like this\nRoar of the crowd, 느껴봐 넌이미\n<mark>So lose yourself (함성)</mark>\n\nDancing around in my tight dress\nI'll be doing me in the crowd, looking priceless <mark>(나띠)</mark>\n미친 듯 춤춰봐 Like that\nIf you feel the same, gotta get here ASAP\n\nOther boys said I'm a little salty\n절대 관심 없어 금방 질리고 말 Plastic\nGotta level up (hey)\nGotta get naughty (yeah)\nBaby when I groove 날려줘 <mark>Confetti, yeah (함성)</mark>\n\n<mark>Get loud</mark>\n커져가는 Bass, I'm down\nBaby come and give it to me\nRed top\n위로 느껴지는 My vibe\nBaby come and give it to me 멈출 생각은 없지\nI love how we're dancing like this\nRoar of the crowd, 느껴봐 넌 이미\n<mark>So lose yourself (함성)</mark>" },
    { album: "미니 3집 Lose Yourself", title: "Igloo", chant: "Imma back up every word\n<mark>Mini skirt (Mini skirt)</mark>, <mark>pretty pink (pretty pink)</mark>\n<mark>What you heard (What you heard)</mark>\nBut it's never what you think\nTrust\n\nI got finger-licking venom\nLittle sweet, a little bitter\nLooking like a seven figure on me cause I\n\nMmmm <mark>(ha ha)</mark>\nI can melt an igloo\nYeah cause I'm so dang hot <mark>(Yeah Yeah Yeah Yeah)</mark>\nI got everything you - that you're feening for\n\nThrowing some cash on that body\nThrow in some cash, make 'em put in that work\nWhether it rains or it's sunny\nBest believe I keep 'em running back\n\nGlass room, perfume, Kodak on that <mark>lilac</mark>\nSlipping on my short dress, know he <mark>like that</mark>\n\nFacetime on the regular\nIn the night, wanna say what's up\nHe knows this ain't regular, got that A1 on the schedule\n\nI got finger-licking venom\nLittle sweet, a little bitter\nLooking like a seven figure on me cause I\n\nMmmm <mark>(ha ha)</mark>\nI can melt an igloo\nYeah cause I'm so dang hot <mark>(Yeah Yeah Yeah Yeah)</mark>\nI got everything you - that you're feening for\n\nHeart attack -IV\nWhen I walk the street\nVitamins that D\nI'm good, I'm healthy\n\nEvery <mark>summer</mark> I come out\nMake 'em disappear like clouds\nTo me, it's another year to you, it's all you worry 'bout\nYeah white tippy toe summer\nI make him go <mark>dumb duh</mark>\nHe doubled down on that text, says that <mark>I'm the only one</mark>\n\nMmmm\nI make him lose his cool\nYeah I make him go\n\nMmmm <mark>(ha ha)</mark>\nI can melt an igloo\nYeah cause I'm so dang hot <mark>(Yeah Yeah Yeah Yeah)</mark>\nI got everything you - that you're feening for" },
    { album: "디지털 싱글 Sticky", title: "Sticky", videoUrl: "https://youtu.be/Zl7POJW_b9A?si=RArexcuS9Ni_DVDa", chant: "<mark>(쥴리 나띠 벨- 하늘 KISS OF LIFE)</mark>\nHow long before we fall in love (키오프)\nHow long before we fall in love (스티키)\n\nHere's a ticket\nBaby wanna go out?\n푸른 Palm tree\n우릴 부르잖아\nDon't be picky\nYeah 누벼 이 Town 위를\n\nFeel like I'm hot stuff\nYou're my <mark>rock star</mark>\n\nHear me now 바람은 Sweet and salty\nMargarita같이\nHere on out\n이 여름 위를 Driving\nWon't you navigate me\n\nHow long before we fall in love\n(널 마주친 순간 I fly high)\nHow long before we fall in love\n(Let me know let me know)\nOh 뛰어들어 둘만의 <mark>Ocean dive</mark>\n왠지 묘한 이 느낌 녹아내려\n<mark>Sticky sticky sticky sticky</mark>\n\nLove got so poppin' flavor\n예상 못 한 New taste\n나른해 <mark>Summer fever</mark> 내리질 않네\nSo hear me now 달콤한 맘이 Drippin'\nLike gelato melting\nHere on out\n심장에 남긴 Darlin'\nWon't you navigate me\n\nHow long before we fall in love\n(널 마주친 순간 I fly high)\nHow long before we fall in love\n(Let me know let me know)\nOh 뛰어들어 둘만의 <mark>Ocean dive</mark>\n왠지 묘한 이 느낌 녹아내려\n<mark>Sticky sticky sticky sticky</mark>\n\n오늘 같은 날이 더 없대도\nI wanna keep on staying\nKnow you'd make me fly away\n오렌지빛 물든 저 노을에 <mark>Kiss it (함성)</mark>\nSo say yeah\n\n<mark>Sticky sticky sticky sticky</mark>\nAnd you're the one who's <mark>with it</mark>\n<mark>With it with it with me</mark>\n\nYeah 느려져도 돼 Like slomo motion\nI'd take you to the new world so boy\n발 닿는 대로 가 There's no way\n그리곤 내게로 와 Follow my lead\n<mark>Let's get it yeah</mark>\n\nHow long before we fall in love\n(저 나비처럼 난 Go round round)\nHow long before we fall in love\n(Let me know let me know)\nI like it 눈부신 여름빛\n지금 우린\n\n<mark>Sticky sticky sticky sticky (함성)</mark>" },
    { album: "디지털 싱글 Te Quiero", title: "Te Quiero", chant: "I guess the time has come <mark>We have to go (함성)</mark>\n\n<mark>Let's go somewhere</mark>\nIn one second, I can take you to where you want it\nI know that you like it\n<mark>If you want it</mark>\nI got passion to devote to what you're liking\nYou like it, you wanna see me fallin'\n\nYou're killing me softly\nI don't wanna lose you\nMy love has always been true\nI won't deny that my fear of the night when you leave me\nI know that you feel it too\n\nOooo, won't you give me your light\n(Give me that give me that give me that eh)\n<mark>I'll give you all that you like,</mark>\nBoy\n\nYou got me so in love\nI've never been this possessive\nI don't know how to quit\n<mark>Boy te quiero</mark>\nSo call me yours (Come boy)\nI don't need no permission so (Come say it)\nI don't know how to quit\n<mark>Boy te quiero</mark>\n\nGive me one more day and night\nI don't wanna stop it\nBaby won't you stay the night\n\nNever hold back\nImma get so high when you hold me tight\nImma be the one, we make it in this twilight\nWe runnin' outta time\nLast dance, I want it, want it, want it\n(I want it now)\n\nYou're killing me softly\nI don't wanna lose you\nMy love has always been true\nI won't deny that my fear of the night when you leave me\nI know that you feel it too\n\nOooo, won't you give me your light\n(Give me that give me that give me that eh)\n<mark>I'll give you all that you like,</mark>\nBoy\n\nYou got me so in love\nI've never been this possessive\nI don't know how to quit\n<mark>Boy te quiero</mark>\nSo call me yours (Come boy)\nI don't need no permission so (Come say it)\nI don't know how to quit\n<mark>Boy te quiero</mark>\n\n<mark>You want it</mark>\n<mark>Come get it</mark>\nI'm so in love\n<mark>All day</mark>\n<mark>All night</mark>\nTe quiero\n\nCome boy make it hot\nCome drop it low gimme all you got got got\nI need somebody\nI need somebody like you\n\nSo in love\nI've never been this possessive\nI don't know how to quit\n<mark>Boy te quiero</mark>\nSo call me yours\nI don't need no permission so\nI don't know how to quit\n<mark>Boy te quiero</mark>\n\nSo in love\nI've never been this possessive\nI don't know how to quit\n<mark>Boy te quiero</mark>\nSo call me yours\nI don't need no permission so\nI don't know how to quit\n<mark>Boy te quiero</mark>\n\nGo be my baby (I know you want it)\nGo be my baby na na na (Come on tell me)\nGo be my baby\n<mark>Let me know (함성)</mark>" },
    { album: "싱글 1집 Midas Touch", title: "Midas Touch", videoUrl: "https://youtu.be/MyN_tXPJfI0?si=r5g43CTYUGp74K7j", chant: "<mark>(8박자 쉬고) 쥴리 나띠 벨- 하늘 키스오브라이프</mark>\nBaby, count 10 That's all I need\n단숨에 빠져들어\n<mark>(Can't go back, can't go back)</mark>\n\nTick-tack, ain't got no time\n턱 끝을 겨누는 Love\n<mark>(Eat your love, eat your love)</mark>\n\nHey baby, I've been watching\n널 풀어헤친 달콤한 이 <mark>Danger (Danger)</mark>\n<mark>(Baby, I've been watching, boy)</mark>\n\nHey baby, I'm so toxic\n위험할수록 재밌잖아 It's <mark>alright (Alright)</mark>\n<mark>(Baby, I've been watching, boy)</mark>\n\n온몸이 원해 넌 나뿐인\n아찔한 Lovesick 밤새 날 앓게 돼\nI warned you with a single touch, boy\n도망쳐봐 어차피 날 벗어날 수 없어\n\nWhen I <mark>touch ya, kiss ya</mark>\nYou're gon realize\n(Baby, don't you think too much)\n\nBoy, if I <mark>touch ya, kiss ya</mark>\n<mark>Watch out</mark> 순간 변해버린 눈빛\nYou see, I got that <mark>Midas touch (함성)</mark>\n\nI really wanna stay all day with you\nYou know what we'll be going through?\n찾아봐 떨리는 이유\n몸부림칠수록 Gettin' <mark>deeper</mark>\n손짓 한 번으로 Makin' you weaker <mark>and weaker</mark>\n\nHey baby, I'm so toxic\n위험할수록 재밌잖아 It's <mark>alright (Alright)</mark>\n<mark>(You will end up in my hands my love)</mark>\n\n온몸이 원해 넌 나뿐인\n아찔한 Lovesick 밤새 날 앓게 돼\nI warned you with a single touch, boy\n도망쳐봐 어차피 날 벗어날 수 없어\n\nWhen I <mark>touch ya, kiss ya</mark>\nYou're gon realize\n(Baby, don't you think too much)\n\n<mark>(Brace! Brace!)</mark>\nAin't gotta sugarcoat me 생각과는 다를 걸\n<mark>(Brace! Brace!)</mark>\nMy love's a game, I play with it 너도 원한다면\n<mark>(Brace! Brace!)</mark>\nLooking like a kitty cat but 아무도 감당 못 해\nOnce the countdown's done You're never gonna move, yeah\n\nWhen I <mark>touch ya, kiss ya</mark>\nYou're gon realize\n(Baby, don't you think too much)\n\n내게 빠져드는 손짓\nYou see, I got that <mark>Midas touch (함성)</mark>" },
    { album: "미니 2집 Born to be XX", title: "Nobody Knows", videoUrl: "https://youtu.be/3nHJ9HVD7Ck?si=KMgXCRcfWRMbrnpp", chant: "<mark>(후! 직후에 바로/키스오브라이프)</mark>\n\nTonight, let's start the masquerade. \"I'm coming over\"\nBut nobody knows my little secret\n모든 걸 보여주기엔 좀 이르잖니\n아껴 둬 Never talk, never tell\n\nWhen you feel it, come and get it\n감당해 봐 Truth or Dare, It's alright\nYeah I could be there for you, yeah I can be there\n\n솔직한 나를 원했거든\n좀 더 기다려 I'll party all night\nYeah get this party started, let's get it started\n\nYeah nobody knows <mark>(Know)</mark>\nYeah nobody knows 보이는 대로 믿는 Good time <mark>(Such a good time)</mark>\nYeah such a good time together <mark>(Such a good time)</mark>\n\nYeah nobody knows <mark>(Know)</mark>\nYeah nobody knows 아무도 본 적 없는 Dancing in shadow <mark>(Guess what)</mark>\n나만의 Good time forever <mark>(That's right)</mark>\n\n미소 뒤에 숨긴 나의 Villain 같은 Vibe\n굳이 쓸데없는 얘긴 잘 안 하는 Type\nFor real? <mark>(For real! For real!)</mark>\n\nAnd later in the night, 저 달빛 아래 홀로 서\n깊은 어둠조차 두렵지 않아 Babe\n\nWhen you feel it, come and get it\n이끌리지 너도 모르게 Right\nYeah I could be there for you, yeah I can be there\n\n어떤 날 상상했는지는\n딱히 내게 중요하지 않아\nYeah get this party started, let's get it started\n\nYeah nobody knows <mark>(Know)</mark>\nYeah nobody knows 보이는 대로 믿는 Good time <mark>(Such a good time)</mark>\nYeah such a good time together <mark>(Such a good time)</mark>\n\nYeah nobody knows <mark>(Know)</mark>\nYeah nobody knows 아무도 본 적 없는 Dancing in shadow <mark>(Guess what)</mark>\n나만의 Good time forever <mark>(That's right)</mark>\n\nYeah what's good!\n<mark>Take your time, take your time time</mark>\n<mark>Take your time time, take your time time time</mark>\n\nLet's flip that switch!\n<mark>I'm a wild, I'm a wild wild</mark>\n<mark>I'm a wild wild, I'm a wild wild wild</mark>\n\nYeah what's good!\n<mark>Take your time, take your time time</mark>\n<mark>Take your time time, take your time time time</mark>\n\nLet's flip that switch!\n<mark>Make it wild, make it wild wild</mark>\n<mark>Make it wild wild, make it wild wild wild</mark>\n\nWhen you feel it, come and get it\n너도 나와 함께 Party all night\nYeah get this party started, let's get it started\n\nYeah nobody knows <mark>(Know)</mark>\nYeah nobody knows 보이는 대로 믿는 Good time <mark>(Such a good time)</mark>\nYeah such a good time together <mark>(Such a good time)</mark>\n\nYeah nobody knows <mark>(Know)</mark>\nYeah nobody knows 아무도 본 적 없는 Dancing in shadow <mark>(Guess what)</mark>\n나만의 Good time forever <mark>(That's right)</mark>\nGood time forever" },
    { album: "미니 2집 Born to be XX", title: "Bad News", videoUrl: "https://youtu.be/5ufVbbhSLJs?si=vuzRfOMMEXdgd6VH", chant: "<mark>(4박자 쉬고/키.스.오.브.라.이.프)</mark>\nHow do I look 내가 변했냐구\n티비를 틀어봐 I'm the woman on the moon 네 머리 위로 사뿐사뿐 걸어 Feel no <mark>gravity (gravity)</mark>\n우린 어떤 때보다도 Ain't no <mark>diggity (diggity)</mark>\nWhat goes around, some comes around\n안 들려 몰라\nLook at me now, 느낌이 와\n다르지 너완\nI'm ya wannabe, 입 밖으론 못 뱉지\nUh-oh, can't you see, can't you see\n\nRunnin' Runnin' Runnin' Runnin'\nSomething's Comin' Comin' Comin' (와아)\nSiren Siren Siren Siren Siren On & On & On\n<mark>Bad news</mark> 식지 않는 논란\n<mark>My attitude</mark> 못된 짓만 골라\nFrom the east side to the west side\n오와아아아 입 못 다물걸\n<mark>Bad news</mark> 하나둘씩 놀라\n<mark>We got the moves</mark>, 울려 퍼져 World wide\nCheck my profile on the website\n오와아아아 입 못 다물걸\n\n못 다물 걸 못 담을 걸 못 하는 건 못 하는 걸\n다 하는 건 안 하는 거 나 하는 건 다 다른 거\n누가 누굴 가르치나 잘하세요 니나\n헷갈려 아래위가 I'm the realest queen now 거슬림 보지 마 눈을 감아 <mark>(감아)</mark>\n어딜 가나 들릴 테니 귀를 막아 <mark>(막아)</mark>\nYou do you n I do I\n그러던가 말던가\n그 뻔한 말들로 날 재단할 수 없을걸\n\nRunnin' Runnin' Runnin' Runnin'\nSomething's Comin' Comin' Comin' (와아)\nSiren Siren Siren Siren Siren On & On & On\n<mark>Bad news</mark> 식지 않는 논란\n<mark>My attitude</mark> 못된 짓만 골라\nFrom the east side to the west side\n오와아아아 입 못 다물걸\n<mark>Bad news</mark> 하나둘씩 놀라\n<mark>We got the moves</mark>, 울려 퍼져 World wide\nCheck my profile on the website\n오와아아아 입 못 다물걸\n\nTo the left, to the right, back & forth <mark>(Woo!)</mark>\nYou know what, I'm the one, solid one <mark>(Woo!)</mark>\nCan I ride, back it up, driver mode <mark>(Woo!)</mark>\n오와아아아 입 못 다물걸\n\n<mark>Bad news</mark> 식지 않는 논란\n<mark>We know the truth</mark>, 이건 아무도 몰라\nFrom the east side to the west side\n오와아아아 입 못 다물걸\n<mark>Bad news</mark> 하나둘씩 놀라\n<mark>We got the moves</mark>, 울려 퍼져 World wide\nCheck my profile on the website\n오와아아아 입 못 다물걸\n\n<mark>(키! 오! 프! 와~)</mark>" },
    { album: "미니 1집 KISS OF LIFE", title: "쉿 (Shhh)", videoUrl: "https://youtu.be/DcopalV6rOA?si=scO4EuRIgoY14hef", chant: "Yeah I really want Yeah I really want Yeah I really\n<mark>(키 오 프 쉿)</mark>\nYeah I really want what I love, I can't get enough\n\n뻔히 보이는 네 표정에\n쓰여진 <mark>Question mark</mark>\n넌 원하게 될 거야 <mark>That girl like me</mark> 꿈에서 깨 We're just here to vibe\nYeah I really want\nYeah I really love\n이게 나인 걸 전부 벗어 던진 모습은 <mark>Holy</mark>\nImma dance in the rain so <mark>slowly</mark>\nHey can u feel me now?\n\n잊지 마 You're so <mark>special</mark>\nOne thing I know <mark>about you</mark>\n너만 알고 있음 된 거야\n누가 뭐라든지 넌 너야\n맞지 않는 옷은 벗어 던져 Then I say\n<mark>Back it up, Back it up</mark>\nI wake u up up up up\n\n<mark>Talk that 쉿</mark>\n내 숨은 <mark>On your lips</mark>\n(Now you get me right)\n<mark>It's so sweet</mark>\n날 따라 당당하게 네가 상상한 대로\n<mark>Just like this</mark>\n내 꿈은 <mark>On your lips</mark>\n(Now you get me right)\nGroove like this\n날 따라 흔들어놔 흔들어놔 Baby\n\nYeah I really want\nYeah I really want <mark>(쉿)</mark>\nYeah I really\nYeah I really want\nYeah I really want <mark>(쉿)</mark>\nYeah I really\nYeah I really want\nYeah I really want <mark>(쉿)</mark>\nYeah I really\n<mark>(키 오 프 쉿)</mark>\nYeah I really want what I love, I can't get enough\n\n내 표정 내 말투 다 Haute couture\n지나가는 거리마다 들려 Who's that girl, huh?\n본 적 없지 넌, Who's hot like this?\n\nWorldwide 둘러봐도 They're not like this\n6-inch heels, Walking in my zone (Yeah)\n몰입해 있어 U better watch ya tone (Ah Yeah)\n알잖아 We want it more\nYeah I really want what I love, I can't get enough\n\n잊지 마 You're so <mark>special</mark>\nOne thing I know <mark>about you</mark>\n너만 알고 있음 된 거야\n누가 뭐라든지 넌 너야\n맞지 않는 옷은 벗어 던져 Then I say\n<mark>Back it up, Back it up</mark>\nI wake u up up up up\n\n<mark>Talk that 쉿</mark>\n내 숨은 <mark>On your lips</mark>\n(Now you get me right)\n<mark>It's so sweet</mark>\n날 따라 당당하게 네가 상상한 대로\n<mark>Just like this</mark>\n내 꿈은 <mark>On your lips</mark>\n(Now you get me right)\nGroove like this\n날 따라 흔들어놔 흔들어놔 Baby\n<mark>(줄리나띠벨-하늘 키스 오브 라이프)</mark>\n<mark>(줄리나띠벨-하늘 키스 오브 라이프)</mark>\n\n네가 느끼는 감정\n자연스레 너를 이끌어가\nAnd we going hard, Cuz we are\n<mark>(just like that, we come back)</mark>\n<mark>(just like that, we come back)</mark>\n<mark>(just like that, we come back)</mark>\n<mark>(키 오 프 쉿)</mark>\n<mark>(just like that, we come back)</mark>\n\n<mark>Just like this (함성)</mark>\nWe gotta move like this\n(Now you get me right)\nWalk like this\n날 따라 당당하게 네가 상상한 대로\nJust like this\nWe gonna snoop like this\n(Now you get me right)\nGroove like this\n날 따라 흔들어놔 흔들어놔 Baby\n<mark>(키 오 프 쉿)</mark>" }
  ],
  notices: [
    { tag: "NOTICE", important: true, title: "SWEAT 음원총공팀 홈페이지 오픈", date: "2026.07.21", content: "SWEAT 컴백 스트리밍 총공 사이트 오픈 안내입니다. 주요 스트리밍 링크와 오늘의 총공 내용을 확인해 주세요." },
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
