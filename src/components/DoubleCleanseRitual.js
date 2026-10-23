import { PRODUCTS } from '../data/products.js';

function getP(id) {
  return PRODUCTS.find(p => p.id === id);
}

function formatDual(p) {
  const val = typeof p === 'number' ? p : 8.00;
  return `£${val.toFixed(2)} ($${(val * 1.3).toFixed(2)})`;
}

export const DUOS = [
  {
    id: 'dull',
    label: 'Dull & Tired Skin',
    name: 'The Mega-Radiance Glow Duo',
    step1: {
      name: getP('peaches-and-clean')?.name || 'Peaches and Clean™ Milk',
      type: 'Step 1 · Melt',
      price: formatDual(getP('peaches-and-clean')?.price || 8),
      image: getP('peaches-and-clean')?.image || '/images/products/peaches-and-clean-cleanser.webp',
      desc: 'Melts long-wear makeup, SPF, and surface dirt with Peach extract and Ginseng.'
    },
    step2: {
      name: getP('face-soap-and-clarity')?.name || 'Face Soap & Clarity™ Wash',
      type: 'Step 2 · Wash',
      price: formatDual(getP('face-soap-and-clarity')?.price || 8),
      image: getP('face-soap-and-clarity')?.image || '/images/products/face-soap-and-clarity.webp',
      desc: 'Brightens and clarifies with Vitamin C, Yuzu citrus, and gentle polishing beads.'
    },
    combinedPrice: formatDual((getP('peaches-and-clean')?.price || 8) + (getP('face-soap-and-clarity')?.price || 8)),
    tag: 'BESTSELLING RADIANCE PAIR'
  },
  {
    id: 'oily',
    label: 'Oily & Blemish-Prone',
    name: 'The Deep Pore Clarifying Duo',
    step1: {
      name: getP('peaches-and-clean')?.name || 'Peaches and Clean™ Milk',
      type: 'Step 1 · Melt',
      price: formatDual(getP('peaches-and-clean')?.price || 8),
      image: getP('peaches-and-clean')?.image || '/images/products/peaches-and-clean-cleanser.webp',
      desc: 'Loosens sebum, waterproof foundation, and daily pollution with soothing Jojoba.'
    },
    step2: {
      name: getP('the-fab-pore-cleanser')?.name || 'The Fab Pore™ Foam',
      type: 'Step 2 · Wash',
      price: formatDual(getP('the-fab-pore-cleanser')?.price || 8),
      image: getP('the-fab-pore-cleanser')?.image || '/images/products/the-fab-pore-cleanser.jpg',
      desc: 'Deeply cleanses inside pores with Salicylic Acid (BHA) and Witch Hazel.'
    },
    combinedPrice: formatDual((getP('peaches-and-clean')?.price || 8) + (getP('the-fab-pore-cleanser')?.price || 8)),
    tag: 'ANTI-SHINE HEROES'
  },
  {
    id: 'tzone',
    label: 'Congested T-Zone & Texture',
    name: 'The Pore Reset & Polish Duo',
    step1: {
      name: getP('peaches-and-clean')?.name || 'Peaches and Clean™ Milk',
      type: 'Step 1 · Melt',
      price: formatDual(getP('peaches-and-clean')?.price || 8),
      image: getP('peaches-and-clean')?.image || '/images/products/peaches-and-clean-cleanser.webp',
      desc: 'Gentle cushiony milk that breaks down heavy cosmetic residue effortlessly.'
    },
    step2: {
      name: getP('scrub-your-nose-in-it')?.name || 'Scrub Your Nose In It™',
      type: 'Step 2 · Polish & Mask',
      price: formatDual(getP('scrub-your-nose-in-it')?.price || 8),
      image: getP('scrub-your-nose-in-it')?.image || '/images/products/scrub-your-nose-in-it.jpg',
      desc: 'Kaolin clay micromud and sea salt beads clarify congested pores and blackheads.'
    },
    combinedPrice: formatDual((getP('peaches-and-clean')?.price || 8) + (getP('scrub-your-nose-in-it')?.price || 8)),
    tag: 'PORE SMOOTHING HEROES'
  }
];

