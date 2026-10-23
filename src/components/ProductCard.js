import { store } from '../state.js';

export function renderProductCard(product) {
  const isWishlisted = store.wishlist.includes(product.id);

  return `
    <article class="product-card" data-product-id="${product.id}" id="product-${product.id}">
      <div class="product-card__media">
        ${product.badge ? `
          <span class="badge-stamp ${product.badge.includes('STAR') ? 'badge-stamp--gold' : 'badge-stamp--pink'} product-card__badge">
            ${product.badge}
          </span>
        ` : ''}

        <button 
          class="header-action-btn wishlist-btn" 
          data-wishlist-id="${product.id}" 
          style="position: absolute; top: 12px; right: 12px; z-index: 5; width: 34px; height: 34px;"
          aria-label="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? 'var(--sg-pink)' : 'none'}" stroke="${isWishlisted ? 'var(--sg-pink)' : 'currentColor'}" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>

        <img 
          src="${product.image}" 
          alt="${product.name} - ${product.subtitle}" 
          class="product-card__image" 
          loading="lazy"
          width="280"
          height="280"
        >

        <button class="btn btn--black btn--sm product-card__quick-btn quick-view-btn" data-product-id="${product.id}">
          Quick View
        </button>
      </div>

      <div class="product-card__body">
        <div class="product-card__collection" style="color: ${product.accentColor};">
          ${product.collection}
        </div>

        <h3 class="product-card__title">
          <a href="#product-${product.id}" class="quick-view-link" data-product-id="${product.id}">
            ${product.name}
          </a>
        </h3>

        <p class="product-card__tagline">
          ${product.subtitle}
        </p>

        <div class="product-card__rating">
          <span class="stars" aria-hidden="true">★★★★★</span>
          <span class="rating-val"><strong>${product.rating}</strong></span>
          <span class="rating-count">(${product.reviewCount.toLocaleString()})</span>
        </div>

        <div class="product-card__footer">
          <div class="product-card__price-row">
            <div class="product-card__price">
              £${product.price.toFixed(2)} <span class="product-card__price-usd">($${(product.price * 1.3).toFixed(2)})</span>
            </div>
            <span class="product-card__size">${product.size}</span>
          </div>

          <a 
            href="${product.amazonUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn--primary btn--md product-card__add-btn" 
            aria-label="Buy ${product.name} on Amazon"
          >
            Buy on Amazon ↗
          </a>
        </div>
      </div>
    </article>
  `;
}
