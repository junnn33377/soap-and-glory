import { COLLECTIONS } from '../data/collections.js';
import { PRODUCTS } from '../data/products.js';
import { store } from '../state.js';

export function renderCollectionsShowcase() {
  const activeCol = COLLECTIONS.find(c => c.id === store.activeTheme) || COLLECTIONS[0];
  const featuredProds = PRODUCTS.filter(p => activeCol.heroProductIds.includes(p.id));

  return `
    <section class="collection-showcase" id="collections" aria-label="Fragrance Storytelling">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow" style="background: ${activeCol.pillBg}; color: ${activeCol.accentColor};">
            <span>🌸</span>
            <span>FIND YOUR SCENT</span>
          </div>
          <h2 class="section-title">The Scent Collections</h2>
          <p class="section-subtitle">
            Every Soap & Glory scent has its own personality. Pick your favorite vibe below.
          </p>
        </div>

        <!-- Collection Switcher Tabs -->
        <div class="collection-tabs" role="tablist" aria-label="Fragrance Collections">
          ${COLLECTIONS.map(col => `
            <button 
              class="collection-tab-btn ${col.id === activeCol.id ? 'is-active' : ''}" 
              data-theme-pick="${col.id}"
              style="--tab-color: ${col.accentColor};"
              role="tab"
              aria-selected="${col.id === activeCol.id}"
            >
              ${col.name}
            </button>
          `).join('')}
        </div>

        <!-- Dynamic Collection Detail Panel: Perfectly Balanced Left & Right Columns -->
        <div 
          class="collection-detail-panel" 
          style="--tab-bg: ${activeCol.bgTint}; border-color: var(--sg-black);"
        >
          <!-- Left Column: Scent Architecture & Story (Full-Height Unified Card) -->
          <div class="collection-story-card">
            <div class="collection-story-card__top">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span class="badge-stamp" style="background: ${activeCol.accentColor}; border-color: ${activeCol.accentColor}; color: #fff;">
                  ${activeCol.heroTag}
                </span>
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; color: var(--sg-gray-600); text-transform: uppercase; letter-spacing: 0.05em;">
                  FRAGRANCE FAMILY
                </span>
              </div>

              <h3 class="collection-story-card__title">
                ${activeCol.title}
              </h3>

              <div class="collection-story-card__tagline" style="color: ${activeCol.darkAccent};">
                ${activeCol.tagline}
              </div>

              <p class="collection-story-card__desc">
                ${activeCol.description}
              </p>
            </div>

            <!-- Framed Fragrance Moodboard Image -->
            <div class="collection-story-card__mood">
              <div class="collection-story-card__image-frame">
                <img 
                  src="${activeCol.bannerImage}" 
                  alt="${activeCol.name} fragrance collection lifestyle" 
                  class="collection-story-card__img"
                  loading="lazy"
                >
                <div class="collection-story-card__mood-badge">
                  ${activeCol.name} Scent Mood
                </div>
              </div>

              <!-- Fragrance Notes Pyramid -->
              <div class="collection-notes-pyramid">
                <div class="note-tier">
                  <span class="note-label">TOP:</span>
                  <span class="note-content">${activeCol.notes.top}</span>
                </div>
                <div class="note-tier">
                  <span class="note-label">HEART:</span>
                  <span class="note-content">${activeCol.notes.heart}</span>
                </div>
                <div class="note-tier">
                  <span class="note-label">BASE:</span>
                  <span class="note-content">${activeCol.notes.base}</span>
                </div>
              </div>
            </div>

            <!-- Bottom CTA: Pinned horizontally matching product card buttons -->
            <div class="collection-story-card__action">
              <a 
                href="#catalog" 
                class="btn btn--black btn--md collection-story-card__btn" 
                data-category="bath-body"
              >
                Shop All ${activeCol.name} Range →
              </a>
            </div>
          </div>

          <!-- Right Column: Featured Collection Products Grid (2x2 Grid) -->
          <div class="collection-products-column">
            <div class="collection-products-column__header">
              <span class="collection-products-column__label">
                Popular in this Scent:
              </span>
              <span class="collection-products-column__count">
                ${featuredProds.length} Fan Favorites
              </span>
            </div>

            <div class="collection-products-grid">
              ${featuredProds.map(prod => `
                <div class="collection-prod-card">
                  <div class="collection-prod-card__img-box">
                    <img src="${prod.image}" alt="${prod.name}" class="collection-prod-card__img" loading="lazy">
                  </div>
                  <div class="collection-prod-card__info">
                    <div class="collection-prod-card__name">${prod.name}</div>
                    <div class="collection-prod-card__price" style="color: ${activeCol.accentColor};">
                      £${prod.price.toFixed(2)} <span style="font-size: 0.82em; color: var(--sg-gray-600);">($${(prod.price * 1.3).toFixed(2)})</span>
                    </div>
                  </div>
                  <div class="collection-prod-card__action">
                    <a 
                      href="${prod.amazonUrl}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="btn btn--primary btn--sm collection-prod-card__btn"
                    >
                      Buy on Amazon ↗
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
