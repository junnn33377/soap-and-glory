import { store } from '../state.js';
import { renderWishlistDrawer } from './WishlistDrawer.js';

export function renderHeader(activePage = '') {
  const isLegalActive = ['about', 'contact', 'privacy', 'terms', 'disclaimer'].includes(activePage);
  const wishlistCount = store.wishlist ? store.wishlist.length : 0;

  return `
    <!-- Main Navigation Header -->
    <header class="site-header" id="site-header">
      <div class="container header-container">
        <!-- Official Brand Logo -->
        <a href="/" class="site-logo" aria-label="Soap & Glory Homepage">
          <img src="/images/brand/soap-and-glory-logo.png" alt="Soap & Glory" class="site-logo__img" width="180" height="42">
        </a>

        <!-- Desktop Navigation: 5 Dedicated Categories + About & Legal Dropdown -->
        <nav class="main-nav" aria-label="Main Navigation">
          <a href="/bath-body" class="nav-link ${activePage === 'bath-body' ? 'active' : ''}">
            Bath &amp; Body
          </a>
          <a href="/skincare" class="nav-link ${activePage === 'skincare' ? 'active' : ''}">
            Skincare
          </a>
          <a href="/fragrance" class="nav-link ${activePage === 'fragrance' ? 'active' : ''}">
            Fragrance
          </a>
          <a href="/makeup" class="nav-link ${activePage === 'makeup' ? 'active' : ''}">
            Cosmetics
          </a>
          <a href="/gifting" class="nav-link ${activePage === 'gifting' ? 'active' : ''}">
            Gifts
          </a>

          <!-- Desktop Dropdown for Legal & About Pages -->
          <div class="nav-item-dropdown">
            <button class="nav-link nav-dropdown-btn ${isLegalActive ? 'active' : ''}" type="button" aria-haspopup="true" aria-expanded="false">
              <span>About &amp; Legal</span>
              <span class="nav-arrow" style="font-size: 0.65em; margin-left: 2px;">▼</span>
            </button>
            <div class="nav-dropdown-menu" role="menu">
              <a href="/about" class="nav-dropdown-item ${activePage === 'about' ? 'active' : ''}" role="menuitem">About Us</a>
              <a href="/contact" class="nav-dropdown-item ${activePage === 'contact' ? 'active' : ''}" role="menuitem">Contact Us</a>
              <a href="/privacy" class="nav-dropdown-item ${activePage === 'privacy' ? 'active' : ''}" role="menuitem">Privacy Policy</a>
              <a href="/terms" class="nav-dropdown-item ${activePage === 'terms' ? 'active' : ''}" role="menuitem">Terms &amp; Conditions</a>
              <a href="/disclaimer" class="nav-dropdown-item ${activePage === 'disclaimer' ? 'active' : ''}" role="menuitem">Official Disclaimer</a>
            </div>
          </div>
        </nav>

        <!-- Right Action Controls -->
        <div class="header-actions">
          <!-- Search Trigger (Clean & Responsive) -->
          <button class="header-action-btn" id="search-open-btn" aria-label="Search Products" title="Search">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <!-- Saved Favorites / Wishlist Trigger -->
          <button class="header-action-btn wishlist-trigger-btn" id="wishlist-open-btn" aria-label="View Saved Favorites" title="Saved Favorites" type="button" style="position: relative;">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="${wishlistCount > 0 ? 'var(--sg-pink)' : 'none'}" stroke="${wishlistCount > 0 ? 'var(--sg-pink)' : 'currentColor'}" stroke-width="2.2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span class="cart-counter ${wishlistCount > 0 ? 'has-items' : ''}" id="header-wishlist-count" style="display: ${wishlistCount > 0 ? 'flex' : 'none'};">
              ${wishlistCount}
            </span>
          </button>

          <!-- Mobile Menu Toggle (Hidden on Desktop, Displayed on Mobile/Tablet) -->
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
          <li><a href="/#catalog" class="mobile-nav-link" data-category="all">Shop All Products →</a></li>
          <li>
            <a href="#saved-favorites" class="mobile-nav-link" id="mobile-wishlist-open" style="display: flex; align-items: center; justify-content: space-between; font-weight: 800;">
              <span>❤️ Saved Favorites</span>
              <span class="badge-stamp badge-stamp--pink" id="mobile-wishlist-count">${wishlistCount}</span>
            </a>
          </li>
          <li><a href="/bath-body" class="mobile-nav-link" style="color: var(--sg-pink); font-weight: 800;">Bath &amp; Body Collection ↗</a></li>
          <li><a href="/skincare" class="mobile-nav-link" style="color: var(--sg-pink); font-weight: 800;">Skincare &amp; Cleansers Collection ↗</a></li>
          <li><a href="/fragrance" class="mobile-nav-link" style="color: var(--sg-pink); font-weight: 800;">Fragrance Lines &amp; Body Mists ↗</a></li>
          <li><a href="/makeup" class="mobile-nav-link" style="color: var(--sg-pink); font-weight: 800;">Cosmetics &amp; Lips Makeup Collection ↗</a></li>
          <li><a href="/gifting" class="mobile-nav-link" style="color: var(--sg-pink); font-weight: 800;">Star Gifts &amp; Holiday Tins Collection ↗</a></li>
          
          <!-- Consolidated Collapsible About & Legal Pages -->
          <li class="mobile-nav-accordion">
            <button class="mobile-nav-accordion-trigger" id="mobile-legal-toggle" type="button" aria-expanded="false">
              <span>About &amp; Legal Pages</span>
              <span class="accordion-icon" style="transition: transform 0.2s ease;">▾</span>
            </button>
            <ul class="mobile-nav-sublist" id="mobile-legal-sublist" style="display: none;">
              <li><a href="/about" class="mobile-nav-sublink">About Us →</a></li>
              <li><a href="/contact" class="mobile-nav-sublink">Contact Customer Care →</a></li>
              <li><a href="/privacy" class="mobile-nav-sublink">Privacy &amp; Cookie Policy →</a></li>
              <li><a href="/terms" class="mobile-nav-sublink">Terms &amp; Conditions →</a></li>
              <li><a href="/disclaimer" class="mobile-nav-sublink">Affiliate &amp; Health Disclaimer →</a></li>
            </ul>
          </li>

          <li><a href="/#retailers" class="mobile-nav-link">Where To Buy &amp; Stockists →</a></li>
        </ul>
        <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--sg-gray-200); font-size: 0.8rem; color: var(--sg-gray-600);">
          <p><strong>Official Retail Distribution:</strong> Boots UK, Amazon, Target, Ulta Beauty.</p>
        </div>
      </div>
    </div>

    <!-- Saved Favorites Wishlist Drawer Mount Point -->
    <div id="wishlist-drawer-mount-point">
      ${renderWishlistDrawer()}
    </div>
  `;
}

