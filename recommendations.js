// ── recommendations.js ───────────────────────────────────────
import { outfits, footwear, jewellery, skinTonePalettes, bodyTypeAdvice } from './data.js';
import { renderProductsInto } from './products.js';

export function initRecommendations(state) {
  const form = document.getElementById('style-profile-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      generateRecommendations(state);
    });
  }

  // Chip selection
  document.querySelectorAll('.chip[data-group]').forEach(chip => {
    chip.addEventListener('click', () => {
      const group = chip.dataset.group;
      document.querySelectorAll(`.chip[data-group="${group}"]`).forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state[group] = chip.dataset.value;
      if (group === 'skinTone') renderColorPalette(chip.dataset.value);
    });
  });

  // Skin swatches
  document.querySelectorAll('.skin-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      document.querySelectorAll('.skin-swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
      state.skinTone = sw.dataset.value;
      // Also sync chip
      document.querySelectorAll('.chip[data-group="skinTone"]').forEach(c => {
        c.classList.toggle('active', c.dataset.value === sw.dataset.value);
      });
      renderColorPalette(sw.dataset.value);
    });
  });

  // Occasion tabs
  document.querySelectorAll('.tab-btn[data-occasion]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn[data-occasion]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.occasion = tab.dataset.occasion;
      if (state.recommended) generateRecommendations(state);
    });
  });

  // Render default
  renderColorPalette(state.skinTone || 'medium');
}

export function generateRecommendations(state) {
  const section = document.getElementById('recommendations');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const gender    = state.gender    || 'women';
  const occasion  = state.occasion  || 'casual';
  const bodyType  = state.bodyType  || 'hourglass';

  // Filter products
  const filteredOutfits = filterProducts(outfits,   gender, occasion, bodyType, 4);
  const filteredFootwear = filterProducts(footwear,  gender, occasion, null,   3);
  const filteredJewellery= filterProducts(jewellery, gender, occasion, null,   3);

  renderProductsInto(document.getElementById('rec-outfits'),   filteredOutfits);
  renderProductsInto(document.getElementById('rec-footwear'),  filteredFootwear);
  renderProductsInto(document.getElementById('rec-jewellery'), filteredJewellery);

  // Show body type advice
  renderBodyTypeAdvice(bodyType);

  // Colour palette
  renderColorPalette(state.skinTone || 'medium');

  state.recommended = true;

  // Scroll reveal
  section.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.06}s`;
  });

  window.dispatchEvent(new CustomEvent('sz:toast', { detail: { msg: '✨ Your personalized looks are ready!' } }));
}

function filterProducts(products, gender, occasion, bodyType, limit) {
  let filtered = products.filter(p => (!p.gender || p.gender === gender) && p.occasion === occasion);
  if (bodyType && filtered.length > 0) {
    const bodyFiltered = filtered.filter(p => !p.bodyType || p.bodyType.includes(bodyType));
    if (bodyFiltered.length > 0) filtered = bodyFiltered;
  }
  // Shuffle for variety
  filtered = shuffleArray(filtered);
  return filtered.slice(0, limit);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderBodyTypeAdvice(bodyType) {
  const el = document.getElementById('body-type-advice');
  if (!el) return;
  const advice = bodyTypeAdvice[bodyType] || '';
  const label  = bodyType.charAt(0).toUpperCase() + bodyType.slice(1);
  el.innerHTML = `
    <div class="advice-card">
      <div class="advice-icon">💡</div>
      <div class="advice-text">
        <strong>${label} body type:</strong> ${advice}
      </div>
    </div>`;
}

export function renderColorPalette(skinToneKey) {
  const data = skinTonePalettes[skinToneKey];
  if (!data) return;
  const container = document.getElementById('palette-content');
  if (!container) return;

  const swatchHtml = data.recommended.map(hex => `
    <div class="swatch" style="background:${hex}" data-hex="${hex}" title="${hex}"></div>
  `).join('');

  const avoidHtml = data.avoid.map(hex => `
    <div class="avoid-swatch" style="background:${hex}" title="${hex}"></div>
  `).join('');

  container.innerHTML = `
    <div class="palette-description">${data.description}</div>
    <div class="swatches-row">${swatchHtml}</div>
    <p class="avoid-label">🚫 Colours to avoid</p>
    <div class="avoid-swatches">${avoidHtml}</div>
  `;
}
