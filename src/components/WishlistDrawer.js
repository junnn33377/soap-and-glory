import { store } from '../state.js';
import { PRODUCTS } from '../data/products.js';

export function renderWishlistDrawer() {
  const wishlistItems = store.wishlist
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  return `
    <div class="cart-drawer-overlay wishlist-drawer-overlay" id="wishlist-drawer-overlay" aria-hidden="true">
      <div class="cart-drawer wishlist-drawer" id="wishlist-drawer" role="dialog" aria-modal="true" aria-label="Saved Favorites">
        <!-- Header -->
        <div class="cart-drawer__header">
          <div class="cart-drawer__title" style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.2rem;">❤️</span>
            <span style="font-family: var(--font-display); font-weight: 900; text-transform: uppercase;">Saved Favorites</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--sg-gray-600); font-weight: 700;">
              (<span id="wishlist-drawer-title-count">${wishlistItems.length}</span>)
            </span>
          </div>
          <button class="cart-drawer__close" id="wishlist-drawer-close" aria-label="Close Saved Favorites">✕</button>
        </div>

        <!-- Wishlist Items -->
        <div class="cart-drawer__items" id="wishlist-items-container" style="flex: 1; overflow-y: auto; padding: 18px 20px;">
          ${wishlistItems.length === 0 ? `
            <div class="cart-empty-state" style="padding: 48px 16px; text-align: center;">
              <div style="font-size: 3rem; margin-bottom: 12px;">❤️</div>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; margin-bottom: 8px;">Your Wishlist is Empty</h3>
              <p style="font-size: 0.88rem; color: var(--sg-gray-600); max-width: 260px; margin: 0 auto 20px; line-height: 1.5;">
                Click the heart on any Soap &amp; Glory product to save your favorites here.
              </p>
              <button class="btn btn--primary btn--sm" id="wishlist-close-btn" type="button">
                Explore Bestsellers
              </button>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${wishlistItems.map(p => `
                <div class="cart-item" id="wishlist-item-${p.id}" style="display: grid; grid-template-columns: 74px 1fr auto; gap: 14px; align-items: center; background: var(--sg-ivory); border: 1.5px solid var(--sg-gray-200); border-radius: var(--radius-md); padding: 12px; position: relative;">
                  <img src="${p.image}" alt="${p.name}" width="74" height="74" style="object-fit: contain; border-radius: var(--radius-sm); background: #fff; width: 74px; height: 74px;">
                  
                  <div style="min-width: 0;">
                    <div style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 700; color: ${p.accentColor || 'var(--sg-pink)'}; text-transform: uppercase; margin-bottom: 2px;">
                      ${p.collection} · ${p.type}
                    </div>
                    <div style="font-family: var(--font-display); font-size: 0.92rem; font-weight: 900; line-height: 1.25; margin-bottom: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                      ${p.name}
                    </div>
                    <div style="font-size: 0.82rem; font-weight: 800; color: var(--sg-pink-dark); margin-bottom: 8px;">
                      £${p.price.toFixed(2)} <span style="font-size: 0.82em; color: var(--sg-gray-600);">($${(p.price * 1.3).toFixed(2)})</span>
                    </div>
                    <a 
                      href="${p.amazonUrl}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="btn btn--primary btn--sm" 
                      style="font-size: 0.74rem; padding: 6px 12px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;"
                    >
                      Buy on Amazon ↗
                    </a>
                  </div>

                  <button 
                    class="wishlist-remove-btn" 
                    data-wishlist-id="${p.id}" 
                    aria-label="Remove ${p.name} from favorites" 
                    title="Remove"
                    type="button"
                    style="background: transparent; border: 1px solid var(--sg-gray-300); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--sg-gray-600); font-size: 0.85rem;"
                  >
                    ✕
                  </button>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Footer -->
        ${wishlistItems.length > 0 ? `
          <div class="cart-drawer__footer" style="padding: 16px 20px; border-top: 1.5px solid var(--sg-gray-200); background: #fff;">
            <button class="btn btn--outline btn--sm" id="wishlist-close-btn" type="button" style="width: 100%;">
              Continue Browsing
            </button>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}
