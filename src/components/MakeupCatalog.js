import { PRODUCTS } from '../data/products.js';
import { renderProductCard } from './ProductCard.js';

export const MAKEUP_TABS = [
  { id: 'all', label: 'All Makeup' },
  { id: 'lips', label: 'Lips & Plumpers' },
  { id: 'eyes', label: 'Eyes & Brows' },
  { id: 'complexion', label: 'Complexion & Glow' }
];

export function renderMakeupCatalog(activeTab = 'all', activeSort = 'featured') {
  const makeupProducts = PRODUCTS.filter(p => p.category === 'makeup');

  // Filter by Sub-Tab
  let filtered = makeupProducts.filter(p => {
    if (activeTab === 'all') return true;
    if (activeTab === 'lips') return p.type.toLowerCase().includes('lip');
    if (activeTab === 'eyes') return p.type.toLowerCase().includes('mascara') || p.type.toLowerCase().includes('brow');
    if (activeTab === 'complexion') return p.type.toLowerCase().includes('powder') || p.type.toLowerCase().includes('highlighter') || p.type.toLowerCase().includes('primer');
    return true;
  });

  // Sort
  if (activeSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return `
    <section class="section section--white" id="makeup-catalog" aria-label="Makeup and Cosmetics Catalog">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow" style="color: var(--sg-pink);">
            <span>✨</span>
            <span>GLAM SQUAD HEROES</span>
          </div>
          <h2 class="section-title">Soap &amp; Glory Cosmetics &amp; Makeup Range</h2>
          <p class="section-subtitle">
            Formula first, drama always. Discover award-winning Sexy Mother Pucker™ lip glosses, Thick &amp; Fast™ mascaras, and pore-blurring primers designed for show-stopping beauty.
          </p>
        </div>

        <!-- Catalog Toolbar -->
        <div class="catalog-toolbar">
          <div class="catalog-filters" role="tablist" aria-label="Filter makeup by category">
            ${MAKEUP_TABS.map(tab => {
              const count = makeupProducts.filter(p => {
                if (tab.id === 'all') return true;
                if (tab.id === 'lips') return p.type.toLowerCase().includes('lip');
                if (tab.id === 'eyes') return p.type.toLowerCase().includes('mascara') || p.type.toLowerCase().includes('brow');
                if (tab.id === 'complexion') return p.type.toLowerCase().includes('powder') || p.type.toLowerCase().includes('highlighter') || p.type.toLowerCase().includes('primer');
                return true;
              }).length;

              const isActive = tab.id === activeTab;
              return `
                <button 
                  class="filter-btn ${isActive ? 'is-active' : ''}" 
                  data-makeup-tab="${tab.id}"
                  role="tab"
                  aria-selected="${isActive}"
                  type="button"
                >
                  ${tab.label} (${count})
                </button>
              `;
            }).join('')}
          </div>

          <div class="catalog-sort">
            <label for="makeup-sort-select">Sort by:</label>
            <select id="makeup-sort-select" class="catalog-select" aria-label="Sort makeup products">
              <option value="featured" ${activeSort === 'featured' ? 'selected' : ''}>Featured Favorites</option>
              <option value="price-low" ${activeSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${activeSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${activeSort === 'rating' ? 'selected' : ''}>Highest Rated</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="product-grid" id="makeup-grid-container">
          ${filtered.length > 0 
            ? filtered.map(product => renderProductCard(product)).join('')
            : `
              <div style="grid-column: 1 / -1; text-align: center; padding: 48px 0;">
                <p>No products found in this category.</p>
                <button class="btn btn--outline" data-makeup-tab="all" type="button">Reset Filters</button>
              </div>
            `
          }
        </div>
      </div>
    </section>
  `;
}
