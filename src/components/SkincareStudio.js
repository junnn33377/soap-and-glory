import { PRODUCTS } from '../data/products.js';
import { store } from '../state.js';

export function renderSkincareStudio() {
  const cleansers = PRODUCTS.filter(p => p.category === 'skincare' && p.cleanserType);
  
  const subCategories = [
    { id: 'all', title: 'All Cleansers', filterFn: () => true },
    { id: 'foam', title: 'Foams & Gel Washes', filterFn: (p) => p.cleanserType === 'foam' },
    { id: 'melt', title: 'Melt Balms & Milks', filterFn: (p) => p.cleanserType === 'melt' },
    { id: 'exfoliate', title: 'Scrubs & Polishes', filterFn: (p) => p.cleanserType === 'exfoliate' },
  ];

  const categories = subCategories
    .map(cat => {
      const count = cleansers.filter(cat.filterFn).length;
      return {
        id: cat.id,
        label: `${cat.title} (${count})`,
        count
      };
    })
    .filter(cat => cat.count > 0);

  return `
    <section class="section section--blush" id="cleansing-bar" aria-label="Soap and Glory Cleansing Bar">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>🫧</span>
            <span>THE GLORY CLEANSING BAR</span>
          </div>
          <h2 class="section-title">Every Facial Cleanser, Every Skin Need</h2>
          <p class="section-subtitle">
            From our bestselling Vitamin C wash to gentle cleansing milks and purifying scrubs, explore our complete facial cleanser collection.
          </p>
        </div>

        <!-- Double Cleanse Educational Routine Bar -->
        <div class="double-cleanse-stepper" aria-label="Double Cleansing Guide">
          <div class="stepper-card">
            <div class="stepper-badge">STEP 1 · MELT</div>
            <div class="stepper-icon">🧈</div>
            <h3 class="stepper-title">Break Down Makeup & SPF</h3>
            <p class="stepper-desc">Use a rich balm or cleansing milk on dry skin to dissolve long-wear foundation, mascara, and daily grime.</p>
            <div class="stepper-product">Hero: <strong>Peaches and Clean™ Milk</strong></div>
          </div>

          <div class="stepper-arrow">→</div>

          <div class="stepper-card">
            <div class="stepper-badge">STEP 2 · WASH</div>
            <div class="stepper-icon">🫧</div>
            <h3 class="stepper-title">Cleanse & Clarify Pores</h3>
            <p class="stepper-desc">Lather a gentle gel or airy foam with water to sweep away surface sweat, impurities, and excess oil.</p>
            <div class="stepper-product">Hero: <strong>Face Soap & Clarity™</strong></div>
          </div>

          <div class="stepper-arrow">→</div>

          <div class="stepper-card">
            <div class="stepper-badge">STEP 3 · BUFF</div>
            <div class="stepper-icon">✨</div>
            <h3 class="stepper-title">Polish & Reset Texture</h3>
            <p class="stepper-desc">Use an ultra-fine microdermabrasion polish or Kaolin mud 1-2 times weekly for baby-smooth skin.</p>
            <div class="stepper-product">Hero: <strong>Scrub In The Fast Lane™</strong></div>
          </div>

          <div class="stepper-arrow">→</div>

          <div class="stepper-card">
            <div class="stepper-badge">STEP 4 · PLUMP</div>
            <div class="stepper-icon">💧</div>
            <h3 class="stepper-title">Lock 24-Hour Hydration</h3>
            <p class="stepper-desc">Finish with an ultra-lightweight hyaluronic acid moisturizer to give skin bouncy, non-greasy radiance.</p>
            <div class="stepper-product">Hero: <strong>Speed Plump™ Lotion</strong></div>
          </div>
        </div>

        <!-- Cleanser Sub-Filter Navigation -->
        <div class="cleanser-filter-bar">
          <div class="cleanser-filter-pills" role="tablist" aria-label="Filter facial cleansers by type">
            ${categories.map((cat, idx) => `
              <button 
                class="cleanser-filter-pill ${idx === 0 ? 'is-active' : ''}" 
                data-cleanser-type="${cat.id}"
                role="tab"
                aria-selected="${idx === 0}"
              >
                ${cat.label}
              </button>
            `).join('')}
          </div>
          <div class="cleanser-count-indicator">
            <span id="cleanser-active-count">${cleansers.length}</span> <span id="cleanser-count-label">${cleansers.length === 1 ? 'Cleanser Available' : 'Cleansers Available'}</span>
          </div>
        </div>

        <!-- Cleansers Grid -->
        <div class="cleansers-grid" id="cleansers-grid-mount">
          ${cleansers.map(p => {
            const isWishlisted = store.wishlist ? store.wishlist.includes(p.id) : false;
            return `
            <article class="cleanser-card" data-cleanser-type="${p.cleanserType}" id="cleanser-${p.id}">
              <div class="cleanser-card__media">
                <span class="badge-stamp badge-stamp--pink cleanser-card__badge">${p.badge}</span>
                <button 
                  class="header-action-btn wishlist-btn" 
                  data-wishlist-id="${p.id}" 
                  style="position: absolute; top: 12px; right: 12px; z-index: 5; width: 34px; height: 34px;"
                  aria-label="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? 'var(--sg-pink)' : 'none'}" stroke="${isWishlisted ? 'var(--sg-pink)' : 'currentColor'}" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <img 
                  src="${p.image}" 
                  alt="${p.name} - ${p.subtitle}" 
                  class="cleanser-card__img" 
                  loading="lazy" 
                  width="260" 
                  height="260"
                >
                <button class="btn btn--black btn--sm cleanser-card__quick-btn quick-view-btn" data-product-id="${p.id}">
                  Quick View
                </button>
              </div>

              <div class="cleanser-card__body">
                <div class="cleanser-card__type-tag" style="color: ${p.accentColor};">
                  ${p.type}
                </div>
                <h3 class="cleanser-card__title">
                  <a href="#product-${p.id}" class="quick-view-link" data-product-id="${p.id}">
                    ${p.name}
                  </a>
                </h3>
                <p class="cleanser-card__subtitle">${p.subtitle}</p>

                <div class="cleanser-card__rating">
                  <span class="stars" aria-hidden="true">★★★★★</span>
                  <span class="rating-val"><strong>${p.rating}</strong></span>
                  <span class="rating-count">(${p.reviewCount.toLocaleString()})</span>
                </div>

                <div class="cleanser-card__footer">
                  <div class="product-card__price-row">
                    <span class="product-card__price">£${p.price.toFixed(2)} <span style="font-size: 0.82em; font-weight: 700; color: var(--sg-gray-600);">($${(p.price * 1.3).toFixed(2)})</span></span>
                    <span class="product-card__size">${p.size}</span>
                  </div>
                  <a 
                    href="${p.amazonUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn--primary btn--md cleanser-card__cta"
                    aria-label="Buy ${p.name} on Amazon"
                  >
                    Buy on Amazon ↗
                  </a>
                </div>
              </div>
            </article>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}
