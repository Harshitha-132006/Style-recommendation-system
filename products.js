// ── products.js ──────────────────────────────────────────────
import { loadFavorites, toggleFavorite, isFavorite } from './favorites.js';

export function renderProductCard(product, mini = false) {
  const saved = isFavorite(product.id);
  return `
  <div class="product-card anim-scale-in" data-id="${product.id}">
    <div class="product-card-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'">
      <span class="product-card-category cat-${product.category}">${product.category}</span>
      <button class="product-fav-btn ${saved ? 'saved' : ''}" data-product-id="${product.id}" title="Save to Favorites">
        ${saved ? '❤️' : '🤍'}
      </button>
    </div>
    <div class="product-card-body">
      <div class="product-card-brand">${product.brand}</div>
      <div class="product-card-name">${product.name}</div>
      <div class="product-card-meta">
        <div class="product-card-price">${product.price}</div>
        <div class="stars">${getStars(product.rating)} <span style="color:var(--text-muted);font-size:0.75rem">${product.rating}</span></div>
      </div>
      <div class="product-card-actions">
        <button class="buy-now-btn" data-product-id="${product.id}">
          🛍️ Buy Now ▾
        </button>
        <div class="buy-now-dropdown" id="dropdown-${product.id}">
          <a class="buy-now-option" href="${product.amazon}" target="_blank" rel="noopener">
            <span class="platform-icon">🛒</span> Amazon India
          </a>
          <a class="buy-now-option" href="${product.myntra}" target="_blank" rel="noopener">
            <span class="platform-icon">👗</span> Myntra
          </a>
          <a class="buy-now-option" href="${product.flipkart}" target="_blank" rel="noopener">
            <span class="platform-icon">🏬</span> Flipkart
          </a>
          ${product.zara ? `
          <a class="buy-now-option" href="${product.zara}" target="_blank" rel="noopener">
            <span class="platform-icon">🏷️</span> Zara Official
          </a>` : ''}
        </div>
      </div>
    </div>
  </div>`;
}

export function renderProductsInto(container, products) {
  if (!container) return;
  if (!products || products.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="icon">✨</div><p>No items found for this filter. Try another!<br>Fill in your style profile and get recommendations.</p></div>`;
    return;
  }
  container.innerHTML = products.map(p => renderProductCard(p)).join('');
  attachCardListeners(container);
}

export function attachCardListeners(scope = document) {
  // Buy Now toggles
  scope.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.dataset.productId;
      const dd  = document.getElementById(`dropdown-${pid}`);
      if (!dd) return;
      // Close all others
      document.querySelectorAll('.buy-now-dropdown.open').forEach(el => {
        if (el !== dd) el.classList.remove('open');
      });
      dd.classList.toggle('open');
    });
  });

  // Favorite buttons
  scope.querySelectorAll('.product-fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.dataset.productId;
      const saved = toggleFavorite(pid);
      btn.textContent = saved ? '❤️' : '🤍';
      btn.classList.toggle('saved', saved);
      if (saved) btn.style.animation = 'heartbeat 0.6s ease';
      window.dispatchEvent(new CustomEvent('sz:favorites-changed'));
      const msg = saved ? '❤️ Added to your favorites!' : '🤍 Removed from favorites.';
      window.dispatchEvent(new CustomEvent('sz:toast', { detail: { msg } }));
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.buy-now-dropdown.open').forEach(el => el.classList.remove('open'));
  }, { once: false });
}

function getStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
