(function () {
  'use strict';

  const CATEGORIES = window.BOOKMARKS || [];
  const EXT_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>';

  const main = document.getElementById('sections');
  const emptyBox = document.getElementById('empty');
  const catsNav = document.getElementById('cats');
  const searchInput = document.getElementById('search');
  const resultText = document.getElementById('resultText');
  const footer = document.querySelector('footer');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getAbbr(tool) {
    if (tool.abbr) return tool.abbr;
    const words = String(tool.name).split(/\s+/).filter(Boolean);
    if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
    return words.length ? words[0].slice(0, 2).toUpperCase() : '?';
  }

  function getDomain(tool) {
    if (tool.domain) return tool.domain;
    try { return new URL(tool.url).hostname; } catch (error) { return ''; }
  }

  function getSearchText(tool) {
    return [tool.name, tool.tags || '', getDomain(tool)].join(' ').replace(/\s+/g, ' ').trim();
  }

  function cardHtml(tool) {
    return '<a class="card" href="' + escapeHtml(tool.url) + '" target="_blank" rel="noopener noreferrer" data-search="' + escapeHtml(getSearchText(tool)) + '">' +
      '<div class="card-top">' +
      '<span class="card-favicon" aria-hidden="true">' + escapeHtml(getAbbr(tool)) + '</span>' +
      '<span class="card-name">' + escapeHtml(tool.name) + '</span>' +
      '<span class="card-ext" aria-hidden="true">' + EXT_ICON + '</span>' +
      '</div>' +
      '<p class="card-desc">' + escapeHtml(tool.desc || '') + '</p>' +
      '<span class="card-domain">' + escapeHtml(getDomain(tool)) + '</span>' +
      '</a>';
  }

  function sectionHtml(category) {
    const hue = category.hue == null ? 190 : category.hue;
    return '<section class="section" id="' + escapeHtml(category.id) + '" data-cat="' + escapeHtml(category.name) + '" data-hue="' + hue + '" style="--tint-h:' + hue + '">' +
      '<div class="section-head">' +
      '<span class="section-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (category.icon || '') + '</svg></span>' +
      '<h2 class="section-title">' + escapeHtml(category.name) + '</h2>' +
      '<span class="section-count">' + category.tools.length + '</span>' +
      '<span class="section-line" aria-hidden="true"></span>' +
      '</div>' +
      '<div class="grid">' + category.tools.map(cardHtml).join('') + '</div>' +
      '</section>';
  }

  const holder = document.createElement('div');
  holder.innerHTML = CATEGORIES.map(sectionHtml).join('');
  const fragment = document.createDocumentFragment();
  while (holder.firstChild) fragment.appendChild(holder.firstChild);
  main.insertBefore(fragment, emptyBox);

  const sections = Array.from(main.querySelectorAll('.section'));
  const totalCount = main.querySelectorAll('.card').length;

  document.getElementById('statTools').textContent = totalCount;
  document.getElementById('statCats').textContent = sections.length;
  footer.textContent = '本地收藏 · ' + sections.length + ' 个分类 · ' + totalCount + ' 个工具';

  const catLinks = sections.map((section) => {
    const link = document.createElement('a');
    link.className = 'cat-link';
    link.href = '#' + section.id;
    link.style.setProperty('--tint-h', section.dataset.hue);
    link.innerHTML = '<span class="cat-dot" aria-hidden="true"></span>' +
      '<span class="cat-name">' + escapeHtml(section.dataset.cat) + '</span>' +
      '<span class="cat-count">0</span>';
    link.addEventListener('click', (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
    });
    catsNav.appendChild(link);
    return {
      section,
      link,
      count: link.querySelector('.cat-count'),
      badge: section.querySelector('.section-count')
    };
  });

  function updateActive() {
    const visible = catLinks.filter((item) => !item.section.hidden);
    let active = visible.length ? visible[0].section : null;
    visible.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= 130) active = item.section;
    });
    catLinks.forEach((item) => {
      item.link.classList.toggle('active', item.section === active);
    });
  }

  function applyFilter(rawTerm) {
    const term = rawTerm.trim().toLowerCase();
    let visibleTotal = 0;

    catLinks.forEach(({ section, link, count, badge }) => {
      let visibleInSection = 0;
      section.querySelectorAll('.card').forEach((card) => {
        const hit = !term || card.dataset.search.toLowerCase().includes(term);
        card.hidden = !hit;
        if (hit) visibleInSection += 1;
      });
      count.textContent = visibleInSection;
      if (badge) badge.textContent = visibleInSection;
      const isEmpty = visibleInSection === 0;
      section.hidden = isEmpty;
      link.style.opacity = isEmpty ? '0.4' : '1';
      visibleTotal += visibleInSection;
    });

    emptyBox.classList.toggle('show', visibleTotal === 0);
    resultText.textContent = term
      ? '匹配 ' + visibleTotal + ' / ' + totalCount + ' 个工具'
      : '共 ' + totalCount + ' 个工具';

    updateActive();
  }

  searchInput.addEventListener('input', (event) => applyFilter(event.target.value));

  document.addEventListener('keydown', (event) => {
    const isTyping = document.activeElement === searchInput;
    if ((event.key === '/' && !isTyping) || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k')) {
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (event.key === 'Escape' && isTyping) {
      searchInput.value = '';
      applyFilter('');
      searchInput.blur();
    }
  });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActive();
      ticking = false;
    });
  }, { passive: true });

  const themeBtn = document.getElementById('themeBtn');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  const icons = {
    dark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z"/></svg>',
    light: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
  };

  function setTheme(theme) {
    root.dataset.theme = theme;
    themeIcon.innerHTML = theme === 'dark' ? icons.dark : icons.light;
    themeBtn.setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    try { localStorage.setItem('fav-theme', theme); } catch (error) {}
  }

  themeBtn.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('fav-theme') || 'light'; } catch (error) {}
  setTheme(savedTheme);

  applyFilter('');
})();