export function renderDoubleCleanseRitual() {
  const duos = DUOS;

  return `
    <section class="section section--blush" id="double-cleanse-ritual" aria-label="Soap & Glory Skincare Routine Guide">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>✨</span>
            <span>4-STEP SKINCARE MASTERCLASS</span>
          </div>
          <h2 class="section-title">The Soap &amp; Glory 4-Step Daily Glow Routine</h2>
          <p class="section-subtitle">
            Cleanse away pollution, polish congested pores, target with active treatments, and seal in 24 hours of dewy hydration. Follow our 4-step masterclass formulated for clean, radiant skin.
          </p>
        </div>

        <!-- 4 Step Visualizer -->
        <div class="double-cleanse-stepper">
          <div class="stepper-card">
            <span class="stepper-badge">STEP 1 · CLEANSE</span>
            <div class="stepper-icon">🫧</div>
            <h3 class="stepper-title">Cleanse &amp; Melt Makeup</h3>
            <p class="stepper-desc">Melt long-wear makeup, SPF, and surface dirt with a nourishing milk or clarify dullness with our Vitamin C detox face wash.</p>
            <div class="stepper-product">Try: <strong>Face Soap &amp; Clarity™</strong></div>
          </div>

          <div class="stepper-card">
            <span class="stepper-badge">STEP 2 · EXFOLIATE</span>
            <div class="stepper-icon">✨</div>
            <h3 class="stepper-title">Pore Polish 2x Weekly</h3>
            <p class="stepper-desc">Resurface congested texture and dissolve blackheads with a 2-minute lactic acid peel or Kaolin clay micro-bead scrub.</p>
            <div class="stepper-product">Try: <strong>Scrub In The Fast Lane™</strong></div>
          </div>

          <div class="stepper-card">
            <span class="stepper-badge">STEP 3 · TARGET</span>
            <div class="stepper-icon">👁️</div>
            <h3 class="stepper-title">Awaken Eyes &amp; Radiance</h3>
            <p class="stepper-desc">De-puff morning under-eyes with cooling peptide hydrogel patches and infuse skin with an intensive glow sheet mask.</p>
            <div class="stepper-product">Try: <strong>Puffy Eye Attack™ Patches</strong></div>
          </div>

          <div class="stepper-card">
            <span class="stepper-badge">STEP 4 · HYDRATE</span>
            <div class="stepper-icon">💧</div>
            <h3 class="stepper-title">Lock Plumping Hydration</h3>
            <p class="stepper-desc">Seal freshly treated skin with multi-molecular hyaluronic acid hydrogel lotion for all-day bounciness and dewy makeup prep.</p>
            <div class="stepper-product">Try: <strong>Speed Plump™ Day Lotion</strong></div>
          </div>
        </div>

        <!-- Interactive Duo Matcher -->
        <div class="duo-matcher-container">
          <div class="duo-matcher-header">
            <span class="badge-stamp badge-stamp--pink">SKIN CONCERN SELECTOR</span>
            <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 900; margin: 8px 0;">
              Find Your Personalized Skincare Duo
            </h3>
            <p style="font-size: 0.9rem; color: var(--sg-gray-700);">Select your primary skin concern below to reveal the ideal two-step face wash &amp; milk pairing:</p>
            
            <div class="duo-selector-tabs" role="tablist">
              ${duos.map((d, i) => `
                <button 
                  class="duo-tab-btn ${i === 0 ? 'is-active' : ''}" 
                  data-duo-id="${d.id}"
                  role="tab"
                  aria-selected="${i === 0}"
                >
                  ${d.label}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="duo-display-card" id="duo-display-mount">
            ${renderDuoCard(duos[0])}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderDuoCard(duo) {
  return `
    <div class="duo-card-content" data-active-duo="${duo.id}">
      <div class="duo-card-header">
        <span class="badge-stamp badge-stamp--gold">${duo.tag}</span>
        <h4 class="duo-card-title">${duo.name}</h4>
      </div>

      <div class="duo-products-row">
        <!-- Step 1 Product -->
        <div class="duo-product-item">
          <div class="duo-step-badge">${duo.step1.type}</div>
          <img src="${duo.step1.image}" alt="${duo.step1.name}" class="duo-product-img" width="160" height="160" loading="lazy">
          <h5 class="duo-product-name">${duo.step1.name}</h5>
          <p class="duo-product-desc">${duo.step1.desc}</p>
          <div class="duo-product-price">${duo.step1.price}</div>
        </div>

        <div class="duo-plus-sign">+</div>

        <!-- Step 2 Product -->
        <div class="duo-product-item">
          <div class="duo-step-badge">${duo.step2.type}</div>
          <img src="${duo.step2.image}" alt="${duo.step2.name}" class="duo-product-img" width="160" height="160" loading="lazy">
          <h5 class="duo-product-name">${duo.step2.name}</h5>
          <p class="duo-product-desc">${duo.step2.desc}</p>
          <div class="duo-product-price">${duo.step2.price}</div>
        </div>
      </div>

      <div class="duo-card-footer">
        <div class="duo-price-summary">
          <span>Complete 2-Step Routine:</span>
          <strong>${duo.combinedPrice}</strong>
        </div>
        <a href="#skincare-catalog" class="btn btn--primary btn--md" style="height: 44px; display: inline-flex; align-items: center; justify-content: center; text-decoration: none;">
          View Products in Catalog ↓
        </a>
      </div>
    </div>
  `;
}
