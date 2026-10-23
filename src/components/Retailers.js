export function renderRetailers() {
  const stockists = [
    {
      name: 'Amazon',
      role: 'Fast Online Delivery',
      desc: 'Shop the full range with fast Prime shipping, bundle savings, and authentic customer reviews.',
      badge: 'OFFICIAL ONLINE HUB',
      link: 'https://www.amazon.com/stores/SoapandGlory/page/E437A20D-23F0-4049-A9F1-283C02926CF5?tag=soapnglory-20',
      cta: 'Shop Amazon Store'
    },
    {
      name: 'Boots UK',
      role: 'Exclusive UK Flagship',
      desc: 'Our iconic UK high-street home. Shop full collections, Star Gift holiday tins, and earn Boots Advantage Points.',
      badge: 'OFFICIAL UK PARTNER',
      link: 'https://www.boots.com/soap-and-glory',
      cta: 'Shop Boots UK'
    },
    {
      name: 'Target',
      role: 'Everyday US Retailer',
      desc: 'Find everyday bath favorites, body butters, and travel minis on store shelves and Drive Up pickup.',
      badge: 'OFFICIAL US STOCKIST',
      link: 'https://www.target.com/s?searchTerm=soap+and+glory',
      cta: 'Shop Target'
    },
    {
      name: 'Walgreens',
      role: 'US Pharmacy & Beauty',
      desc: 'Pick up Clean On Me™ and The Righteous Butter™ with convenient same-day pickup nationwide.',
      badge: 'OFFICIAL RETAILER',
      link: 'https://www.walgreens.com/search/results.jsp?Ntt=soap+and+glory',
      cta: 'Shop Walgreens'
    },
    {
      name: 'Walmart',
      role: 'US Superstore Partner',
      desc: 'Discover great value on Soap & Glory bath, body, and gift sets in stores and online nationwide.',
      badge: 'OFFICIAL RETAILER',
      link: 'https://www.walmart.com/search?q=soap+and+glory',
      cta: 'Shop Walmart'
    }
  ];

  return `
    <section class="section section--tinted" id="retailers" aria-label="Authorized Stockists">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span>📍</span>
            <span>WHERE TO BUY</span>
          </div>
          <h2 class="section-title">Authorized Retail Partners</h2>
          <p class="section-subtitle">
            Soap & Glory formulas are available worldwide through verified official stockists. Buy directly on Amazon or visit your favorite store below.
          </p>
        </div>

        <div class="retailers-grid">
          ${stockists.map(s => `
            <div style="background: var(--sg-white); border: 2px solid var(--sg-black); border-radius: var(--radius-card); padding: 24px 18px; box-shadow: var(--shadow-pop-sm); display: flex; flex-direction: column; justify-content: space-between; height: 100%; transition: transform var(--transition-fast), box-shadow var(--transition-fast);">
              <div>
                <div style="min-height: 28px; margin-bottom: 12px; display: flex; align-items: center;">
                  <span class="badge-stamp badge-stamp--outline" style="font-size: 0.74rem; font-weight: 800; padding: 4px 10px;">
                    ${s.badge}
                  </span>
                </div>
                <h3 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 6px; letter-spacing: -0.01em; white-space: nowrap;">
                  ${s.name}
                </h3>
                <div style="font-size: 0.76rem; font-family: var(--font-mono); color: var(--sg-pink); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 12px;">
                  ${s.role}
                </div>
                <p style="font-size: var(--text-sm); color: var(--sg-gray-800); line-height: 1.55; min-height: 5em; margin-bottom: 20px;">
                  ${s.desc}
                </p>
              </div>

              <div style="margin-top: auto; width: 100%;">
                <a 
                  href="${s.link}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn--black" 
                  style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: center; gap: 6px; text-decoration: none; font-size: 0.8rem; font-weight: 800; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.03em; white-space: nowrap; padding: 0 8px; box-sizing: border-box;"
                >
                  <span>${s.cta}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
