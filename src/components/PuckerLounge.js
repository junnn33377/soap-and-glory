export const SHADES = [
  {
    id: 'pillow-plump-xxl',
    name: 'Pillow Plump XXL (Clearvoyant)',
    shadeName: 'Clearvoyant',
    colorHex: '#FDE8E9',
    swatchColor: '#FFE4E6',
    buzzLevel: '⚡⚡⚡ MAXIMUM VOLTAGE',
    buzzPercent: 100,
    finish: 'Ultra-Glossy High-Vinyl Glass',
    scent: 'Chilled Chocolate & Fresh Peppermint',
    tagline: 'The mother of all plumpers in crystal-clear glass shine. Maximum tingling fullness in 60 seconds.',
    image: '/images/products/sexy-mother-pucker-xxl.webp',
    productId: 'sexy-mother-pucker-xxl',
    price: 9.99,
    amazonUrl: 'https://www.amazon.com/dp/B00Y5U9B3I?tag=soapnglory-20'
  },
  {
    id: 'nude-in-town',
    name: 'Pillow Plump XXL (Nude In Town)',
    shadeName: 'Nude In Town',
    colorHex: '#C59A7A',
    swatchColor: '#C59A7A',
    buzzLevel: '⚡⚡⚡ MAXIMUM VOLTAGE',
    buzzPercent: 100,
    finish: 'Creamy Cushion Caramel Nude',
    scent: 'Warm Vanilla Caramel',
    tagline: 'The iconic 90s supermodel nude pout with maximum tingling plumping power and rich smoothing coverage.',
    image: '/images/products/sexy-mother-pucker-nude-in-town.jpg',
    productId: 'sexy-mother-pucker-nude-in-town',
    price: 9.99,
    amazonUrl: 'https://www.amazon.com/dp/B00X5J44PK?tag=soapnglory-20'
  },
  {
    id: 'candy-queen',
    name: 'Lip Plumping Gloss (Candy Queen)',
    shadeName: 'Candy Queen',
    colorHex: '#F472B6',
    swatchColor: '#F472B6',
    buzzLevel: '⚡⚡ HIGH BUZZ',
    buzzPercent: 75,
    finish: 'Shimmering Candy Pink Gloss',
    scent: 'Decadent Mandarin & Milk Chocolate',
    tagline: 'High-cushion plumping gloss in sparkling candy pink infused with light-catching micro-glimmers.',
    image: '/images/products/sexy-mother-pucker-candy-queen.jpg',
    productId: 'sexy-mother-pucker-candy-queen',
    price: 10.00,
    amazonUrl: 'https://www.amazon.com/dp/B0156CQ9U6?tag=soapnglory-20'
  },
  {
    id: 'nudestar',
    name: 'Lip Plumping Gloss (Nudestar)',
    shadeName: 'Nudestar',
    colorHex: '#D8A48F',
    swatchColor: '#D8A48F',
    buzzLevel: '⚡⚡ HIGH BUZZ',
    buzzPercent: 75,
    finish: 'Soft Sheer Neutral Nude Glaze',
    scent: 'Sweet Chocolate & Mint',
    tagline: 'Your lips but 10x juicier. A soft neutral rosy-nude glaze with lip-smoothing shine and tingling volume.',
    image: '/images/products/sexy-mother-pucker-nudestar.jpg',
    productId: 'sexy-mother-pucker-nudestar',
    price: 10.00,
    amazonUrl: 'https://www.amazon.com/dp/B0156CGV5O?tag=soapnglory-20'
  }
];

