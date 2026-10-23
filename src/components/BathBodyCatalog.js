import { PRODUCTS } from '../data/products.js';
import { renderProductCard } from './ProductCard.js';

export const BATH_BODY_FILTER_TABS = [
  { id: 'all', title: 'All Bath & Body', filterFn: (p) => p.category === 'bath-body' },
  { id: 'moisturizers', title: 'Body Butters & Lotions', filterFn: (p) => p.category === 'bath-body' && (p.type.includes('Butter') || p.type.includes('Lotion')) },
  { id: 'washes', title: 'Body Washes & Shower Gels', filterFn: (p) => p.category === 'bath-body' && p.type.includes('Wash') },
  { id: 'scrubs', title: 'Body Scrubs & Exfoliators', filterFn: (p) => p.category === 'bath-body' && p.type.includes('Scrub') },
  { id: 'hand-foot', title: 'Hands & Feet', filterFn: (p) => p.category === 'bath-body' && (p.type.includes('Hand') || p.type.includes('Foot')) }
];

export function renderBathBodyCatalog(activeTab = 'all', sortOrder = 'featured', activeFragrance = 'all') {
  const currentTab = BATH_BODY_FILTER_TABS.find(t => t.id === activeTab) || BATH_BODY_FILTER_TABS[0];
  let items = PRODUCTS.filter(currentTab.filterFn);

  if (activeFragrance !== 'all') {
    items = items.filter(p => p.collection.toLowerCase().replace(/[^a-z0-9]/g, '-').includes(activeFragrance));
  }

  if (sortOrder === 'price-low') {
    items.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-high') {
    items.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  }

  return `
    <section class="section section--white" id="bath-body-catalog" aria-label="Soap and Glory Bath and Body Catalog">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>🧼</span>
            <span>COMPLETE BATH &amp; BODY COLLECTION</span>
          </div>
          <h2 class="section-title">Soap &amp; Glory Body Wash, Butters &amp; Exfoliators</h2>
          <p class="section-subtitle">
            Step into velvety-smooth luxury. Whether you crave our signature rose-and-bergamot Original Pink™ or warm almond bakery notes, discover head-to-toe body butters, creamy shower gels, and smoothing polishes.
          </p>
        </div>

        <!-- Filter and Sort Toolbar -->
        <div class="catalog-toolbar">
          <div class="catalog-filters" role="tablist" aria-label="Filter bath and body by product type">
            ${BATH_BODY_FILTER_TABS.map(tab => {
              const count = PRODUCTS.filter(tab.filterFn).length;
              return `
              <button 
                class="filter-btn ${tab.id === activeTab ? 'is-active' : ''}" 
                data-bath-tab="${tab.id}"
                role="tab"
                aria-selected="${tab.id === activeTab}"
              >
                ${tab.title} (${count})
              </button>
            `;
            }).join('')}
          </div>

          <div class="catalog-sort">
            <label for="bath-sort-select">Sort by:</label>
            <select id="bath-sort-select" class="catalog-select" aria-label="Sort products">
              <option value="featured" ${sortOrder === 'featured' ? 'selected' : ''}>Featured Favorites</option>
              <option value="price-low" ${sortOrder === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${sortOrder === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${sortOrder === 'rating' ? 'selected' : ''}>Highest Rated</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="product-grid" id="bath-products-grid" role="region" aria-label="Bath and body products list">
          ${items.length > 0 ? items.map(product => renderProductCard(product)).join('') : `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: var(--sg-gray-600);">
              <p style="font-weight: 800; font-size: 1.2rem; margin-bottom: 8px;">No products match this filter combination</p>
              <p>Try switching filter tabs or selecting "All Bath &amp; Body".</p>
            </div>
          `}
        </div>
      </div>
    </section>
  `;
}
