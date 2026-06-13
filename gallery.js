// ── gallery.js ───────────────────────────────────────────────
import { galleryImages, trendingItems, catalogs, outfits, footwear, jewellery } from './data.js';
import { renderProductCard, attachCardListeners } from './products.js';

export function initGallery() {
  renderTrending();
  renderCatalogs();
  renderGallery('all');

  const filters = document.querySelectorAll('.gallery-filter-btn');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.category || 'all');
    });
  });
}

function renderCatalogs() {
  const container = document.getElementById('catalogs-grid');
  if (!container) return;
  container.innerHTML = catalogs.map(c => `
    <div class="catalog-card anim-scale-in" data-gender="${c.gender}">
      <img src="${c.image}" alt="${c.name}" loading="lazy">
      <div class="catalog-overlay">
        <h3 class="catalog-title">${c.name}</h3>
        <p class="catalog-desc">${c.description}</p>
        <button class="btn btn-gold btn-sm" style="width: fit-content;">View Catalog</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.catalog-card').forEach(card => {
    card.addEventListener('click', () => {
      const gender = card.dataset.gender;
      window.dispatchEvent(new CustomEvent('sz:toast', { detail: { msg: `📖 Opening ${gender}'s catalog...` } }));
    });
  });
}

function renderTrending() {
  const container = document.getElementById('trending-grid');
  if (!container) return;
  container.innerHTML = trendingItems.map(p => `
    <div class="trending-card anim-scale-in">
      <div class="product-card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="trending-badge-pill">${p.badge}</span>
      </div>
      <div class="product-card-body">
        <div class="product-card-brand">${p.brand}</div>
        <div class="product-card-name">${p.name}</div>
        <div class="product-card-meta">
          <div class="product-card-price">${p.price}</div>
        </div>
        <div class="product-card-actions">
           <a href="${p.amazon}" target="_blank" class="buy-now-btn">🛍️ Shop Now</a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderGallery(filter = 'all') {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);

  container.innerHTML = filtered.map(img => `
    <div class="gallery-item anim-fade-in" data-id="${img.id}">
      <img src="${img.src}" alt="${img.label}" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-info">
          <span class="gallery-category">${img.category}</span>
          <h4 class="gallery-label">${img.label}</h4>
          <p class="gallery-desc-small">${img.desc || ''}</p>
          <button class="btn btn-primary btn-sm mt-1 inspo-shop-btn">Shop This Look</button>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const imgData = galleryImages.find(i => i.id === item.dataset.id);
      if (e.target.classList.contains('inspo-shop-btn')) {
        showInspirationProducts(imgData);
      } else {
        openLightbox(imgData.src);
      }
    });
  });
}

function showInspirationProducts(inspo) {
  const resultsSection = document.getElementById('inspiration-results');
  const productsGrid = document.getElementById('inspo-products');
  const titleElem = document.getElementById('inspo-title');
  const descElem = document.getElementById('inspo-desc');

  if (!resultsSection || !productsGrid) return;

  const allProducts = [...outfits, ...footwear, ...jewellery];
  const filtered = allProducts.filter(p => 
    p.occasion === inspo.category || 
    (p.tags && p.tags.includes(inspo.tag)) ||
    (inspo.tag && p.name.toLowerCase().includes(inspo.tag.toLowerCase()))
  ).slice(0, 8);

  titleElem.innerHTML = `Shop the <span class="gradient-text">${inspo.label}</span> Look`;
  descElem.textContent = inspo.desc;
  
  productsGrid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
  attachCardListeners(productsGrid);

  resultsSection.style.display = 'block';
  setTimeout(() => {
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
  
  window.dispatchEvent(new CustomEvent('sz:toast', { detail: { msg: `✨ Curating ${inspo.label} essentials...` } }));
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('.lightbox-img');
  lbImg.src = src;
  lb.classList.add('open');

  lb.onclick = (e) => {
    if (e.target === lb || e.target.classList.contains('lightbox-close')) {
      lb.classList.remove('open');
    }
  };
}
