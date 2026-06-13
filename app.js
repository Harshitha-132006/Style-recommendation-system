// ── app.js ───────────────────────────────────────────────────
import { initTheme } from './theme.js';
import { initCamera } from './camera.js';
import { initRecommendations, generateRecommendations } from './recommendations.js';
import { initChatbot } from './chatbot.js';
import { initGallery } from './gallery.js';
import { renderFavorites } from './favorites.js';

// Global app state
const state = {
  gender: 'women',
  bodyType: 'hourglass',
  skinTone: 'medium',
  occasion: 'casual',
  userPhoto: null,
  recommended: false
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('👗 Styliosenz.ai initializing...');
  
  // 1. Initialize core modules
  initTheme();
  initChatbot();
  initGallery();
  renderFavorites();

  // 2. Initialize Camera & Upload
  initCamera((photoData) => {
    state.userPhoto = photoData;
    // Auto-scroll to form after capture
    document.getElementById('style-profile-form')?.scrollIntoView({ behavior: 'smooth' });
  });

  // 3. Initialize Recommendation Logic
  initRecommendations(state);

  // 4. Global events for Toast and Favorites sync
  window.addEventListener('sz:toast', (e) => showToast(e.detail.msg, e.detail.type));
  window.addEventListener('sz:favorites-changed', () => renderFavorites());

  // 5. Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // 6. Mobile menu toggle
  const ham = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (ham && menu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      menu.classList.toggle('open');
    });
    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        ham.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  console.log('✨ Styliosenz.ai Ready!');
});

/**
 * Global Toast Notification
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast anim-fade-in-up ${type}`;
  toast.innerHTML = `<span>${type === 'error' ? '❌' : '✨'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('exit');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
