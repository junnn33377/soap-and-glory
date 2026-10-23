import { PRODUCTS } from '../data/products.js';

function getP(id) {
  return PRODUCTS.find(p => p.id === id);
}

export const BODY_ROUTINE_SETS = [
  {
    id: 'original-pink-trio',
    label: 'Original Pink™ Trio',
    name: 'The Signature Pamper Suite',
    step1: {
      product: getP('clean-on-me-500ml'),
      step: 'Step 1 · Cleanse',
      tip: 'Lather into a rich, creamy lather with natural mandarin peel.'
    },
    step2: {
      product: getP('scrub-of-your-life-200ml'),
      step: 'Step 2 · Buff',
      tip: 'Buff in circles to eliminate rough patches and dry shins.'
    },
    step3: {
      product: getP('righteous-butter-300ml'),
      step: 'Step 3 · Lock Moisture',
      tip: 'Smooth from shoulders to toes for 72 hours of velvety softness.'
    },
    tag: 'GLOBAL BESTSELLER TRIO'
  },
  {
    id: 'smoothie-star-duo',
    label: 'Warm Gourmand Bakery',
    name: 'The Almond & Honey Hydration Set',
    step1: {
      product: getP('clean-on-me-500ml'),
      step: 'Step 1 · Cleanse',
      tip: 'Start with a hydrating shower cleanse.'
    },
    step2: {
      product: getP('smoothie-star-scrub-300ml'),
      step: 'Step 2 · Sugar Buff',
      tip: 'Polish with organic oat, shea butter, and brown sugar crystals.'
    },
    step3: {
      product: getP('smoothie-star-lotion-500ml'),
      step: 'Step 3 · Quench',
      tip: 'Massage in warm honey and cocoa butter with vanilla bakery notes.'
    },
    tag: 'GOURMAND FAVORITE'
  },
  {
    id: 'call-of-fruity-pair',
    label: 'Tropical Vacation Glow',
    name: 'The Exotic Summer Escape Trio',
    step1: {
      product: getP('clean-on-me-500ml'),
      step: 'Step 1 · Cleanse',
      tip: 'Gentle clarifying wash preps skin for fruit exfoliation.'
    },
    step2: {
      product: getP('call-of-fruity-scrub-300ml'),
      step: 'Step 2 · Coconut Buff',
      tip: 'Natural coconut shell powder buffs away dull surface flakes.'
    },
    step3: {
      product: getP('call-of-fruity-lotion-500ml'),
      step: 'Step 3 · Drench',
      tip: 'Passionfruit seed oil and coconut water seal in glowing hydration.'
    },
    tag: 'SUMMER SUNSHINE'
  }
];

