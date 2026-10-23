import { PRODUCTS } from '../data/products.js';
import { renderProductCard } from './ProductCard.js';

export const GIFT_TABS = [
  { id: 'all', label: 'All Gift Sets' },
  { id: 'star-gifts', label: 'Star Gifts & Tins' },
  { id: 'bath-body', label: 'Bath & Body Sets' },
  { id: 'under-20', label: 'Treats Under £20 ($26)' }
];

export function renderGiftingCatalog(activeTab = 'all', activeSort = 'featured') {
  // Gift Products
  const giftProducts = PRODUCTS.filter(p => p.category === 'gifts' || p.type === 'Gift Set' || p.badge?.includes('GIFT') || p.id.includes('set') || p.id.includes('birthday'));

  // Filter
  let filtered = giftProducts.filter(p => {
    if (activeTab === 'all') return true;
    if (activeTab === 'star-gifts') return p.badge?.includes('STAR') || p.name.includes('Birthday Box') || p.name.includes('Pinkly');
    if (activeTab === 'bath-body') return p.description.toLowerCase().includes('clean on me') || p.description.toLowerCase().includes('righteous butter');
    if (activeTab === 'under-20') return p.price <= 20.00;
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
    <section class="section section--white" id="gifting-catalog" aria-label="Soap & Glory Gift Sets Catalog">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow" style="color: var(--sg-pink);">
            <span>🎀</span>
            <span>UNWRAP GLORY</span>
          </div>
          <h2 class="section-title">Bestselling Soap &amp; Glory Gift Sets &amp; Pamper Tins</h2>
          <p class="section-subtitle">
            Housed in reusable retro collectible keepsake tins and boxes. Discover our award-winning Boots Star Gifts, birthday collections, and luxury pamper bundles.
          </p>
        </div>

        <!-- Catalog Toolbar -->
        <div class="catalog-toolbar">
          <div class="catalog-filters" role="tablist" aria-label="Filter gift sets by type">
            ${GIFT_TABS.map(tab => {
              const count = giftProducts.filter(p => {
                if (tab.id === 'all') return true;
                if (tab.id === 'star-gifts') return p.badge?.includes('STAR') || p.name.includes('Birthday Box') || p.name.includes('Pinkly');
                if (tab.id === 'bath-body') return p.description.toLowerCase().includes('clean on me') || p.description.toLowerCase().includes('righteous butter');
                if (tab.id === 'under-20') return p.price <= 20.00;
                return true;
              }).length;

              const isActive = tab.id === activeTab;
              return `
                <button 
                  class="filter-btn ${isActive ? 'is-active' : ''}" 
                  data-gifting-tab="${tab.id}"
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
            <label for="gifting-sort-select">Sort by:</label>
            <select id="gifting-sort-select" class="catalog-select" aria-label="Sort gift sets">
              <option value="featured" ${activeSort === 'featured' ? 'selected' : ''}>Featured Value</option>
              <option value="rating" ${activeSort === 'rating' ? 'selected' : ''}>Highest Customer Rating</option>
              <option value="price-low" ${activeSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${activeSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="product-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
          ${filtered.map(product => renderProductCard(product)).join('')}
        </div>
      </div>
    </section>
  `;
}
