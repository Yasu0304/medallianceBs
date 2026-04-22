;(function () {
  const userLang = navigator.language || navigator.userLanguage
  const isZhUser = userLang.toLowerCase().includes('zh')

  const path = window.location.pathname

  const isZhPage = path.includes('/zh_t/')
  const isEnPage = path.includes('/en/')

  // === 1️⃣ 首頁自動導轉 ===
  if (path === '/' || path === '/index.html') {
    if (isZhUser) {
      window.location.replace('/zh_t/index.html')
    } else {
      window.location.replace('/en/index.html')
    }
    return
  }

  // === 2️⃣ 所有頁面都顯示提示（重點）===
  let targetUrl = ''

  if (isZhUser && isEnPage) {
    targetUrl = path.replace('/en/', '/zh_t/')
  }

  if (!isZhUser && isZhPage) {
    targetUrl = path.replace('/zh_t/', '/en/')
  }

  if (targetUrl) {
    showLangPrompt(targetUrl)
  }

  function showLangPrompt(url) {
    if (sessionStorage.getItem('langPromptShown')) return

    const confirmSwitch = confirm('We detected your browser language. Switch to your preferred language?')

    if (confirmSwitch) {
      window.location.href = url
    } else {
      sessionStorage.setItem('langPromptShown', 'true')
    }
  }
})()