export function renderBathBodyRitual() {
  const sets = BODY_ROUTINE_SETS;

  return `
    <section class="section section--blush" id="body-pamper-ritual" aria-label="Soap and Glory Body Pamper Routine Guide">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>✨</span>
            <span>3-STEP HEAD-TO-TOE MASTERCLASS</span>
          </div>
          <h2 class="section-title">The Soap &amp; Glory Body Pampering Routine</h2>
          <p class="section-subtitle">
            Cleanse impurities, polish with a smoothing body scrub, and seal in 72 hours of rich hydration with our iconic body butter. Follow our 3-step ritual for your softest skin ever.
          </p>
        </div>

        <!-- 3 Step Visualizer -->
        <div class="double-cleanse-stepper">
          <div class="stepper-card">
            <span class="stepper-badge">STEP 1 · CLEANSE</span>
            <div class="stepper-icon">🫧</div>
            <h3 class="stepper-title">Lather with Conditioning Body Wash</h3>
            <p class="stepper-desc">Work a rich shower gel into a lavish lather over damp skin to wash away impurities without stripping essential moisture.</p>
            <div class="stepper-product">Try: <strong>Clean On Me™ Body Wash</strong></div>
          </div>

          <div class="stepper-card">
            <span class="stepper-badge">STEP 2 · POLISH</span>
            <div class="stepper-icon">✨</div>
            <h3 class="stepper-title">Exfoliate 2–3 Times Weekly</h3>
            <p class="stepper-desc">Massage an exfoliating body scrub in gentle circles over elbows, knees, and shins to buff away dry patches and reveal silky-smooth skin.</p>
            <div class="stepper-product">Try: <strong>The Scrub Of Your Life™</strong></div>
          </div>

          <div class="stepper-card">
            <span class="stepper-badge">STEP 3 · LOCK</span>
            <div class="stepper-icon">🧈</div>
            <h3 class="stepper-title">Seal 72-Hour Moisture with Body Butter</h3>
            <p class="stepper-desc">Smooth on nourishing shea body butter within minutes of stepping out of the bath while skin is slightly damp for long-lasting softness.</p>
            <div class="stepper-product">Try: <strong>The Righteous Butter™</strong></div>
          </div>
        </div>

        <!-- Interactive Routine Matcher -->
        <div class="duo-matcher-container" style="margin-top: 40px;">
          <div class="duo-matcher-header">
            <span class="badge-stamp badge-stamp--pink">BODY ROUTINE SELECTOR</span>
            <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 900; margin: 8px 0;">
              Choose Your Signature Fragrance Experience
            </h3>
            <p style="font-size: 0.9rem; color: var(--sg-gray-700);">Select a fragrance family below to view the matching 3-step routine:</p>
            
            <div class="duo-selector-tabs" role="tablist">
              ${sets.map((s, i) => `
                <button 
                  class="duo-tab-btn ${i === 0 ? 'is-active' : ''}" 
                  data-body-set-id="${s.id}"
                  role="tab"
                  aria-selected="${i === 0}"
                >
                  ${s.label}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="duo-display-card" id="body-set-display-mount">
            ${renderBodySetCard(sets[0])}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderBodySetCard(set) {
  const p1 = set.step1.product;
  const p2 = set.step2.product;
  const p3 = set.step3.product;
  const total = ((p1?.price || 0) + (p2?.price || 0) + (p3?.price || 0)).toFixed(2);

  return `
    <div class="duo-card-content" data-active-set="${set.id}">
      <div class="duo-card-header">
        <span class="badge-stamp badge-stamp--gold">${set.tag}</span>
        <h4 class="duo-card-title">${set.name}</h4>
      </div>

      <div class="duo-products-row">
        <!-- Step 1 -->
        ${p1 ? `
        <div class="duo-product-item">
          <div class="duo-step-badge">${set.step1.step}</div>
          <img src="${p1.image}" alt="${p1.name}" class="duo-product-img" width="160" height="160" loading="lazy">
          <h5 class="duo-product-name">${p1.name}</h5>
          <p class="duo-product-desc">${set.step1.tip}</p>
          <div class="duo-product-price">£${p1.price.toFixed(2)} <span style="font-size: 0.85em; color: var(--sg-gray-600);">($${(p1.price * 1.3).toFixed(2)})</span></div>
        </div>
        ` : ''}

        <div class="duo-plus-sign">+</div>

        <!-- Step 2 -->
        ${p2 ? `
        <div class="duo-product-item">
          <div class="duo-step-badge">${set.step2.step}</div>
          <img src="${p2.image}" alt="${p2.name}" class="duo-product-img" width="160" height="160" loading="lazy">
          <h5 class="duo-product-name">${p2.name}</h5>
          <p class="duo-product-desc">${set.step2.tip}</p>
          <div class="duo-product-price">£${p2.price.toFixed(2)} <span style="font-size: 0.85em; color: var(--sg-gray-600);">($${(p2.price * 1.3).toFixed(2)})</span></div>
        </div>
        ` : ''}

        <div class="duo-plus-sign">+</div>

        <!-- Step 3 -->
        ${p3 ? `
        <div class="duo-product-item">
          <div class="duo-step-badge">${set.step3.step}</div>
          <img src="${p3.image}" alt="${p3.name}" class="duo-product-img" width="160" height="160" loading="lazy">
          <h5 class="duo-product-name">${p3.name}</h5>
          <p class="duo-product-desc">${set.step3.tip}</p>
          <div class="duo-product-price">£${p3.price.toFixed(2)} <span style="font-size: 0.85em; color: var(--sg-gray-600);">($${(p3.price * 1.3).toFixed(2)})</span></div>
        </div>
        ` : ''}
      </div>

      <div class="duo-card-footer">
        <div class="duo-price-summary">
          <span>Complete 3-Step Collection:</span>
          <strong>£${total} <span style="font-size: 0.85em; font-weight: 700; color: var(--sg-gray-600);">($${(parseFloat(total) * 1.3).toFixed(2)})</span></strong>
        </div>
        <a href="#bath-body-catalog" class="btn btn--primary btn--md" style="height: 44px; display: inline-flex; align-items: center; justify-content: center; text-decoration: none;">
          View Products in Catalog ↓
        </a>
      </div>
    </div>
  `;
}
