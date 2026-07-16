;(() => {
  // =============================
  // 同一個 Tab 不重複提示
  // =============================

  const SESSION_KEY = 'lang-banner-dismiss'

  if (sessionStorage.getItem(SESSION_KEY)) return

  // =============================
  // Browser Language
  // =============================

  const browserLang = (navigator.language || navigator.userLanguage).toLowerCase().startsWith('zh') ? 'zh' : 'en'

  // =============================
  // Current Path
  // =============================

  const path = location.pathname

  const isZh = path.startsWith('/zh_t/')
  const isEn = !isZh

  // =============================
  // 是否需要提示
  // =============================

  if ((browserLang === 'zh' && isZh) || (browserLang === 'en' && isEn)) {
    return
  }

  // =============================
  // 產生另一語系網址
  // =============================

  let targetUrl = ''

  if (browserLang === 'zh') {
    targetUrl = '/zh_t' + path
  } else {
    targetUrl = path.replace(/^\/zh_t/, '') || '/'
  }

  // =============================
  // HEAD確認存在
  // =============================

  fetch(targetUrl, {
    method: 'HEAD',
    cache: 'no-store'
  })
    .then(res => {
      if (!res.ok) return

      showBanner(targetUrl)
    })
    .catch(() => {})
})()

function showBanner(targetUrl) {
  const zh = navigator.language.toLowerCase().startsWith('zh')

  const text = zh
    ? {
        title: '切換至繁體中文版？',
        body: '我們偵測到您的瀏覽器偏好語言為繁體中文。',
        switchBtn: '切換',
        stayBtn: '保持目前語言'
      }
    : {
        title: 'Switch to English?',
        body: 'We detected your browser language is English.',
        switchBtn: 'Switch',
        stayBtn: 'Stay'
      }

  const banner = document.createElement('div')

  banner.id = 'languageBanner'

  banner.innerHTML = `
<div class="language-banner shadow-lg">

<div class="d-flex align-items-start">

<div class="me-3 fs-4">
🌐
</div>

<div class="flex-grow-1">

<div class="fw-semibold mb-1">

${text.title}

</div>

<div class="small text-secondary">

${text.body}

</div>

</div>

</div>

<div class="mt-3 text-end">

<button
id="lang-switch"
class="btn btn-primary btn-sm me-2">

${text.switchBtn}

</button>

<button
id="lang-close"
class="btn btn-outline-secondary btn-sm">

${text.stayBtn}

</button>

</div>

</div>
`

  document.body.appendChild(banner)

  requestAnimationFrame(() => {
    banner.classList.add('show')
  })

  // =============================
  // Switch
  // =============================

  document.getElementById('lang-switch').onclick = () => {
    location.href = targetUrl
  }

  // =============================
  // Close
  // =============================

  document.getElementById('lang-close').onclick = () => {
    sessionStorage.setItem('lang-banner-dismiss', '1')

    banner.classList.remove('show')

    setTimeout(() => {
      banner.remove()
    }, 250)
  }
}
