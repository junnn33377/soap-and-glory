import { PRODUCTS } from '../data/products.js';
import { renderProductCard } from './ProductCard.js';

export const FRAGRANCE_TABS = [
  { id: 'all', title: 'All Fragrances & Mists', filterFn: (p) => p.category === 'fragrance' },
  { id: 'body-mists', title: 'Body Mists & Spritzes', filterFn: (p) => p.category === 'fragrance' && p.type === 'Body Mist' },
  { id: 'gift-sets', title: 'Gift Sets & Collections', filterFn: (p) => p.category === 'fragrance' && (p.type === 'Gift Set' || p.type === 'Perfume') },
  { id: 'original-pink', title: 'Original Pink™ Scents', filterFn: (p) => p.category === 'fragrance' && p.collection === 'Original Pink' },
  { id: 'gourmand-tropical', title: 'Bakery & Fruity Mists', filterFn: (p) => p.category === 'fragrance' && (p.collection === 'Smoothie Star' || p.collection === 'Call of Fruity' || p.collection === 'Sugar Crush' || p.collection === 'Magnificoco') }
];

export function renderFragranceCatalog(activeTab = 'all', sortOrder = 'featured') {
  const currentTab = FRAGRANCE_TABS.find(t => t.id === activeTab) || FRAGRANCE_TABS[0];
  let items = PRODUCTS.filter(currentTab.filterFn);

  if (sortOrder === 'price-low') {
    items.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-high') {
    items.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  }

  return `
    <section class="section section--white" id="fragrance-catalog" aria-label="Soap and Glory Fragrance Products Catalog">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>🌸</span>
            <span>OFFICIAL BODY MISTS &amp; PERFUMES</span>
          </div>
          <h2 class="section-title">Soap &amp; Glory Body Mists &amp; Fragrances</h2>
          <p class="section-subtitle">
            Explore our official collection of fine fragrance body mists, refreshing scent spritzes, and concentrated rollerball perfumes. Created by world-class British perfumers to leave a captivating, all-day scent trail.
          </p>
        </div>

        <!-- Filter and Sort Toolbar -->
        <div class="catalog-toolbar">
          <div class="catalog-filters" role="tablist" aria-label="Filter fragrance products">
            ${FRAGRANCE_TABS.map(tab => {
              const count = PRODUCTS.filter(tab.filterFn).length;
              return `
              <button 
                class="filter-btn ${tab.id === activeTab ? 'is-active' : ''}" 
                data-fragrance-catalog-tab="${tab.id}"
                role="tab"
                aria-selected="${tab.id === activeTab}"
              >
                ${tab.title} (${count})
              </button>
            `;
            }).join('')}
          </div>

          <div class="catalog-sort">
            <label for="fragrance-sort-select">Sort by:</label>
            <select id="fragrance-sort-select" class="catalog-select" aria-label="Sort products">
              <option value="featured" ${sortOrder === 'featured' ? 'selected' : ''}>Featured Favorites</option>
              <option value="price-low" ${sortOrder === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${sortOrder === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${sortOrder === 'rating' ? 'selected' : ''}>Highest Rated</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="product-grid" id="fragrance-products-grid" role="region" aria-label="Fragrance products list">
          ${items.length > 0 ? items.map(product => renderProductCard(product)).join('') : `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: var(--sg-gray-600);">
              <p style="font-weight: 800; font-size: 1.2rem; margin-bottom: 8px;">No fragrance products match this filter</p>
              <p>Select "All Fragrances &amp; Mists" to view all available body sprays and perfumes.</p>
            </div>
          `}
        </div>
      </div>
    </section>
  `;
}
