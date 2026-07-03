;(function () {
  const PROMPT_KEY = 'langPromptShown'

  const userLang = navigator.language || navigator.userLanguage
  const browserLang = userLang.toLowerCase().includes('zh') ? 'zh_t' : 'en'

  const path = window.location.pathname

  const isZhPage = path.includes('/zh_t/')
  const isEnPage = path.includes('/en/')

  // ========= 1. 首頁 =========
  if (path === '/' || path === '/index.html') {
    window.location.replace(`/${browserLang}/index.html`)
    return
  }

  // ========= 2. 判斷是否需要提示 =========
  let targetUrl = ''

  if (browserLang === 'zh_t' && isEnPage) {
    targetUrl = path.replace('/en/', '/zh_t/')
  }

  if (browserLang === 'en' && isZhPage) {
    targetUrl = path.replace('/zh_t/', '/en/')
  }

  if (!targetUrl) return

  // 同一次 Session 已提示過
  if (sessionStorage.getItem(PROMPT_KEY)) return

  // ========= 3. 多語系 =========
  const text = {
    zh_t: {
      message: '偵測到您的瀏覽器語言為繁體中文，是否切換？',
      switchBtn: '切換',
      stayBtn: '保持目前語言'
    },
    en: {
      message: 'We detected your browser language is English. Switch?',
      switchBtn: 'Switch',
      stayBtn: 'Stay'
    }
  }

  const langText = text[browserLang]

  // ========= 4. 建立 Banner =========
  const banner = document.createElement('div')
  banner.id = 'lang-banner'

  banner.innerHTML = `
    <div class="lang-banner-inner">
      <span>${langText.message}</span>

      <div class="lang-actions">
        <button
          id="lang-switch"
          class="btn btn-sm btn-primary me-2">
          ${langText.switchBtn}
        </button>

        <button
          id="lang-close"
          class="btn btn-sm btn-outline-secondary">
          ${langText.stayBtn}
        </button>
      </div>
    </div>
  `

  document.body.appendChild(banner)

  requestAnimationFrame(() => {
    banner.classList.add('show')
  })

  // ========= 5. 切換 =========
  document.getElementById('lang-switch').addEventListener('click', function () {
    window.location.href = targetUrl
  })

  // ========= 6. 保持目前語言 =========
  document.getElementById('lang-close').addEventListener('click', function () {
    sessionStorage.setItem(PROMPT_KEY, 'true')

    banner.classList.remove('show')

    setTimeout(() => {
      banner.remove()
    }, 300)
  })
})()
