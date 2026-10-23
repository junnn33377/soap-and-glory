import './styles/index.css';
import { store } from './state.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderPDPModal } from './components/PDPModal.js';
import { renderSearchModal } from './components/SearchModal.js';

function initAboutApp() {
  const root = document.getElementById('about-app');
  if (!root) return;

  root.innerHTML = `
    <!-- Header Notification Bar -->
    <div class="announcement-bar" role="region" aria-label="Brand Story">
      <div class="container announcement-bar__content">
        <span class="announcement-bar__badge">OUR STORY</span>
        <p class="announcement-bar__text">
          Bringing Cheekiness, British Fine Perfumery &amp; Serious Skincare Since 2006. 🇬🇧
        </p>
        <button class="announcement-bar__close" id="announcement-close" aria-label="Dismiss announcement">✕</button>
      </div>
    </div>

    <div id="about-header-mount"></div>

    <main id="main-content">
      <!-- Hero Section -->
      <section class="makeup-hero" id="about-hero" aria-label="About Soap & Glory">
        <div class="container">
          <div class="makeup-hero__grid">
            <div class="makeup-hero__content">
              <div class="hero-eyebrow" style="margin-bottom: 14px;">
                <span>🇬🇧</span>
                <span>EST. 2006 · LONDON SOHO ORIGINS · NO7 BEAUTY CO.</span>
              </div>

              <!-- Perfectly Aligned Brand Link & Title -->
              <h1 class="makeup-hero__title" style="margin-bottom: 12px;">
                <a href="/" class="brand-title-link" title="Return to Soap & Glory Homepage">SOAP &amp; GLORY</a>
                <span class="info-hero__subtitle">OUR STORY</span>
              </h1>

              <div class="makeup-hero__tagline">
                WHERE THERE IS LESS, <span class="highlight-pink">WE ADD MORE.</span>
              </div>

              <p class="makeup-hero__description" style="font-size: var(--text-base); color: var(--sg-gray-700); line-height: 1.65; max-width: 540px; margin-bottom: 22px;">
                At <a href="/" class="brand-link" style="color: var(--sg-pink-dark); font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a>, we burst onto the London beauty scene in 2006 with a simple, delightfully cheeky belief: beauty should never take itself too seriously. We combine authentic British humour and iconic vintage packaging with heavyweight active ingredients, scientifically proven results, and fine prestige fragrances. The result? Glorious skin without the pretentious price tag.
              </p>

              <div class="makeup-hero__badges" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 26px;">
                <span class="badge-stamp badge-stamp--pink" style="padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                  🐰 100% LEAPING BUNNY APPROVED
                </span>
                <span class="badge-stamp" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                  👑 NO7 BEAUTY COMPANY FAMILY
                </span>
                <span class="badge-stamp" style="background: #fdf2f8; color: #be185d; border: 1px solid #fbcfe8; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                  🧪 72-HOUR CLINICAL HYDRATION
                </span>
              </div>

              <div class="makeup-hero__cta-row" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <a 
                  href="#collections-showcase" 
                  class="btn btn--primary btn--md" 
                  style="white-space: nowrap; box-shadow: var(--shadow-pop); text-decoration: none; padding: 13px 22px; font-size: var(--text-sm);"
                >
                  Explore The 5 Collections ↓
                </a>
                <a 
                  href="/contact" 
                  class="btn btn--outline btn--md" 
                  style="white-space: nowrap; text-decoration: none; padding: 13px 22px; font-size: var(--text-sm);"
                >
                  Get In Touch 💌 →
                </a>
              </div>
            </div>

            <!-- Right Spotlight Card: Clean, Perfectly Centered & Aligned -->
            <div class="makeup-hero__visual" style="display: flex; justify-content: center; align-items: center;">
              <div class="makeup-hero__card" style="width: 100%; max-width: 390px; background: var(--sg-white); border: 2.5px solid var(--sg-black); border-radius: var(--radius-card); box-shadow: 6px 6px 0 var(--sg-black); padding: 22px; position: relative;">
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: var(--sg-gray-600); text-transform: uppercase; letter-spacing: 0.05em;">
                    HERITAGE SPOTLIGHT
                  </span>
                  <span style="background: var(--sg-pink); color: var(--sg-white); font-family: var(--font-display); font-weight: 900; font-size: 0.7rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; border: 1.5px solid var(--sg-black);">
                    72-HR HYDRATION
                  </span>
                </div>

                <div style="background: radial-gradient(circle at center, #FFF0F5 0%, #FFFFFF 100%); border: 1.5px solid #fbcfe8; border-radius: var(--radius-md); padding: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; min-height: 200px;">
                  <img 
                    src="/images/products/the-righteous-butter.webp" 
                    alt="Soap & Glory The Righteous Butter Body Butter" 
                    style="max-height: 175px; width: auto; object-fit: contain; filter: drop-shadow(0 8px 14px rgba(0,0,0,0.12));"
                    width="200" 
                    height="175"
                  >
                </div>

                <div>
                  <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 900; text-transform: uppercase; margin: 0 0 6px 0; color: var(--sg-black);">
                    The Righteous Butter™
                  </h3>
                  <p style="font-size: 0.85rem; color: var(--sg-gray-600); line-height: 1.5; margin-bottom: 12px;">
                    Scientifically proven to hydrate skin for a full 72 hours. Packed with cold-pressed shea butter, aloe vera, and our iconic Original Pink™ rose &amp; bergamot fragrance.
                  </p>
                  
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.78rem; font-weight: 800; color: var(--sg-pink-dark); margin-bottom: 14px;">
                    <span>Over 10 Million Tubs Sold</span>
                    <span>★★★★★ 4.9</span>
                  </div>

                  <a 
                    href="/bath-body" 
                    class="btn btn--outline btn--sm" 
                    style="width: 100%; justify-content: center; text-decoration: none; display: flex; font-size: 0.82rem; font-weight: 800; border-width: 2px;"
                  >
                    Explore Bath &amp; Body Range ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Brand Philosophy Quote Banner -->
      <section style="background: var(--sg-black); color: var(--sg-white); padding: clamp(36px, 5vw, 56px) 0; border-bottom: 3px solid var(--sg-pink);">
        <div class="container" style="max-width: 860px; text-align: center;">
          <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sg-pink); display: block; margin-bottom: 14px;">
            ★ THE SOAP &amp; GLORY MANIFESTO ★
          </span>
          <blockquote style="margin: 0 0 16px 0; font-family: var(--font-display); font-size: clamp(1.2rem, 2.2vw, 1.65rem); font-weight: 900; line-height: 1.4; text-transform: uppercase; letter-spacing: -0.01em;">
            "We understand that everyone is multifaceted, from <span style="color: var(--sg-pink);">'I just ran a marathon'</span> to <span style="color: var(--sg-pink);">'I just marathoned Netflix in my pyjamas.'</span> In a world that likes neat little boxes, we celebrate something richer: a joyous jumble of juxtapositions."
          </blockquote>
          <p style="font-size: 0.9rem; color: #d1d5db; margin: 0; font-style: italic;">
            — Official Philosophy, <a href="https://www.no7company.com/our-brands/soap-and-glory" target="_blank" rel="noopener noreferrer" style="color: #fbcfe8; text-decoration: underline;">No7 Beauty Company Brand Charter</a>
          </p>
        </div>
      </section>

      <!-- All 5 Collections Showcase (Internal Linking to built pages) -->
      <section class="section section--white" id="collections-showcase" style="border-bottom: 3px solid var(--sg-black);">
        <div class="container">
          <div class="section-header" style="text-align: center; max-width: 700px; margin: 0 auto 40px auto;">
            <div class="section-eyebrow" style="color: var(--sg-pink);">
              <span>🛍️</span>
              <span>TOP-TO-TOE BEAUTY</span>
            </div>
            <h2 class="section-title">Explore Our 5 Glorious Collections</h2>
            <p class="section-subtitle">
              From our famous bath bubbles to dermatologically formulated facial cleansers and buzzing lip plumpers, browse each dedicated world of <a href="/" style="color: var(--sg-pink); font-weight: 700;">Soap &amp; Glory</a>.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
            <!-- Category 1: Bath & Body -->
            <a href="/bath-body" class="collection-card" title="Shop Bath & Body Collection">
              <div class="collection-card__img-wrap">
                <img 
                  src="/images/products/the-righteous-butter.webp" 
                  alt="The Righteous Butter Body Butter" 
                  class="collection-card__img"
                  width="130" 
                  height="145"
                >
                <span style="position: absolute; bottom: 8px; left: 8px; background: var(--sg-black); color: var(--sg-white); font-family: var(--font-display); font-size: 0.68rem; font-weight: 900; padding: 2px 8px; border-radius: 4px;">
                  THE ORIGINALS
                </span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin: 0 0 6px 0;">
                Bath &amp; Body
              </h3>
              <p style="font-size: 0.85rem; color: var(--sg-gray-600); line-height: 1.45; margin-bottom: 14px; flex-grow: 1;">
                Iconic shower gels, skin-smoothing polishes (Flake Away™), and 72-hour moisture butters.
              </p>
              <span class="btn btn--sm btn--primary" style="width: 100%; justify-content: center; font-size: 0.8rem; pointer-events: none;">
                Shop Bath &amp; Body →
              </span>
            </a>

            <!-- Category 2: Skincare -->
            <a href="/skincare" class="collection-card" title="Shop Skincare Collection">
              <div class="collection-card__img-wrap">
                <img 
                  src="/images/products/face-soap-and-clarity.webp" 
                  alt="Face Soap & Clarity 3-in-1 Daily Face Wash" 
                  class="collection-card__img"
                  width="130" 
                  height="145"
                >
                <span style="position: absolute; bottom: 8px; left: 8px; background: var(--sg-pink); color: var(--sg-white); font-family: var(--font-display); font-size: 0.68rem; font-weight: 900; padding: 2px 8px; border-radius: 4px;">
                  3-IN-1 VITAMIN C
                </span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin: 0 0 6px 0;">
                Skincare &amp; Cleansers
              </h3>
              <p style="font-size: 0.85rem; color: var(--sg-gray-600); line-height: 1.45; margin-bottom: 14px; flex-grow: 1;">
                Dermatologically tested facial washes, double-cleanse balms, and Vitamin C clarifiers.
              </p>
              <span class="btn btn--sm btn--primary" style="width: 100%; justify-content: center; font-size: 0.8rem; pointer-events: none;">
                Shop Skincare →
              </span>
            </a>

            <!-- Category 3: Cosmetics & Lips -->
            <a href="/makeup" class="collection-card" title="Shop Cosmetics & Makeup">
              <div class="collection-card__img-wrap">
                <img 
                  src="/images/products/sexy-mother-pucker-xxl.webp" 
                  alt="Sexy Mother Pucker Lip Plumper" 
                  class="collection-card__img"
                  width="130" 
                  height="145"
                >
                <span style="position: absolute; bottom: 8px; left: 8px; background: #be185d; color: var(--sg-white); font-family: var(--font-display); font-size: 0.68rem; font-weight: 900; padding: 2px 8px; border-radius: 4px;">
                  LIP-SWELL™ BUZZ
                </span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin: 0 0 6px 0;">
                Cosmetics &amp; Lips
              </h3>
              <p style="font-size: 0.85rem; color: var(--sg-gray-600); line-height: 1.45; margin-bottom: 14px; flex-grow: 1;">
                Legendary Sexy Mother Pucker™ plumpers, Thick &amp; Fast™ mascaras, and pore-blurring powders.
              </p>
              <span class="btn btn--sm btn--primary" style="width: 100%; justify-content: center; font-size: 0.8rem; pointer-events: none;">
                Shop Makeup →
              </span>
            </a>

            <!-- Category 4: Fragrance Mists -->
            <a href="/fragrance" class="collection-card" title="Shop Fragrance Collection">
              <div class="collection-card__img-wrap">
                <img 
                  src="/images/products/original-pink-fragrance-spritz.jpg" 
                  alt="Original Pink Fragrance Spritz" 
                  class="collection-card__img"
                  width="130" 
                  height="145"
                >
                <span style="position: absolute; bottom: 8px; left: 8px; background: #047857; color: var(--sg-white); font-family: var(--font-display); font-size: 0.68rem; font-weight: 900; padding: 2px 8px; border-radius: 4px;">
                  FINE PERFUMERY
                </span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin: 0 0 6px 0;">
                Body Fragrance Mists
              </h3>
              <p style="font-size: 0.85rem; color: var(--sg-gray-600); line-height: 1.45; margin-bottom: 14px; flex-grow: 1;">
                Long-lasting body mists across 4 signature British fragrance families that evolve through the day.
              </p>
              <span class="btn btn--sm btn--primary" style="width: 100%; justify-content: center; font-size: 0.8rem; pointer-events: none;">
                Shop Fragrance →
              </span>
            </a>

            <!-- Category 5: Gifting & Star Gifts -->
            <a href="/gifting" class="collection-card" title="Shop Gifting & Star Gifts">
              <div class="collection-card__img-wrap">
                <img 
                  src="/images/products/pinkly-the-best-fragrance-set.jpg" 
                  alt="Pinkly The Best Gift Set" 
                  class="collection-card__img"
                  width="130" 
                  height="145"
                >
                <span style="position: absolute; bottom: 8px; left: 8px; background: #d97706; color: var(--sg-white); font-family: var(--font-display); font-size: 0.68rem; font-weight: 900; padding: 2px 8px; border-radius: 4px;">
                  KEEPSAKE TINS
                </span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin: 0 0 6px 0;">
                Gifting &amp; Sets
              </h3>
              <p style="font-size: 0.85rem; color: var(--sg-gray-600); line-height: 1.45; margin-bottom: 14px; flex-grow: 1;">
                Limited-edition Boots Star Gifts, reusable vintage vanity cases, and pocket pamper sets.
              </p>
              <span class="btn btn--sm btn--primary" style="width: 100%; justify-content: center; font-size: 0.8rem; pointer-events: none;">
                Shop Gifting →
              </span>
            </a>
          </div>
        </div>
      </section>

      <!-- The 4 Pillars Section -->
      <section class="section section--white" id="brand-pillars">
        <div class="container">
          <div class="section-header" style="text-align: center; max-width: 680px; margin: 0 auto 40px auto;">
            <div class="section-eyebrow" style="color: var(--sg-pink);">
              <span>💖</span>
              <span>HOW WE DO BEAUTY</span>
            </div>
            <h2 class="section-title">The Four Pillars Of Glory</h2>
            <p class="section-subtitle">
              From cosmetic science to social responsibility, here is what goes into every bottle, tub, and tube of <a href="/" style="color: var(--sg-pink); font-weight: 700;">Soap &amp; Glory</a>.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
            <!-- Pillar 1 -->
            <div class="info-card-panel">
              <div style="font-size: 2rem; margin-bottom: 12px;">🧪</div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin-bottom: 8px;">Heavyweight Actives &amp; 72-Hr Hydration</h3>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.6; margin: 0;">
                Behind the retro pin-up humor sits rigorous cosmetic science. From 72-hour scientifically proven moisture in <strong>The Righteous Butter™</strong> to super-tasking Vitamin C and fruit AHAs in our cleansers, our formulas deliver real, touchable results.
              </p>
            </div>

            <!-- Pillar 2 -->
            <div class="info-card-panel">
              <div style="font-size: 2rem; margin-bottom: 12px;">🌸</div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin-bottom: 8px;">Prestige British Perfumery</h3>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.6; margin: 0;">
                Our scents aren't flat candy perfumes. Crafted alongside master UK noses, each signature scent layers sparkling bergamot top notes, fresh florals, and warm sandalwood musks that evolve through your day and linger for 12+ hours.
              </p>
            </div>

            <!-- Pillar 3 -->
            <div class="info-card-panel">
              <div style="font-size: 2rem; margin-bottom: 12px;">🐰</div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin-bottom: 8px;">100% Leaping Bunny Approved</h3>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.6; margin: 0;">
                We never test on animals, anywhere in the world. Soap &amp; Glory is officially approved by Cruelty Free International under the strict <a href="https://www.veganfoodandliving.com/news/soap-glory-earns-cruelty-free-approval/" target="_blank" rel="noopener noreferrer" style="color: var(--sg-pink); font-weight: 700; text-decoration: underline;">Leaping Bunny Programme</a>—the gold standard in animal welfare.
              </p>
            </div>

            <!-- Pillar 4 -->
            <div class="info-card-panel">
              <div style="font-size: 2rem; margin-bottom: 12px;">🛁</div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin-bottom: 8px;">The Better Bathtime Initiative</h3>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.6; margin: 0;">
                Launched in 2019, our initiative champions everyone's right to be clean. We partner with local grassroots hygiene charities across countries where we operate to provide essential cleansing products and self-esteem to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Historical Timeline Section -->
      <section class="section" style="background: #FFF0F5; border-top: 3px solid var(--sg-black); border-bottom: 3px solid var(--sg-black);">
        <div class="container">
          <div class="section-header" style="text-align: center; max-width: 640px; margin: 0 auto 40px auto;">
            <div class="section-eyebrow" style="color: var(--sg-pink);">
              <span>📅</span>
              <span>HOW IT STARTED · HOW IT'S GOING</span>
            </div>
            <h2 class="section-title">Milestones In Bathtime History</h2>
          </div>

          <div style="max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
            <div style="background: var(--sg-white); border: 2px solid var(--sg-black); border-radius: var(--radius-md); padding: 20px 24px; box-shadow: 4px 4px 0 var(--sg-black);">
              <div style="font-family: var(--font-mono); font-weight: 900; color: var(--sg-pink); font-size: 0.95rem; margin-bottom: 4px;">2006 · Born in London's Soho</div>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); margin: 0; line-height: 1.5;">
                <a href="/" style="color: inherit; font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a> burst onto the UK beauty scene with The Righteous Butter™ and Clean On Me™, delivering luxury salon formulations with witty, tongue-in-cheek British humor.
              </p>
            </div>

            <div style="background: var(--sg-white); border: 2px solid var(--sg-black); border-radius: var(--radius-md); padding: 20px 24px; box-shadow: 4px 4px 0 var(--sg-black);">
              <div style="font-family: var(--font-mono); font-weight: 900; color: var(--sg-pink); font-size: 0.95rem; margin-bottom: 4px;">2007 · US Launch &amp; Global Expansion</div>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); margin: 0; line-height: 1.5;">
                A year later, Soap &amp; Glory debuted across the United States. Today, the brand's iconic pink tubs are cherished across 5 continents and stocked in Boots, Target, Ulta, and Amazon worldwide.
              </p>
            </div>

            <div style="background: var(--sg-white); border: 2px solid var(--sg-black); border-radius: var(--radius-md); padding: 20px 24px; box-shadow: 4px 4px 0 var(--sg-black);">
              <div style="font-family: var(--font-mono); font-weight: 900; color: var(--sg-pink); font-size: 0.95rem; margin-bottom: 4px;">2014 · Joining No7 Beauty Company</div>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); margin: 0; line-height: 1.5;">
                Soap &amp; Glory joined Walgreens Boots Alliance as a cornerstone of the prestigious <a href="https://www.no7company.com/our-brands/soap-and-glory" target="_blank" rel="noopener noreferrer" style="color: var(--sg-pink); font-weight: 700; text-decoration: underline;">No7 Beauty Company</a>, unlocking pharmaceutical-grade research while preserving its cheeky independent heart.
              </p>
            </div>

            <div style="background: var(--sg-white); border: 2px solid var(--sg-black); border-radius: var(--radius-md); padding: 20px 24px; box-shadow: 4px 4px 0 var(--sg-black);">
              <div style="font-family: var(--font-mono); font-weight: 900; color: var(--sg-pink); font-size: 0.95rem; margin-bottom: 4px;">2019 · The Better Bathtime Initiative</div>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); margin: 0; line-height: 1.5;">
                Launched community partnerships to provide hygiene essentials and dignity to vulnerable families, proving that giving back is at the core of feeling glorious.
              </p>
            </div>

            <div style="background: var(--sg-white); border: 2px solid var(--sg-black); border-radius: var(--radius-md); padding: 20px 24px; box-shadow: 4px 4px 0 var(--sg-black);">
              <div style="font-family: var(--font-mono); font-weight: 900; color: var(--sg-pink); font-size: 0.95rem; margin-bottom: 4px;">2021–2026 · Global Leaping Bunny Certification</div>
              <p style="font-size: 0.88rem; color: var(--sg-gray-700); margin: 0; line-height: 1.5;">
                Achieved comprehensive Leaping Bunny cruelty-free certification across our entire global portfolio, ensuring every cleanser, cream, and cosmetic is 100% cruelty-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Parent Company & Verification Strip -->
      <section class="section section--white">
        <div class="container" style="text-align: center; max-width: 720px; margin: 0 auto;">
          <h3 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 900; text-transform: uppercase; margin-bottom: 12px;">
            Part Of The No7 Beauty Company Family
          </h3>
          <p style="font-size: 0.92rem; color: var(--sg-gray-700); line-height: 1.6; margin-bottom: 24px;">
            <a href="/" style="color: inherit; font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a> proudly operates alongside iconic sister brands including No7, Liz Earle, and Botanics under the No7 Beauty Company (Walgreens Boots Alliance). Our headquarters are located at 1 Thane Road, Nottingham, UK.
          </p>
          <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
            <a 
              href="https://www.no7company.com/our-brands/soap-and-glory" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn--primary btn--md"
              style="text-decoration: none;"
            >
              Visit No7 Beauty Company Official Profile ↗
            </a>
            <a 
              href="https://www.veganfoodandliving.com/news/soap-glory-earns-cruelty-free-approval/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn--outline btn--md"
              style="text-decoration: none;"
            >
              Read Leaping Bunny Audit Article ↗
            </a>
          </div>
        </div>
      </section>
    </main>

    <div id="about-footer-mount"></div>

    <!-- Modals -->
    <div id="cart-drawer-mount"></div>
    <div id="pdp-modal-mount"></div>
    <div id="search-modal-mount"></div>
    <div class="toast-notice" id="toast-notice" role="status" aria-live="polite"></div>
  `;

  renderAllSections();
  bindEvents();
}

