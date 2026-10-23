import { store } from '../state.js';

export function renderSkincareHeader() {
  const totals = store.getCartTotals();

  return `
    <!-- Top Announcement Bar -->
    <aside class="announcement-bar" role="region" aria-label="Special Offers">
      <div class="announcement-bar__track">
        <span class="announcement-item">🇬🇧 OFFICIAL BRITISH BEAUTY · FREE UK DELIVERY OVER £25 ($35)</span>
        <span class="announcement-divider">★</span>
        <span class="announcement-item">🫧 ALL 9 ICONIC FACIAL CLEANSERS IN STOCK</span>
        <span class="announcement-divider">★</span>
        <span class="announcement-item">🐰 100% LEAPING BUNNY CERTIFIED CRUELTY-FREE</span>
        <span class="announcement-divider">★</span>
        <span class="announcement-item">🇬🇧 EARN BOOTS ADVANTAGE CARD POINTS ON EVERY ORDER</span>
      </div>
      <button class="announcement-close" id="announcement-close" aria-label="Dismiss announcement">✕</button>
    </aside>

    <!-- Main Navigation Header -->
    <header class="site-header" id="site-header">
      <div class="container header-container">
        <!-- Brand Logo -->
        <a href="/" class="site-logo" aria-label="Soap & Glory Homepage">
          <img src="/images/brand/soap-and-glory-logo.png" alt="Soap & Glory" class="site-logo__img" width="180" height="42">
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="skincare-nav-desktop" aria-label="Skincare Navigation">
          <a href="/" class="skincare-nav-link">← All Categories</a>
          <a href="#cleansers-catalog" class="skincare-nav-link is-active">All 12 Products</a>
          <a href="#double-cleanse-ritual" class="skincare-nav-link">Double Cleanse</a>
          <a href="#ingredients-spotlight" class="skincare-nav-link">Active Ingredients</a>
          <a href="#skincare-faq" class="skincare-nav-link">Skincare FAQ</a>
        </nav>

        <!-- Right Action Controls -->
        <div class="header-actions">
          <a href="/" class="btn btn--outline btn--sm skincare-home-btn" style="text-decoration: none; height: 38px; display: inline-flex; align-items: center;">
            Main Store ↗
          </a>

          <!-- Cart Bag Trigger -->
          <button class="header-action-btn" id="cart-drawer-open" aria-label="Shopping Bag (${totals.count} items)" title="Shopping Bag">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span class="cart-counter ${totals.count > 0 ? 'has-items' : ''}" id="cart-counter-badge">${totals.count}</span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button class="header-action-btn menu-toggle-btn" id="mobile-menu-open" aria-label="Open Navigation Menu" title="Menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <span class="menu-btn-text">MENU</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="mobile-drawer__content">
        <div class="mobile-drawer__header">
          <img src="/images/brand/soap-and-glory-logo.png" alt="Soap & Glory" style="height: 38px;">
          <button class="cart-drawer__close" id="mobile-menu-close" aria-label="Close Mobile Menu">✕</button>
        </div>
        <ul class="mobile-nav-list">
          <li><a href="/" class="mobile-nav-link">← Back to Main Homepage</a></li>
          <li><a href="/bath-body" class="mobile-nav-link" style="color: var(--sg-pink); font-weight: 800;">Bath &amp; Body Collection ↗</a></li>
          <li><a href="#skincare-catalog" class="mobile-nav-link">All Skincare &amp; Cleansers →</a></li>
          <li><a href="#double-cleanse-ritual" class="mobile-nav-link">Double Cleanse Routine Guide →</a></li>
          <li><a href="#ingredients-spotlight" class="mobile-nav-link">Active Ingredients Breakdown →</a></li>
          <li><a href="#skincare-faq" class="mobile-nav-link">Skincare FAQ & Tips →</a></li>
          <li><a href="/#retailers" class="mobile-nav-link">Find at Boots & Stockists →</a></li>
        </ul>
        <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--sg-gray-200); font-size: 0.8rem; color: var(--sg-gray-600);">
          <p><strong>Official Retail Distribution:</strong> Boots UK, Amazon, Target, Walgreens, Walmart.</p>
        </div>
      </div>
    </div>
  `;
}
