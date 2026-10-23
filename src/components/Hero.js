import { store } from '../state.js';
import { COLLECTIONS } from '../data/collections.js';

export function renderHero() {
  const activeCol = COLLECTIONS.find(c => c.id === store.activeTheme) || COLLECTIONS[0];

  const heroImages = {
    'original-pink': {
      img: '/images/products/the-righteous-butter.webp',
      alt: 'The Righteous Butter 300ml body butter packaging',
      badge: "UK's #1 BODY BUTTER"
    },
    'smoothie-star': {
      img: '/images/products/smoothie-star-body-lotion.webp',
      alt: 'Smoothie Star Body Lotion 500ml packaging',
      badge: "SWEET ALMOND & HONEY"
    },
    'call-of-fruity': {
      img: '/images/products/call-of-fruity-body-lotion.webp',
      alt: 'Call of Fruity Body Lotion 500ml packaging',
      badge: "EXOTIC MANGO PUNCH"
    },
    'magnificoco': {
      img: '/images/products/magnificoco-body-lotion.webp',
      alt: 'Magnificoco Body Lotion 500ml packaging',
      badge: "CREAMY COCONUT GLOW"
    }
  };

  const heroItem = heroImages[activeCol.id] || heroImages['original-pink'];

  return `
    <section class="hero" id="top" aria-label="Hero Campaign">
      <div class="hero-backdrop" aria-hidden="true"></div>
      <div class="hero-glow" aria-hidden="true"></div>

      <div class="container hero-grid">
        <!-- Left Editorial Copy Block -->
        <div class="hero-content">
          <div class="hero-eyebrow">
            <span>✨</span>
            <span>EST. 2006 SOHO LONDON · BRITISH BEAUTY GLAMOUR</span>
          </div>

          <h1 class="hero-brand-h1">SOAP &amp; GLORY</h1>

          <div class="hero-tagline">
            Glory to your skin. <span class="highlight-pink">Suds to your soul.</span>
          </div>

          <p class="hero-description">
            Soap and Glory is a bath and skincare brand famous for rich body butter, hydrating body wash, and exfoliating scrubs. Formulated with shea butter and vitamin C, our formulas lock in deep moisture for dry skin without feeling greasy. Enjoy visibly softer, smoother skin and an all-day signature scent.
          </p>

          <div class="hero-actions">
            <a 
              href="https://www.amazon.com/dp/B01MSHIMSR?tag=soapnglory-20" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn--primary"
            >
              Shop Bestselling Icons ↗
            </a>
            <a href="#catalog" class="btn btn--outline">
              Explore Catalog
            </a>
          </div>

          <!-- Interactive Fragrance Switcher (Updates Accent Color & Mood) -->
          <div class="hero-collection-nav">
            <div class="hero-collection-nav__label">Explore By Fragrance Family:</div>
            <div class="hero-collection-nav__pills">
              ${COLLECTIONS.map(col => `
                <button 
                  class="collection-pill ${col.id === store.activeTheme ? 'is-active' : ''}" 
                  data-theme-pick="${col.id}"
                  style="--collection-accent: ${col.accentColor};"
                  aria-pressed="${col.id === store.activeTheme}"
                >
                  ${col.name}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Product Showcase on Spacious Radiant Stage -->
        <div class="hero-visual">
          <div class="hero-product-stage">
            <div class="hero-product-halo"></div>

            <div class="hero-floating-pill hero-floating-pill--top" style="background: ${activeCol.accentColor}; color: #fff;">
              <span>✨</span>
              <span>${heroItem.badge}</span>
            </div>

            <img 
              src="${heroItem.img}" 
              alt="${heroItem.alt}" 
              class="hero-product-image"
              id="hero-main-img"
              width="400" 
              height="400"
              fetchpriority="high"
            >

            <div class="hero-floating-pill hero-floating-pill--bottom">
              <span>🐰</span>
              <span>100% CRUELTY-FREE · LEAPING BUNNY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
