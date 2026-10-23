import { PRODUCTS, CATEGORIES } from '../data/products.js';
import { store } from '../state.js';
import { renderProductCard } from './ProductCard.js';

export function renderCatalog() {
  const currentCat = store.catalogFilter;
  const currentSort = store.catalogSort;

  // Filter
  let filtered = currentCat === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === currentCat);

  // Sort
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return `
    <section class="section section--white" id="catalog" aria-label="Product Catalog">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span>✨</span>
            <span>FAN FAVORITES</span>
          </div>
          <h2 class="section-title">Bestsellers & New Favorites</h2>
          <p class="section-subtitle">
            Loved worldwide for rich textures, amazing scents, and real results.
          </p>
        </div>

        <!-- Filter and Sort Controls -->
        <div class="catalog-toolbar">
          <div class="catalog-filters" role="tablist" aria-label="Filter products by category">
            ${CATEGORIES.map(cat => `
              <button 
                class="filter-btn ${cat.id === currentCat ? 'is-active' : ''}" 
                data-category-filter="${cat.id}"
                role="tab"
                aria-selected="${cat.id === currentCat}"
              >
                ${cat.label}
              </button>
            `).join('')}
          </div>

          <div class="catalog-sort">
            <label for="sort-select">Sort by:</label>
            <select id="sort-select" class="catalog-select" aria-label="Sort products">
              <option value="featured" ${currentSort === 'featured' ? 'selected' : ''}>Featured Favorites</option>
              <option value="price-low" ${currentSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${currentSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${currentSort === 'rating' ? 'selected' : ''}>Highest Rated</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="product-grid" id="product-grid-container">
          ${filtered.length > 0 
            ? filtered.map(product => renderProductCard(product)).join('')
            : `
              <div style="grid-column: 1 / -1; text-align: center; padding: 48px 0;">
                <p>No products found in this category.</p>
                <button class="btn btn--outline" data-category-filter="all">Reset Filters</button>
              </div>
            `
          }
        </div>
      </div>
    </section>
  `;
}
