/**
 * Portfolio Application Logic
 * Interactive rendering, theme management, command palette, and article reader
 */

(function () {
  'use strict';

  // State
  let currentProjectFilter = 'All';
  let currentTheme = localStorage.getItem('theme') || 'dark';

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', initApp);

  function initApp() {
    applyTheme(currentTheme);
    renderProfile();
    renderExperience();
    renderProjects();
    renderArticles();
    renderSkills();
    setupEventListeners();
    setupCommandPalette();
    setupScrollSpy();
  }

  /* ==========================================================================
     Theme Management
     ========================================================================== */

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  }

  function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme} mode`);
  }

  function updateThemeIcon(theme) {
    const iconBtn = document.getElementById('theme-toggle-btn');
    if (!iconBtn) return;
    if (theme === 'dark') {
      iconBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    } else {
      iconBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  }

  /* ==========================================================================
     Profile & Hero Rendering
     ========================================================================== */

  function renderProfile() {
    const p = SITE_DATA.profile;

    const brandAvatar = document.getElementById('brand-avatar');
    if (brandAvatar) brandAvatar.textContent = p.avatarText;

    const brandName = document.getElementById('brand-name');
    if (brandName) brandName.textContent = p.name;

    const statusBadge = document.getElementById('hero-status-badge');
    if (statusBadge) {
      statusBadge.innerHTML = `<span class="pulse-dot"></span><span>${p.statusBadge}</span>`;
    }

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
      heroTitle.innerHTML = `Hey, I'm <span class="hero-gradient-text">${p.name}</span>.`;
    }

    const heroHeadline = document.getElementById('hero-headline');
    if (heroHeadline) heroHeadline.textContent = p.headline;

    const heroBio = document.getElementById('hero-bio');
    if (heroBio) heroBio.textContent = p.bio;

    // Social and contact links
    const ghLink = document.getElementById('social-github');
    if (ghLink) ghLink.href = p.socials.github;

    const liLink = document.getElementById('social-linkedin');
    if (liLink) liLink.href = p.socials.linkedin;

    const devtoLink = document.getElementById('social-devto');
    if (devtoLink) devtoLink.href = p.socials.devto;

    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    const footerName = document.getElementById('footer-name');
    if (footerName) footerName.textContent = p.name;
  }

  /* ==========================================================================
     Experience Rendering
     ========================================================================== */

  function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    container.innerHTML = SITE_DATA.experience.map(item => `
      <article class="experience-item">
        <div class="exp-header">
          <h3 class="exp-role-title">
            ${item.role} <span class="exp-company">@ ${item.company}</span>
          </h3>
          <div class="exp-meta">
            <span>${item.period}</span>
            <span>&bull;</span>
            <span>${item.location}</span>
          </div>
        </div>
        <p class="exp-desc">${item.description}</p>
        <ul class="exp-highlights">
          ${item.highlights.map(hl => `<li class="exp-highlight-item">${hl}</li>`).join('')}
        </ul>
        <div class="tag-list">
          ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  /* ==========================================================================
     Projects Rendering & Filtering
     ========================================================================== */

  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const filterContainer = document.getElementById('project-filters');
    if (!grid) return;

    // Build filter buttons if not yet initialized
    if (filterContainer && filterContainer.children.length === 0) {
      const tags = ['All', ...new Set(SITE_DATA.projects.map(p => p.tag))];
      filterContainer.innerHTML = tags.map(tag => `
        <button class="filter-btn ${tag === currentProjectFilter ? 'active' : ''}" data-filter="${tag}">
          ${tag}
        </button>
      `).join('');

      filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        currentProjectFilter = btn.getAttribute('data-filter');
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects();
      });
    }

    const filtered = currentProjectFilter === 'All'
      ? SITE_DATA.projects
      : SITE_DATA.projects.filter(p => p.tag === currentProjectFilter);

    grid.innerHTML = filtered.map(p => `
      <div class="project-card ${p.featured ? 'featured' : ''}" data-id="${p.id}">
        <div class="project-top">
          <div class="project-tag">${p.tag}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
        </div>
        <div class="project-bottom">
          <div class="tag-list">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer-links">
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link">
              View Repository
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
            ${p.stars ? `<span class="project-stars">★ ${p.stars}</span>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     Articles / Writing Rendering
     ========================================================================== */

  function renderArticles() {
    const list = document.getElementById('articles-list');
    if (!list) return;

    list.innerHTML = SITE_DATA.articles.map(article => `
      <article class="article-card" data-article-id="${article.id}">
        <div class="article-header">
          <h3 class="article-title">${article.title}</h3>
          <div class="article-meta">
            <span>${article.date}</span>
            <span>&bull;</span>
            <span>${article.readTime}</span>
          </div>
        </div>
        <p class="article-summary">${article.summary}</p>
        <div class="article-footer">
          <div class="tag-list">
            ${article.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <span class="read-article-prompt">
            Read Deep Dive →
          </span>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards to open reader modal
    list.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-article-id');
        openArticleModal(id);
      });
    });
  }

  /* ==========================================================================
     Skills Matrix Rendering
     ========================================================================== */

  function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    grid.innerHTML = SITE_DATA.skills.map(group => `
      <div class="skill-category-card">
        <h4 class="skill-cat-title">${group.category}</h4>
        <div class="tag-list">
          ${group.items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     Article Reader Modal
     ========================================================================== */

  function openArticleModal(articleId) {
    const article = SITE_DATA.articles.find(a => a.id === articleId);
    if (!article) return;

    const modal = document.getElementById('article-modal');
    const titleEl = document.getElementById('modal-article-title');
    const metaEl = document.getElementById('modal-article-meta');
    const bodyEl = document.getElementById('modal-article-content');

    if (titleEl) titleEl.textContent = article.title;
    if (metaEl) metaEl.textContent = `${article.date} \u2022 ${article.readTime} \u2022 ${article.tags.join(', ')}`;
    if (bodyEl) bodyEl.innerHTML = parseMarkdownToHtml(article.content);

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Simple, secure lightweight markdown-to-HTML formatter for technical articles
  function parseMarkdownToHtml(md) {
    if (!md) return '';
    let html = md.trim();

    // Code blocks
    html = html.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      const escapedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<pre><code class="language-${lang}">${escapedCode}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, (match, code) => {
      const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<code>${escaped}</code>`;
    });

    // Headers
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');

    // Bold text
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Unordered list items
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    // Paragraphs (lines separated by double newlines that are not headers/pre)
    const blocks = html.split(/\n\s*\n/);
    return blocks.map(block => {
      block = block.trim();
      if (!block) return '';
      if (block.startsWith('<h') || block.startsWith('<pre') || block.startsWith('<ul') || block.startsWith('<ol')) {
        return block;
      }
      return `<p>${block}</p>`;
    }).join('\n');
  }

  /* ==========================================================================
     Command Palette (Cmd+K / Ctrl+K)
     ========================================================================== */

  function setupCommandPalette() {
    const backdrop = document.getElementById('cmd-palette-backdrop');
    const input = document.getElementById('cmd-input');
    const results = document.getElementById('cmd-results');
    const triggerBtn = document.getElementById('cmd-k-trigger');

    if (!backdrop || !input || !results) return;

    const commands = [
      { name: "About Me", type: "Section", action: () => scrollToSection('about') },
      { name: "Experience & Career", type: "Section", action: () => scrollToSection('experience') },
      { name: "Projects & Code", type: "Section", action: () => scrollToSection('projects') },
      { name: "Writings & Articles", type: "Section", action: () => scrollToSection('writing') },
      { name: "Technical Skills", type: "Section", action: () => scrollToSection('skills') },
      { name: "Toggle Theme (Dark/Light)", type: "Action", action: () => toggleTheme() },
      { name: "Copy Email Address", type: "Action", action: () => copyEmail() },
      { name: "GitHub Profile", type: "Link", action: () => window.open(SITE_DATA.profile.socials.github, '_blank') },
      { name: "LinkedIn Profile", type: "Link", action: () => window.open(SITE_DATA.profile.socials.linkedin, '_blank') },
      { name: "Dev.to Technical Blog", type: "Link", action: () => window.open(SITE_DATA.profile.socials.devto, '_blank') }
    ];

    // Add projects to search
    SITE_DATA.projects.forEach(p => {
      commands.push({
        name: `Project: ${p.title}`,
        type: p.tag,
        action: () => window.open(p.link, '_blank')
      });
    });

    // Add articles to search
    SITE_DATA.articles.forEach(a => {
      commands.push({
        name: `Article: ${a.title}`,
        type: "Reading",
        action: () => openArticleModal(a.id)
      });
    });

    function openPalette() {
      backdrop.classList.add('open');
      input.value = '';
      renderPaletteResults('');
      input.focus();
    }

    function closePalette() {
      backdrop.classList.remove('open');
    }

    function renderPaletteResults(query) {
      const q = query.toLowerCase().trim();
      const filtered = commands.filter(c => c.name.toLowerCase().includes(q) || c.type.toLowerCase().includes(q));

      if (filtered.length === 0) {
        results.innerHTML = `<li class="cmd-item" style="color: var(--text-muted); justify-content: center;">No results found</li>`;
        return;
      }

      results.innerHTML = filtered.map((c, idx) => `
        <li class="cmd-item ${idx === 0 ? 'selected' : ''}" data-index="${idx}">
          <span>${c.name}</span>
          <span class="cmd-item-type">${c.type}</span>
        </li>
      `).join('');

      results.querySelectorAll('.cmd-item').forEach((item, idx) => {
        item.addEventListener('click', () => {
          filtered[idx].action();
          closePalette();
        });
      });
    }

    if (triggerBtn) triggerBtn.addEventListener('click', openPalette);

    input.addEventListener('input', (e) => renderPaletteResults(e.target.value));

    // Global keyboard listener
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (backdrop.classList.contains('open')) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === 'Escape') {
        closePalette();
        closeArticleModal();
      }
    });

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closePalette();
    });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  /* ==========================================================================
     Event Listeners & Clipboard
     ========================================================================== */

  function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Email copy
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', copyEmail);
    });

    // Modal close
    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeArticleModal);

    const modalBackdrop = document.getElementById('article-modal');
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeArticleModal();
      });
    }
  }

  function copyEmail() {
    const email = SITE_DATA.profile.email;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        fallbackCopy(email);
      });
    } else {
      fallbackCopy(email);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${text} to clipboard!`);
    } catch (err) {
      prompt("Copy to clipboard:", text);
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

})();
