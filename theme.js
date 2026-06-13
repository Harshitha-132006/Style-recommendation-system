// ── theme.js ─────────────────────────────────────────────────
export function initTheme() {
  const saved = localStorage.getItem('sz-theme') || 'dark';
  applyTheme(saved);
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('sz-theme', theme);
  const thumb = document.querySelector('#theme-toggle .toggle-thumb');
  if (thumb) thumb.textContent = theme === 'dark' ? '🌙' : '☀️';
}
