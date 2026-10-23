import { PRODUCTS } from '../data/products.js';
import { renderProductCard } from './ProductCard.js';

export const SKINCARE_FILTER_TABS = [
  { id: 'all', title: 'All Skincare', filterFn: (p) => p.category === 'skincare' },
  { id: 'cleansers', title: 'Face Washes & Milks', filterFn: (p) => p.category === 'skincare' && (p.cleanserType === 'foam' || p.cleanserType === 'melt') },
  { id: 'exfoliate', title: 'Exfoliating Scrubs', filterFn: (p) => p.category === 'skincare' && p.cleanserType === 'exfoliate' },
  { id: 'treatments', title: 'Moisturisers & Eye', filterFn: (p) => p.category === 'skincare' && !p.cleanserType }
];

export function renderSkincareCatalog(activeTab = 'all', sortOrder = 'featured') {
  const currentTab = SKINCARE_FILTER_TABS.find(t => t.id === activeTab) || SKINCARE_FILTER_TABS[0];
  let items = PRODUCTS.filter(currentTab.filterFn);

  if (sortOrder === 'price-low') {
    items.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-high') {
    items.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  }

  return `
    <section class="section section--white" id="skincare-catalog" aria-label="Soap and Glory Skincare and Face Wash Catalog">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>🧴</span>
            <span>COMPLETE SKINCARE &amp; FACE WASH COLLECTION</span>
          </div>
          <h2 class="section-title">Soap &amp; Glory Facial Skincare &amp; Cleansers</h2>
          <p class="section-subtitle">
            Target dull tone, refine stubborn pores, and lock in dewy hydrogel hydration. Every formula is powered by skin-loving antioxidants, fruit AHAs, and botanical extracts for clean, glowing results.
          </p>
        </div>

        <!-- Filter and Sort Toolbar -->
        <div class="catalog-toolbar">
          <div class="catalog-filters" role="tablist" aria-label="Filter skincare by formula">
            ${SKINCARE_FILTER_TABS.map(tab => {
              const count = PRODUCTS.filter(tab.filterFn).length;
              return `
              <button 
                class="filter-btn ${tab.id === activeTab ? 'is-active' : ''}" 
                data-skincare-tab="${tab.id}"
                role="tab"
                aria-selected="${tab.id === activeTab}"
              >
                ${tab.title} (${count})
              </button>
            `;
            }).join('')}
          </div>

          <div class="catalog-sort">
            <label for="skincare-sort-select">Sort by:</label>
            <select id="skincare-sort-select" class="catalog-select" aria-label="Sort products">
              <option value="featured" ${sortOrder === 'featured' ? 'selected' : ''}>Featured Favorites</option>
              <option value="price-low" ${sortOrder === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${sortOrder === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${sortOrder === 'rating' ? 'selected' : ''}>Highest Rated</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="product-grid" id="skincare-grid-container">
          ${items.map(product => renderProductCard(product)).join('')}
        </div>
      </div>
    </section>
  `;
}