function renderAllSections() {
  document.getElementById('about-header-mount').innerHTML = renderHeader('about');
  document.getElementById('about-footer-mount').innerHTML = renderFooter();
  document.getElementById('cart-drawer-mount').innerHTML = renderCartDrawer();
  document.getElementById('search-modal-mount').innerHTML = renderSearchModal();
}

function bindEvents() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('#mobile-menu-open')) {
      document.getElementById('mobile-drawer')?.classList.add('is-open');
    }
    if (e.target.closest('#mobile-menu-close')) {
      document.getElementById('mobile-drawer')?.classList.remove('is-open');
    }
    if (e.target.closest('#announcement-close')) {
      e.target.closest('.announcement-bar').style.display = 'none';
    }
    if (e.target.closest('#cart-drawer-open')) {
      document.getElementById('cart-drawer')?.classList.add('is-open');
    }
    if (e.target.closest('#cart-drawer-close') || e.target.classList.contains('cart-drawer-backdrop')) {
      document.getElementById('cart-drawer')?.classList.remove('is-open');
    }
    if (e.target.closest('#search-open-btn')) {
      document.getElementById('search-modal')?.classList.add('is-open');
      document.getElementById('search-input')?.focus();
    }
    if (e.target.closest('#search-modal-close') || e.target.classList.contains('search-modal')) {
      document.getElementById('search-modal')?.classList.remove('is-open');
    }
  });
}

document.addEventListener('DOMContentLoaded', initAboutApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initAboutApp();
}