// Reactive Wishlist State Synchronization
function updateWishlistUI() {
  const mount = document.getElementById('wishlist-drawer-mount-point');
  if (mount) {
    const wasOpen = document.getElementById('wishlist-drawer-overlay')?.classList.contains('is-open');
    mount.innerHTML = renderWishlistDrawer();
    if (wasOpen) {
      document.getElementById('wishlist-drawer-overlay')?.classList.add('is-open');
    }
  }

  const count = store.wishlist ? store.wishlist.length : 0;
  const headerCount = document.getElementById('header-wishlist-count');
  if (headerCount) {
    headerCount.textContent = count;
    headerCount.style.display = count > 0 ? 'flex' : 'none';
    headerCount.classList.toggle('has-items', count > 0);
  }

  const mobileCount = document.getElementById('mobile-wishlist-count');
  if (mobileCount) {
    mobileCount.textContent = count;
  }

  const headerHeart = document.querySelector('#wishlist-open-btn svg');
  if (headerHeart) {
    headerHeart.setAttribute('fill', count > 0 ? 'var(--sg-pink)' : 'none');
    headerHeart.setAttribute('stroke', count > 0 ? 'var(--sg-pink)' : 'currentColor');
  }
}

// Subscribe to store notifications
store.subscribe((event) => {
  if (event.type === 'wishlist_updated') {
    updateWishlistUI();
    if (event.productId) {
      const isSaved = store.wishlist.includes(event.productId);
      document.querySelectorAll(`.wishlist-btn[data-wishlist-id="${event.productId}"] svg`).forEach(svg => {
        svg.setAttribute('fill', isSaved ? 'var(--sg-pink)' : 'none');
        svg.setAttribute('stroke', isSaved ? 'var(--sg-pink)' : 'currentColor');
      });
      document.querySelectorAll(`.wishlist-btn[data-wishlist-id="${event.productId}"]`).forEach(btn => {
        btn.setAttribute('aria-label', isSaved ? 'Remove from wishlist' : 'Save to wishlist');
      });
    }
  }
});

// Global click delegation for mobile legal accordion, wishlist drawer, and product favorites toggle
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    // Mobile Accordion Toggle
    const toggle = e.target.closest('#mobile-legal-toggle');
    if (toggle) {
      const sublist = document.getElementById('mobile-legal-sublist');
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      toggle.classList.toggle('is-open', !isExpanded);
      if (sublist) {
        sublist.style.display = !isExpanded ? 'flex' : 'none';
      }
    }

    // Wishlist Drawer Open
    if (e.target.closest('#wishlist-open-btn') || e.target.closest('#mobile-wishlist-open')) {
      e.preventDefault();
      document.getElementById('mobile-drawer')?.classList.remove('is-open');
      document.getElementById('wishlist-drawer-overlay')?.classList.add('is-open');
      return;
    }

    // Wishlist Drawer Close
    if (e.target.closest('#wishlist-drawer-close') || e.target.closest('#wishlist-close-btn') || e.target.id === 'wishlist-drawer-overlay') {
      document.getElementById('wishlist-drawer-overlay')?.classList.remove('is-open');
      return;
    }

    // Wishlist Item Removal
    const removeBtn = e.target.closest('.wishlist-remove-btn');
    if (removeBtn) {
      e.preventDefault();
      const pId = removeBtn.getAttribute('data-wishlist-id');
      if (pId) {
        store.toggleWishlist(pId);
        const toast = document.getElementById('toast-notice');
        if (toast) {
          toast.textContent = 'Removed from Favourites';
          toast.classList.add('is-active');
          setTimeout(() => toast.classList.remove('is-active'), 3000);
        }
      }
      return;
    }

    // Universal Product Wishlist Toggle Fallback (for PDP Quick View, Skincare Studio, and pages without local listener)
    const wishBtn = e.target.closest('.wishlist-btn');
    if (wishBtn && !e.defaultPrevented) {
      e.preventDefault();
      const pId = wishBtn.getAttribute('data-wishlist-id');
      if (pId) {
        store.toggleWishlist(pId);
        const isSaved = store.wishlist.includes(pId);
        const toast = document.getElementById('toast-notice');
        if (toast) {
          toast.textContent = isSaved ? '❤️ Added to your Favourites!' : 'Removed from Favourites';
          toast.classList.add('is-active');
          setTimeout(() => toast.classList.remove('is-active'), 3500);
        }
      }
      return;
    }
  });
}

