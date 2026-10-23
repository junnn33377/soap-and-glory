import { COLLECTIONS } from '../data/collections.js';
import { PRODUCTS } from '../data/products.js';

export function renderFragranceFamilies(activeCollectionId = 'original-pink') {
  const selected = COLLECTIONS.find(c => c.id === activeCollectionId) || COLLECTIONS[0];
  const matchingProducts = PRODUCTS.filter(p => p.collection.toLowerCase().replace(/[^a-z0-9]/g, '-').includes(selected.id));

  return `
    <section class="section section--blush" id="fragrance-families" aria-label="Soap and Glory Fragrance Families Explorer">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>🌸</span>
            <span>OLFACTORY PYRAMID EXPLORER</span>
          </div>
          <h2 class="section-title">The Four Iconic Scent Families</h2>
          <p class="section-subtitle">
            Every Soap &amp; Glory fragrance is crafted with balanced top, heart, and base notes. Select a scent family below to explore its perfumery profile and find your signature aroma.
          </p>
        </div>

        <!-- Scent Family Tabs -->
        <div class="duo-selector-tabs fragrance-family-tabs" role="tablist">
          ${COLLECTIONS.map(c => {
            const isActive = c.id === selected.id;
            return `
            <button 
              class="duo-tab-btn ${isActive ? 'is-active' : ''}" 
              data-fragrance-tab="${c.id}"
              role="tab"
              aria-selected="${isActive}"
              style="${isActive 
                ? 'background: var(--sg-black) !important; color: #FFFFFF !important; border-color: var(--sg-black) !important; box-shadow: var(--shadow-pop-sm);' 
                : 'background: #FFFFFF; color: var(--sg-black); border: 2px solid var(--sg-black);'
              }"
            >
              ${c.name}
            </button>
          `;
          }).join('')}
        </div>

        <!-- Selected Scent Showcase Card -->
        <div class="fragrance-showcase-card" style="background: var(--sg-white); border: 2px solid var(--sg-black); border-radius: var(--radius-lg); padding: clamp(24px, 4vw, 40px); box-shadow: var(--shadow-pop); margin-bottom: 48px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; align-items: center;">
            <div>
              <div style="display: inline-flex; align-items: center; gap: 8px; background: ${selected.pillBg}; color: ${selected.darkAccent}; padding: 6px 14px; border-radius: var(--radius-pill); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; margin-bottom: 12px;">
                <span>✨ ${selected.heroTag}</span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 900; margin-bottom: 8px; color: var(--sg-black);">
                ${selected.title}
              </h3>
              <p style="font-family: var(--font-mono); font-size: 0.88rem; color: ${selected.darkAccent}; font-weight: 700; margin-bottom: 16px;">
                ${selected.tagline}
              </p>
              <p style="font-size: 0.95rem; color: var(--sg-gray-700); line-height: 1.6; margin-bottom: 24px;">
                ${selected.description}
              </p>

              <!-- Olfactory Notes Breakdown -->
              <div class="olfactory-pyramid" style="display: flex; flex-direction: column; gap: 12px; background: var(--sg-blush-light); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(0,0,0,0.06);">
                <div style="display: flex; gap: 12px; align-items: baseline;">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; min-width: 90px; color: var(--sg-pink); text-transform: uppercase;">Top Notes</span>
                  <span style="font-size: 0.88rem; font-weight: 600; color: var(--sg-black);">${selected.notes.top}</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: baseline;">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; min-width: 90px; color: var(--sg-gold-dark); text-transform: uppercase;">Heart Notes</span>
                  <span style="font-size: 0.88rem; font-weight: 600; color: var(--sg-black);">${selected.notes.heart}</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: baseline;">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; min-width: 90px; color: var(--sg-gray-700); text-transform: uppercase;">Base Notes</span>
                  <span style="font-size: 0.88rem; font-weight: 600; color: var(--sg-black);">${selected.notes.base}</span>
                </div>
              </div>
            </div>

            <div style="text-align: center;">
              <img 
                src="${selected.bannerImage}" 
                alt="${selected.name} Scent Collection" 
                style="width: 100%; max-height: 340px; object-fit: cover; border-radius: var(--radius-md); border: 2px solid var(--sg-black); box-shadow: var(--shadow-pop-sm);"
                loading="lazy"
              >
              <div style="margin-top: 16px;">
                <span class="badge-stamp badge-stamp--outline" style="font-size: 0.82rem;">
                  MOOD: ${selected.vibe.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 3-Step Scent Layering Masterclass -->
        <div id="fragrance-layering" style="margin-top: 24px;">
          <div class="section-header" style="margin-bottom: 28px;">
            <div class="section-eyebrow">
              <span>💫</span>
              <span>12-HOUR LONGEVITY TECHNIQUE</span>
            </div>
            <h3 class="section-title" style="font-size: clamp(1.4rem, 2.5vw, 1.8rem);">The Art of Scent Layering</h3>
            <p class="section-subtitle">
              Body mists evaporate off dry skin in hours. Follow our lipid-binding layering ritual in ${selected.name} to extend fragrance wear from dawn to dusk.
            </p>
          </div>

          <div class="double-cleanse-stepper">
            <div class="stepper-card">
              <span class="stepper-badge">STEP 1 · INFUSE</span>
              <div class="stepper-icon">🫧</div>
              <h3 class="stepper-title">Shower Cleanse</h3>
              <p class="stepper-desc">Wash with matching conditioning shower gel under warm water to open pores and infuse skin with fragrance oils.</p>
              <div class="stepper-product">Scent Foundation: <strong>${selected.name} Wash</strong></div>
            </div>

            <div class="stepper-card">
              <span class="stepper-badge">STEP 2 · BIND</span>
              <div class="stepper-icon">🧈</div>
              <h3 class="stepper-title">Lipid Moisture Lock</h3>
              <p class="stepper-desc">Smooth matching body butter onto warm skin. Rich shea and coconut lipids lock volatile fragrance molecules in place.</p>
              <div class="stepper-product">Scent Anchor: <strong>${selected.name} Butter</strong></div>
            </div>

            <div class="stepper-card">
              <span class="stepper-badge">STEP 3 · HALO</span>
              <div class="stepper-icon">✨</div>
              <h3 class="stepper-title">Halo Body Mist</h3>
              <p class="stepper-desc">Spritz body mist over pulse points and lightly through hair to create an irresistible, long-lasting scent trail.</p>
              <div class="stepper-product">Scent Aura: <strong>${selected.name} Body Mist</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
