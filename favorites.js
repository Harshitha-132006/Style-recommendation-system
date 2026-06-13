// ── favorites.js ─────────────────────────────────────────────
import { outfits, footwear, jewellery, trendingItems } from './data.js';

const KEY = 'sz-favorites';
const ALL_PRODUCTS = [...outfits, ...footwear, ...jewellery, ...trendingItems];

export function loadFavorites() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function saveFavorites(ids) {
  localStorage.setItem(KEY, JSON.stringify(ids));
}

export function isFavorite(id) {
  return loadFavorites().includes(id);
}

export function toggleFavorite(id) {
  const favs = loadFavorites();
  const idx  = favs.indexOf(id);
  if (idx === -1) { favs.push(id); saveFavorites(favs); return true; }
  else            { favs.splice(idx, 1); saveFavorites(favs); return false; }
}

export function getFavoriteProducts() {
  const ids = loadFavorites();
  return ALL_PRODUCTS.filter(p => ids.includes(p.id));
}

export function renderFavorites() {
  const container = document.getElementById('favorites-grid');
  if (!container) return;
  const products = getFavoriteProducts();
  if (products.length === 0) {
    container.innerHTML = `
      <div class="favorites-empty">
        <div class="icon">🤍</div>
        <p>No saved outfits yet.<br>Click the heart icon on any product to save it here!</p>
      </div>`;
    return;
  }
  import('./products.js').then(({ renderProductCard, attachCardListeners }) => {
    container.innerHTML = `<div class="products-grid">${products.map(p => renderProductCard(p)).join('')}</div>`;
    attachCardListeners(container);
  });
}
