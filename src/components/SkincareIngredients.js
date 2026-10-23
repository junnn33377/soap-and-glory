export function renderSkincareIngredients() {
  const actives = [
    {
      icon: '🍊',
      name: 'Stabilized Vitamin C & Yuzu',
      role: 'Radiance & Antioxidant Protection',
      desc: '3-O-Ethyl Ascorbic Acid delivers potent brightening without irritation. Combined with vitamin-rich Japanese Yuzu citrus to awaken fatigued, dull complexions.',
      foundIn: 'Face Soap & Clarity™, Bright + Beautiful™'
    },
    {
      icon: '🌿',
      name: 'Salicylic Acid (BHA) & Witch Hazel',
      role: 'Pore Clarifying & Sebum Control',
      desc: 'Oil-soluble beta-hydroxy acid that dissolves trapped sebum and dead skin cells inside congested pores, while natural witch hazel tightens skin without drying.',
      foundIn: 'The Fab Pore™ Foam, Scrub Your Nose In It™'
    },
    {
      icon: '🍑',
      name: 'Peach, Ginseng & Jojoba Oils',
      role: 'Lipid Barrier Pampering & Makeup Melt',
      desc: 'Rich in essential fatty acids and botanical antioxidants that dissolve long-wear foundation and waterproof mascara in seconds, rinsing clean without greasy residue.',
      foundIn: 'Peaches and Clean™ Milk'
    },
    {
      icon: '💧',
      name: 'Multi-Weight Hyaluronic Acid',
      role: '24-Hour Deep Hydration Plump',
      desc: 'Dual-weight hyaluronic molecules hydrate the skin surface while penetrating deeper epidermal layers for a bouncy, supple, glass-skin finish.',
      foundIn: 'Speed Plump™ Day Lotion'
    },
    {
      icon: '🥒',
      name: 'Cucumber Juice & Peptides',
      role: 'Under-Eye De-Puffing & Dark Circles',
      desc: 'Cooling cucumber enzymes paired with firming Acetyl Tetrapeptide-5 to stimulate microcirculation, calm morning fluid retention, and smooth fine lines.',
      foundIn: 'Puffy Eye Attack™ Patches'
    },
    {
      icon: '🏺',
      name: 'Kaolin Micromud & Lactic Acid',
      role: 'Resurfacing & Texture Reset',
      desc: 'Natural mineral clay draws out deep-set blackheads while gentle alpha-hydroxy Lactic Acid dissolves dull surface cells in under 2 minutes.',
      foundIn: 'Scrub In The Fast Lane™, Scrub Your Nose In It™'
    }
  ];

  return `
    <section class="section section--white" id="ingredients-spotlight" aria-label="Active Ingredients Spotlight">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>🔬</span>
            <span>DERMATOLOGICALLY TESTED FORMULAS</span>
          </div>
          <h2 class="section-title">Active Skincare Ingredients: Vitamin C, BHA and Hyaluronic Acid</h2>
          <p class="section-subtitle">
            Playful British design on the outside. Serious, dermatologically vetted active ingredients on the inside powering every Soap &amp; Glory face wash and skincare hero.
          </p>
        </div>

        <!-- Ingredients Grid -->
        <div class="ingredients-grid">
          ${actives.map(act => `
            <div class="ingredient-card">
              <div class="ingredient-card__header">
                <span class="ingredient-icon">${act.icon}</span>
                <div>
                  <h3 class="ingredient-name">${act.name}</h3>
                  <div class="ingredient-role">${act.role}</div>
                </div>
              </div>
              <p class="ingredient-desc">${act.desc}</p>
              <div class="ingredient-found">
                <span class="ingredient-found__label">Formulated in:</span>
                <strong>${act.foundIn}</strong>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
