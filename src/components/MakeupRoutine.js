export function renderMakeupRoutine() {
  const steps = [
    {
      num: '01',
      title: 'Prep & Mattify',
      productName: 'One Heck Of A Blot™ Primer',
      productId: 'one-heck-of-a-blot-primer',
      image: '/images/products/one-heck-of-a-blot-power-primer.jpg',
      price: '£12.00 ($15.60)',
      amazonUrl: 'https://www.amazon.com/dp/B014WHWSRE?tag=soapnglory-20',
      tip: 'Smooth a dime-sized amount over the T-zone to instantly erase shine and blur pores before applying makeup.'
    },
    {
      num: '02',
      title: 'Arch Envy Definition',
      productName: 'Archery™ 2-in-1 Brow Tint',
      productId: 'archery-brow-tint-pencil',
      image: '/images/products/archery-brow-tint-pencil.jpg',
      price: '£11.00 ($14.30)',
      amazonUrl: 'https://www.amazon.com/dp/B009OHAJKQ?tag=soapnglory-20',
      tip: 'Shape and softly shade with the triangular crayon, then flick realistic hair strokes with the precision micro-felt tip.'
    },
    {
      num: '03',
      title: 'Lash Drama & Lift',
      productName: 'Thick & Fast™ HD Mascara',
      productId: 'thick-and-fast-mascara',
      image: '/images/products/thick-and-fast-mascara.webp',
      price: '£10.99 ($14.29)',
      amazonUrl: 'https://www.amazon.com/dp/B0845PN8F5?tag=soapnglory-20',
      tip: 'Wiggle the 7-sided brush deep at the base of lashes and roll upward for extreme carbon-black volume and zero clumps.'
    },
    {
      num: '04',
      title: 'Cheekbone Radiance',
      productName: 'Glow All Out™ Cheek Stick',
      productId: 'glow-all-out-cheek-stick',
      image: '/images/products/glow-all-out-cheek-stick.jpg',
      price: '£11.50 ($14.95)',
      amazonUrl: 'https://www.amazon.com/dp/B01DC25IMC?tag=soapnglory-20',
      tip: 'Glide directly across cheekbones, brow bones, and Cupid’s bow, then tap with fingertips for a candlelit champagne glow.'
    },
    {
      num: '05',
      title: 'Power Plumping Pout',
      productName: 'Sexy Mother Pucker™ XXL',
      productId: 'sexy-mother-pucker-xxl',
      image: '/images/products/sexy-mother-pucker-xxl.webp',
      price: '£9.99 ($12.99)',
      amazonUrl: 'https://www.amazon.com/dp/B00Y5U9B3I?tag=soapnglory-20',
      tip: 'Swipe generously over bare lips. Enjoy the signature Lipswell™ buzz as lips expand into pillow-soft high-gloss fullness.'
    }
  ];

  return `
    <section class="section section--ivory" id="makeup-routine" aria-label="5-Minute Glory Glam Makeup Routine">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow" style="color: var(--sg-pink);">
            <span>⏱️</span>
            <span>FAST-TRACK BEAUTY</span>
          </div>
          <h2 class="section-title">The 5-Minute Glory Glam Routine</h2>
          <p class="section-subtitle">
            Late for work? Big date? Five simple steps to look like you spent an hour with a celebrity makeup artist.
          </p>
        </div>

        <div class="routine-steps-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 20px; align-items: stretch;">
          ${steps.map(step => `
            <div class="routine-step-card" style="background: var(--sg-white); border: 3px solid var(--sg-black); border-radius: var(--radius-card); padding: 22px 18px; display: flex; flex-direction: column; text-align: center; position: relative; box-shadow: 4px 4px 0 var(--sg-black); transition: transform var(--transition-fast);">
              
              <!-- Step Pill Badge -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span class="badge-stamp badge-stamp--pink" style="font-size: 0.72rem; padding: 3px 8px; font-weight: 900;">
                  STEP ${step.num}
                </span>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--sg-gray-500); text-transform: uppercase;">
                  ${step.title}
                </span>
              </div>

              <!-- Product Image Frame -->
              <div style="height: 140px; display: flex; align-items: center; justify-content: center; background: linear-gradient(180deg, #FFF5F7 0%, #FFFFFF 100%); border-radius: var(--radius-md); padding: 8px; margin-bottom: 14px;">
                <img 
                  src="${step.image}" 
                  alt="${step.productName}" 
                  style="max-height: 120px; width: auto; object-fit: contain; filter: drop-shadow(0 6px 10px rgba(0,0,0,0.12));"
                  loading="lazy"
                >
              </div>

              <!-- Product Title -->
              <h3 style="font-family: var(--font-display); font-size: 1.05rem; font-weight: 900; text-transform: uppercase; line-height: 1.25; margin: 0 0 10px 0; min-height: 2.6em; display: flex; align-items: center; justify-content: center; color: var(--sg-black);">
                ${step.productName}
              </h3>

              <!-- Application Tip (Legible, Balanced) -->
              <div style="background: var(--sg-ivory); border: 1.5px solid var(--sg-gray-300); border-radius: var(--radius-sm); padding: 13px 12px; margin-bottom: 16px; flex: 1; text-align: left; display: flex; flex-direction: column;">
                <span style="color: var(--sg-pink-dark); display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 6px; letter-spacing: 0.05em;">
                  💡 Pro Tip
                </span>
                <p style="font-size: 0.88rem; color: var(--sg-gray-800); line-height: 1.55; margin: 0;">
                  ${step.tip}
                </p>
              </div>

              <!-- Action Buttons -->
              <div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px;">
                <button 
                  class="btn btn--outline btn--sm quick-view-btn" 
                  data-product-id="${step.productId}"
                  type="button"
                  style="width: 100%; font-size: 0.8rem; padding: 8px; font-weight: 800;"
                >
                  Quick View 👁️
                </button>
                <a 
                  href="${step.amazonUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn--primary btn--sm" 
                  style="width: 100%; text-decoration: none; text-align: center; font-size: 0.8rem; padding: 8px; font-weight: 800;"
                >
                  Buy · ${step.price} ↗
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
