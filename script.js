(() => {
  const toggle = document.querySelector('#language-toggle');
  const meta = document.querySelector('meta[name="description"]');
  let language = 'en';
  try { language = localStorage.getItem('gc-language') === 'zh' ? 'zh' : 'en'; } catch {}

  function applyLanguage() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(element => {
      element.textContent = element.dataset[language];
    });
    toggle.innerHTML = language === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
    toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    document.querySelector('nav').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
    document.querySelector('.round-link').setAttribute('aria-label', language === 'zh' ? '了解更多' : 'Read more about me');
    document.title = language === 'zh' ? 'guangzhao Cao · 个人主页' : 'guangzhao Cao · Personal website';
    meta.content = language === 'zh'
      ? 'guangzhao Cao 的个人学术主页：兰州大学数学与统计学院硕士研究生。教育经历与联系方式。'
      : 'guangzhao Cao — MS student at the School of Mathematics and Statistics, Lanzhou University. Education and contact information.';
  }

  toggle.addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    applyLanguage();
    try { localStorage.setItem('gc-language', language); } catch {}
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  applyLanguage();
})();
