import { store } from '../state.js';
import { PRODUCTS } from '../data/products.js';

export function renderCartDrawer() {
  const totals = store.getCartTotals();
  const cartItems = store.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return { ...item, product };
  }).filter(item => item.product);

  return `
    <div class="cart-drawer-overlay" id="cart-drawer-overlay" aria-hidden="true">
      <div class="cart-drawer" id="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping Bag">
        <!-- Header -->
        <div class="cart-drawer__header">
          <div class="cart-drawer__title">
            <span>🛍️</span>
            <span>Your Glorious Bag</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--sg-gray-600); font-weight: 600;">
              (${totals.count} ${totals.count === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button class="cart-drawer__close" id="cart-drawer-close" aria-label="Close Shopping Bag">✕</button>
        </div>

        <!-- Free Gift / Delivery Meter -->
        <div class="cart-progress-box">
          <div class="cart-progress-text">
            <span>
              ${totals.qualifiesForFreeGift 
                ? '🎉 <strong>CONGRATS!</strong> You unlocked FREE UK Delivery & Free Mini!' 
                : `Add <strong>£${totals.diff.toFixed(2)}</strong> more for FREE UK Delivery!`
              }
            </span>
            <span style="font-family: var(--font-mono);">${totals.progress}%</span>
          </div>
          <div class="cart-progress-bar">
            <div class="cart-progress-fill" style="width: ${totals.progress}%;"></div>
          </div>
        </div>

        <!-- Items Container -->
        <div class="cart-drawer__items" id="cart-items-container">
          ${cartItems.length === 0 ? `
            <div class="cart-empty-state">
              <div class="cart-empty-icon">🧼</div>
              <h3 style="font-size: var(--text-md); font-weight: 800;">Your bag is squeaky clean!</h3>
              <p style="font-size: var(--text-xs); color: var(--sg-gray-600); max-width: 240px;">
                You haven't added any glorious suds yet. Explore our bestsellers to get started.
              </p>
              <a href="#catalog" class="btn btn--primary btn--sm" id="cart-continue-shopping" style="margin-top: 12px;">
                Shop Top Bestsellers
              </a>
            </div>
          ` : cartItems.map(item => `
            <div class="cart-item" data-cart-id="${item.id}" data-cart-size="${item.size}">
              <img src="${item.product.image}" alt="${item.product.name}" class="cart-item__image" width="76" height="76">
              
              <div class="cart-item__details">
                <div class="cart-item__title">${item.product.name}</div>
                <div class="cart-item__size">${item.size}</div>
                <div class="cart-item__price">£${(item.product.price * item.quantity).toFixed(2)} <span style="font-size: 0.82em; color: var(--sg-gray-600);">($${(item.product.price * item.quantity * 1.3).toFixed(2)})</span></div>
                
                <div class="cart-item__controls">
                  <button class="qty-btn cart-qty-minus" data-id="${item.id}" data-size="${item.size}" aria-label="Decrease quantity">−</button>
                  <span class="qty-display">${item.quantity}</span>
                  <button class="qty-btn cart-qty-plus" data-id="${item.id}" data-size="${item.size}" aria-label="Increase quantity">+</button>
                </div>

                <a href="${item.product.amazonUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 0.72rem; color: var(--sg-pink); font-weight: 800; text-decoration: underline; margin-top: 6px; display: inline-block;">
                  Buy on Amazon ↗
                </a>
              </div>

              <button class="cart-item__remove cart-item-delete" data-id="${item.id}" data-size="${item.size}" aria-label="Remove ${item.product.name} from bag">
                🗑️
              </button>
            </div>
          `).join('')}
        </div>

        <!-- Footer -->
        ${cartItems.length > 0 ? `
          <div class="cart-drawer__footer">
            <div class="cart-subtotal-row">
              <span>Estimated Subtotal:</span>
              <span class="cart-subtotal-amount">£${totals.subtotal.toFixed(2)} <span style="font-size: 0.82em; font-weight: 700; color: var(--sg-gray-600);">($${(totals.subtotal * 1.3).toFixed(2)})</span></span>
            </div>

            <p class="cart-note">
              UK Standard delivery calculated at checkout. Collect <strong>Boots Advantage Card points</strong> directly when purchasing via Boots.
            </p>

            <div class="retailer-checkout-group" style="display: flex; flex-direction: column; gap: 8px;">
              <a 
                href="${cartItems[0]?.product?.amazonUrl || 'https://www.amazon.com/dp/B01MSHIMSR?tag=soapnglory-20'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn--primary btn--md"
                style="text-decoration: none; text-align: center;"
              >
                Buy on Amazon ↗
              </a>

              <a 
                href="https://www.boots.com/soap-and-glory" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn checkout-btn-boots"
                style="text-decoration: none;"
              >
                <span>Checkout via Boots UK</span>
                <span style="font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 99px;">Points Eligible</span>
              </a>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}
