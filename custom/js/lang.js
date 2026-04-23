;(function () {
  const STORAGE_KEY = 'preferredLang'
  const PROMPT_KEY = 'langPromptShown'

  const userLang = navigator.language || navigator.userLanguage
  const browserLang = userLang.toLowerCase().includes('zh') ? 'zh_t' : 'en'

  const path = window.location.pathname

  const isZhPage = path.includes('/zh_t/')
  const isEnPage = path.includes('/en/')

  const savedLang = localStorage.getItem(STORAGE_KEY)

  // === 1️⃣ 首頁自動導轉（優先用使用者選擇）===
  if (path === '/' || path === '/index.html') {
    const targetLang = savedLang || browserLang
    window.location.replace(`/${targetLang}/index.html`)
    return
  }

  // === 2️⃣ 決定目前語言 ===
  const currentLang = isZhPage ? 'zh_t' : isEnPage ? 'en' : null

  // === 3️⃣ 如果已經是偏好語言 → 不提示 ===
  if (savedLang && currentLang === savedLang) return

  // === 4️⃣ 判斷是否需要提示 ===
  let targetUrl = ''

  if (browserLang === 'zh_t' && isEnPage) {
    targetUrl = path.replace('/en/', '/zh_t/')
  }

  if (browserLang === 'en' && isZhPage) {
    targetUrl = path.replace('/zh_t/', '/en/')
  }

  if (!targetUrl) return

  if (sessionStorage.getItem(PROMPT_KEY)) return

  // === 5️⃣ 多語系文案 ===
  const text = {
    zh_t: {
      message: '偵測到您的語言，是否切換到中文頁面？',
      switchBtn: '切換',
      stayBtn: '保持目前語言'
    },
    en: {
      message: 'We detected your language. Switch to your preferred version?',
      switchBtn: 'Switch',
      stayBtn: 'Stay'
    }
  }

  const langText = text[browserLang]

  // === 6️⃣ 建立 Banner ===
  const banner = document.createElement('div')
  banner.id = 'lang-banner'
  banner.innerHTML = `
    <div class="lang-banner-inner">
      <span>${langText.message}</span>
      <div class="lang-actions">
        <button class="btn btn-sm btn-primary me-2" id="lang-switch">
          ${langText.switchBtn}
        </button>
        <button class="btn btn-sm btn-outline-secondary" id="lang-close">
          ${langText.stayBtn}
        </button>
      </div>
    </div>
  `

  document.body.appendChild(banner)

  // === 7️⃣ 動畫進場 ===
  setTimeout(() => {
    banner.classList.add('show')
  }, 50)

  // === 8️⃣ 切換語言 ===
  document.getElementById('lang-switch').addEventListener('click', function () {
    localStorage.setItem(STORAGE_KEY, browserLang)
    window.location.href = targetUrl
  })

  // === 9️⃣ 關閉 ===
  document.getElementById('lang-close').addEventListener('click', function () {
    banner.classList.remove('show')
    setTimeout(() => banner.remove(), 300)
    sessionStorage.setItem(PROMPT_KEY, 'true')
  })
})()
