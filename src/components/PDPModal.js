import { PRODUCTS } from '../data/products.js';
import { store } from '../state.js';

export function renderPDPModal(productId = 'face-soap-and-clarity') {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const isWishlisted = store.wishlist ? store.wishlist.includes(product.id) : false;

  return `
    <div class="pdp-modal-overlay" id="pdp-modal-overlay" aria-hidden="true">
      <div class="pdp-modal" role="dialog" aria-modal="true" aria-labelledby="pdp-title">
        <button class="pdp-modal__close" id="pdp-modal-close" aria-label="Close Product Quick View" type="button">✕</button>

        <!-- Left Column: Gallery -->
        <div class="pdp-modal__gallery" style="position: relative;">
          <button 
            type="button"
            class="header-action-btn wishlist-btn" 
            data-wishlist-id="${product.id}" 
            style="position: absolute; top: 12px; left: 12px; z-index: 5; width: 36px; height: 36px; background: rgba(255,255,255,0.95); box-shadow: var(--shadow-sm);"
            aria-label="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}"
            title="${isWishlisted ? 'Remove from favorites' : 'Add to favorites'}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'var(--sg-pink)' : 'none'}" stroke="${isWishlisted ? 'var(--sg-pink)' : 'currentColor'}" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <img 
            src="${product.image}" 
            alt="${product.name} packaging" 
            id="pdp-modal-image"
            width="380"
            height="380"
          >
        </div>

        <!-- Right Column: Product Intelligence -->
        <div class="pdp-modal__info">
          <div style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: ${product.accentColor}; text-transform: uppercase; letter-spacing: 0.08em;">
            ${product.collection} · ${product.type}
          </div>

          <h2 id="pdp-title" class="pdp-modal__title" style="font-size: var(--text-xl); font-weight: 900; line-height: 1.15; text-transform: uppercase;">
            ${product.name}
          </h2>

          <p style="font-size: var(--text-sm); font-weight: 700; color: var(--sg-gray-600); line-height: 1.4;">
            ${product.subtitle}
          </p>

          <div style="display: flex; align-items: center; gap: 8px; font-size: var(--text-xs);">
            <span class="stars" style="color: #E5A03A; letter-spacing: 1px;">★★★★★</span>
            <span style="font-weight: 800;">${product.rating}</span>
            <span style="color: var(--sg-gray-500);">(${product.reviewCount.toLocaleString()} verified customer reviews)</span>
          </div>

          <div class="pdp-modal__price-row">
            <span class="pdp-modal__price">£${product.price.toFixed(2)} <span style="font-size: 0.82em; font-weight: 700; color: var(--sg-gray-600);">($${(product.price * 1.3).toFixed(2)})</span></span>
            <span class="badge-stamp pdp-prime-badge" style="font-size: 0.75rem; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; font-weight: 700; padding: 3px 8px; border-radius: 4px;">
              ✓ Prime Eligible · Official Amazon Listing
            </span>
          </div>

          <!-- Size Variant Options -->
          <div>
            <label style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--sg-gray-700); display: block; margin-bottom: 8px;">
              Select Size:
            </label>
            <div class="pdp-size-pills">
              ${product.sizesAvailable.map((s, idx) => `
                <button class="pdp-size-btn ${idx === 0 ? 'is-selected' : ''}" data-size="${s}" type="button">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Purchase on Amazon / Add to Bag -->
          <div class="pdp-modal__actions" style="margin-top: 14px; display: flex; flex-direction: column; gap: 8px;">
            <a 
              href="${product.amazonUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn--primary btn--md" 
              id="pdp-buy-amazon-btn"
              style="width: 100%; text-align: center; text-decoration: none; font-size: var(--text-sm); display: flex; align-items: center; justify-content: center; gap: 6px;"
            >
              Buy on Amazon · £${product.price.toFixed(2)} ($${(product.price * 1.3).toFixed(2)}) ↗
            </a>
            <div style="display: grid; grid-template-columns: 1fr auto; gap: 8px;">
              <button 
                type="button"
                class="btn btn--outline btn--md" 
                id="pdp-add-bag-btn"
                data-product-id="${product.id}"
                style="width: 100%; text-align: center; font-size: var(--text-sm);"
              >
                Add to Glorious Bag
              </button>
              <button 
                type="button"
                class="header-action-btn wishlist-btn pdp-wishlist-btn"
                data-wishlist-id="${product.id}"
                style="width: 44px; height: 44px; border: 1.5px solid var(--sg-gray-300); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
                aria-label="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}"
                title="${isWishlisted ? 'Remove from favorites' : 'Add to favorites'}"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? 'var(--sg-pink)' : 'none'}" stroke="${isWishlisted ? 'var(--sg-pink)' : 'currentColor'}" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Description -->
          <p style="font-size: var(--text-xs); color: var(--sg-gray-800); line-height: 1.6; margin-top: 14px;">
            ${product.description}
          </p>

          <!-- Accordion Sections (Native HTML5 <details>/<summary> for 100% reliable opening) -->
          <div class="pdp-accordion-group">
            <!-- Fragrance Notes -->
            ${product.fragranceNotes ? `
            <details class="pdp-accordion-item" open>
              <summary class="pdp-accordion-header">
                <span>Fragrance Notes</span>
                <span class="acc-icon" aria-hidden="true"></span>
              </summary>
              <div class="pdp-accordion-content">
                <div style="font-weight: 700; margin-bottom: 4px; color: var(--sg-pink-dark);">Family: ${product.fragranceNotes.family}</div>
                <div><strong>Top:</strong> ${product.fragranceNotes.top}</div>
                <div><strong>Heart:</strong> ${product.fragranceNotes.heart}</div>
                <div><strong>Base:</strong> ${product.fragranceNotes.base}</div>
              </div>
            </details>` : ''}

            <!-- How To Use -->
            <details class="pdp-accordion-item" ${!product.fragranceNotes ? 'open' : ''}>
              <summary class="pdp-accordion-header">
                <span>How To Use</span>
                <span class="acc-icon" aria-hidden="true"></span>
              </summary>
              <div class="pdp-accordion-content pdp-how-to-use-content">
                ${product.howToUse || 'Apply as directed.'}
              </div>
            </details>

            <!-- Ingredients -->
            <details class="pdp-accordion-item">
              <summary class="pdp-accordion-header">
                <span>Full Ingredients (INCI)</span>
                <span class="acc-icon" aria-hidden="true"></span>
              </summary>
              <div class="pdp-accordion-content pdp-ingredients-box">
                ${product.ingredients || 'Ingredients list coming soon.'}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  `;
}