export function renderPuckerLounge(selectedShadeId = 'pillow-plump-xxl') {
  const shade = SHADES.find(s => s.id === selectedShadeId) || SHADES[0];

  return `
    <section class="section section--ivory" id="pucker-lounge" aria-label="Interactive Lip Plumping Studio">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow" style="color: var(--sg-pink);">
            <span>💋</span>
            <span>THE PUCKER LOUNGE™</span>
          </div>
          <h2 class="section-title">Find Your Perfect Buzz &amp; Finish</h2>
          <p class="section-subtitle">
            Not all plumpers are created equal. Select your shade to test tingle intensity, shine factor, and formula secrets.
          </p>
        </div>

        <div class="pucker-studio-layout" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; align-items: center; max-width: 1060px; margin: 0 auto; background: var(--sg-white); border: 3px solid var(--sg-black); border-radius: var(--radius-card); box-shadow: var(--shadow-pop); padding: clamp(20px, 4vw, 40px);">
          
          <!-- Left Column: Shade Selector Controls -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--sg-gray-600); margin-bottom: 12px; letter-spacing: 0.05em;">
              1. Choose Your Shade &amp; Formula:
            </div>

            <div class="shade-buttons-list" style="display: grid; gap: 10px; margin-bottom: 24px;">
              ${SHADES.map(s => {
                const isActive = s.id === shade.id;
                return `
                  <button 
                    type="button"
                    class="shade-pick-btn ${isActive ? 'is-active' : ''}" 
                    data-shade-id="${s.id}"
                    style="
                      display: flex;
                      align-items: center;
                      gap: 14px;
                      padding: 12px 16px;
                      border-radius: var(--radius-sm);
                      border: 2px solid ${isActive ? 'var(--sg-black)' : 'var(--sg-gray-300)'};
                      background: ${isActive ? '#FFF0F5' : 'var(--sg-white)'};
                      box-shadow: ${isActive ? '3px 3px 0 var(--sg-black)' : 'none'};
                      cursor: pointer;
                      text-align: left;
                      transition: all var(--transition-fast);
                      width: 100%;
                    "
                  >
                    <span style="display: inline-block; width: 26px; height: 26px; border-radius: 50%; background: ${s.swatchColor}; border: 2px solid var(--sg-black); flex-shrink: 0;"></span>
                    <div style="flex: 1;">
                      <div style="font-family: var(--font-display); font-weight: 900; font-size: 0.95rem; color: var(--sg-black); text-transform: uppercase;">
                        ${s.name}
                      </div>
                      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--sg-gray-600);">
                        ${s.buzzLevel} · ${s.finish}
                      </div>
                    </div>
                    <span style="font-weight: 900; font-size: 1.1rem; color: ${isActive ? 'var(--sg-pink)' : 'var(--sg-gray-400)'};">
                      ${isActive ? '✓' : '→'}
                    </span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Plump Buzz Meter -->
            <div style="background: var(--sg-ivory); border: 2px solid var(--sg-gray-300); border-radius: var(--radius-sm); padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-family: var(--font-display); font-size: 0.82rem; font-weight: 900; text-transform: uppercase;">
                  Tingle / Plumping Intensity:
                </span>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 800; color: var(--sg-pink-dark);">
                  ${shade.buzzLevel}
                </span>
              </div>
              <div style="width: 100%; height: 12px; background: var(--sg-gray-200); border-radius: var(--radius-pill); overflow: hidden; border: 1px solid var(--sg-black);">
                <div style="width: ${shade.buzzPercent}%; height: 100%; background: linear-gradient(90deg, #E5A03A, #FF3377, #C91D57); transition: width 0.4s ease;"></div>
              </div>
              <p style="font-size: 0.76rem; color: var(--sg-gray-600); margin: 8px 0 0 0; line-height: 1.4;">
                *Micro-circulatory Lipswell™ infusion activates upon contact. Tingle peaks in 90 seconds.
              </p>
            </div>
          </div>

          <!-- Right Column: Live Shade Display Card -->
          <div id="pucker-card-mount">
            ${renderPuckerShadeDisplay(shade)}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderPuckerShadeDisplay(shade) {
  return `
    <div class="pucker-display-card" style="text-align: center; border: 2px solid var(--sg-black); border-radius: var(--radius-card); padding: 24px; background: #FFF9FA; position: relative;">
      <div style="display: inline-flex; align-items: center; gap: 6px; background: var(--sg-pink); color: var(--sg-white); font-family: var(--font-display); font-size: 0.75rem; font-weight: 900; text-transform: uppercase; padding: 4px 12px; border-radius: var(--radius-pill); margin-bottom: 14px;">
        <span>🔥</span>
        <span>${shade.finish}</span>
      </div>

      <div style="margin-block: 10px; min-height: 200px; display: flex; align-items: center; justify-content: center;">
        <img 
          src="${shade.image}" 
          alt="${shade.name}" 
          style="max-height: 210px; width: auto; object-fit: contain; filter: drop-shadow(0 10px 14px rgba(0,0,0,0.12));"
        >
      </div>

      <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin: 0 0 4px 0;">
        ${shade.name}
      </h3>

      <div style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 900; color: var(--sg-pink-dark); margin-bottom: 8px;">
        £${shade.price.toFixed(2)} <span style="font-size: 0.82em; color: var(--sg-gray-600); font-weight: 700;">($${(shade.price * 1.3).toFixed(2)})</span>
      </div>

      <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.5; margin-bottom: 12px;">
        ${shade.tagline}
      </p>

      <div style="background: var(--sg-white); border: 1px solid var(--sg-gray-300); border-radius: var(--radius-sm); padding: 10px; font-size: 0.78rem; margin-bottom: 18px; text-align: left;">
        <div><strong>Flavor / Aroma:</strong> ${shade.scent}</div>
        <div><strong>Plump Tech:</strong> Lipswell™ Natural Plant Extract + Superfill™</div>
      </div>

      <div style="display: flex; gap: 10px; justify-content: center; align-items: stretch;">
        <button 
          class="btn btn--outline btn--md quick-view-btn" 
          data-product-id="${shade.productId}"
          type="button"
          style="flex: 1; padding: 12px; font-size: var(--text-sm); font-weight: 800; white-space: nowrap;"
        >
          Quick View 👁️
        </button>
        <a 
          href="${shade.amazonUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn--primary btn--md"
          style="flex: 1.2; text-decoration: none; text-align: center; white-space: nowrap; padding: 12px; font-size: var(--text-sm); font-weight: 800;"
        >
          Buy on Amazon ↗
        </a>
      </div>
    </div>
  `;
}
