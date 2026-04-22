;(function () {
  const currentPath = window.location.pathname
  const userLang = navigator.language || navigator.userLanguage
  const savedLang = localStorage.getItem('lang')

  const isZhUser = userLang.toLowerCase().startsWith('zh')

  // ===== 1️⃣ 首頁 redirect（只在 "/"）=====
  if (currentPath === '/' || currentPath === '/index.html') {
    if (!savedLang) {
      if (isZhUser) {
        window.location.replace('/zh_t/index.html')
      } else {
        window.location.replace('/en/index.html')
      }
    }
    return
  }

  // ===== 2️⃣ 判斷目前語系 =====
  const isZhPage = currentPath.startsWith('/zh_t/')
  const isEnPage = currentPath.startsWith('/en/')

  // ===== 3️⃣ 建立對應語言 URL =====
  let targetPath = null

  if (isZhPage) {
    targetPath = currentPath.replace('/zh_t/', '/en/')
  } else if (isEnPage) {
    targetPath = currentPath.replace('/en/', '/zh_t/')
  }

  // ===== 4️⃣ 如果沒有對應頁，不顯示 =====
  if (!targetPath) return

  // ===== 5️⃣ 判斷是否需要提示 =====
  if (!savedLang) {
    if ((isZhPage && !isZhUser) || (isEnPage && isZhUser)) {
      showLangNotice(targetPath, isZhPage ? 'en' : 'zh')
    }
  }

  // ===== 6️⃣ UI 提示 =====
  function showLangNotice(target, targetLang) {
    const bar = document.createElement('div')
    bar.style.position = 'fixed'
    bar.style.bottom = '0'
    bar.style.left = '0'
    bar.style.width = '100%'
    bar.style.background = '#294076'
    bar.style.color = '#fff'
    bar.style.padding = '10px'
    bar.style.textAlign = 'center'
    bar.style.zIndex = '9999'

    const text = targetLang === 'en' ? 'This page is in Chinese. View in English?' : '此頁為英文內容，是否切換為中文？'

    bar.innerHTML = `
      ${text}
      <a href="${target}" id="langSwitchBtn" style="color:#ffcc00; margin-left:10px;">
        ${targetLang === 'en' ? 'Go to English' : '切換中文'}
      </a>
      <span id="closeLang" style="margin-left:15px; cursor:pointer;">✕</span>
    `

    document.body.appendChild(bar)

    // 點擊切換 → 記住語言
    document.getElementById('langSwitchBtn').addEventListener('click', () => {
      localStorage.setItem('lang', targetLang)
    })

    // 關閉提示
    document.getElementById('closeLang').addEventListener('click', () => {
      bar.remove()
      localStorage.setItem('lang', 'keep') // 不再提示
    })
  }
})()
