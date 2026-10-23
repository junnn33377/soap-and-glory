import { PRODUCTS } from '../data/products.js';

export function renderCategories() {
  // Dynamically compute exact counts from the single source of truth in PRODUCTS
  const bathBodyCount = PRODUCTS.filter(p => p.category === 'bath-body').length;
  const skincareCount = PRODUCTS.filter(p => p.category === 'skincare').length;
  const makeupCount = PRODUCTS.filter(p => p.category === 'makeup').length;
  const fragranceCount = PRODUCTS.filter(p => p.category === 'fragrance').length;
  const giftsCount = PRODUCTS.filter(p => p.category === 'gifts' || p.type === 'Gift Set' || p.id.includes('set') || p.id.includes('birthday')).length;
  const totalCount = PRODUCTS.length;

  const categories = [
    {
      id: 'bath-body',
      filter: 'bath-body',
      href: '/bath-body',
      title: 'Bath & Body',
      count: `${bathBodyCount} Products`,
      thumb: '/images/products/the-righteous-butter.webp',
      badge: '72-HR MOISTURE'
    },
    {
      id: 'skincare',
      filter: 'skincare',
      href: '/skincare',
      title: 'Face & Skincare',
      count: `${skincareCount} Products`,
      thumb: '/images/products/face-soap-and-clarity.webp',
      badge: 'PORE CLARITY'
    },
    {
      id: 'makeup',
      filter: 'makeup',
      href: '/makeup',
      title: 'Lips & Makeup',
      count: `${makeupCount} Products`,
      thumb: '/images/products/sexy-mother-pucker-xxl.webp',
      badge: 'LIP PLUMP & GLAM'
    },
    {
      id: 'fragrance',
      filter: 'fragrance',
      href: '/fragrance',
      title: 'Fragrance Mists',
      count: `${fragranceCount} Products`,
      thumb: '/images/products/original-pink-fragrance-spritz.jpg',
      badge: 'SIGNATURE SCENTS'
    },
    {
      id: 'gifts',
      filter: 'gifts',
      href: '/gifting',
      title: 'Star Gift Sets',
      count: `${giftsCount} Products`,
      thumb: '/images/products/pinkly-the-best-fragrance-set.jpg',
      badge: 'LIMITED EDITION'
    },
    {
      id: 'all',
      filter: 'all',
      href: '#catalog',
      title: 'All Products',
      count: `${totalCount} Products`,
      thumb: '/images/products/clean-on-me-body-wash.webp',
      badge: 'HEAD-TO-TOE'
    }
  ];

  return `
    <section class="section" id="categories" aria-label="Product Categories">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span>🧴</span>
            <span>HEAD-TO-TOE CARE</span>
          </div>
          <h2 class="section-title">Shop by Category</h2>
          <p class="section-subtitle">
            From 72-hour body butters and clarifying face washes to plumping lip glosses, find all your daily beauty favorites in one place.
          </p>
        </div>

        <div class="category-grid">
          ${categories.map(cat => `
            <a href="${cat.href}" class="category-card" style="text-decoration: none;" aria-label="Explore ${cat.title} Category">
              <img src="${cat.thumb}" alt="${cat.title}" class="category-card__thumb" loading="lazy" width="90" height="90">
              <span class="badge-stamp badge-stamp--pink">${cat.badge}</span>
              <div class="category-card__title">${cat.title} ↗</div>
              <div class="category-card__count">${cat.count}</div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
