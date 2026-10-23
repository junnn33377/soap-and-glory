export function renderRoutineBuilder() {
  return `
    <section class="section section--tinted" id="routine-finder" aria-label="Routine Builder">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span>✨</span>
            <span>EASY 3-STEP ROUTINE</span>
          </div>
          <h2 class="section-title">Build Your Custom Routine</h2>
          <p class="section-subtitle">
            Not sure what to try first? Answer two quick questions to find your perfect Wash, Scrub & Butter routine.
          </p>
        </div>

        <div class="routine-finder" id="routine-interactive-box">
          <!-- Step Indicators -->
          <div class="routine-steps-indicator">
            <div class="routine-step-pill is-active" id="step-pill-1">
              <span class="step-num">1</span>
              <span>Pick Your Skin Goal</span>
            </div>
            <span style="color: var(--sg-gray-300);">→</span>
            <div class="routine-step-pill" id="step-pill-2">
              <span class="step-num">2</span>
              <span>Choose Your Scent Vibe</span>
            </div>
            <span style="color: var(--sg-gray-300);">→</span>
            <div class="routine-step-pill" id="step-pill-3">
              <span class="step-num">3</span>
              <span>Your Custom 3-Step Routine</span>
            </div>
          </div>

          <!-- Step 1: Skin Goal -->
          <div class="routine-step-content" id="routine-step-1">
            <h3 style="text-align: center; font-size: var(--text-lg); margin-bottom: 20px;">
              What does your skin need most today?
            </h3>
            <div class="routine-options-grid">
              <div class="routine-option-card is-selected" data-routine-goal="moisture">
                <div class="routine-option-icon">💧</div>
                <div class="routine-option-title">72-Hour Moisture</div>
                <div class="routine-option-desc">Deep hydration for dry, tight skin.</div>
              </div>
              <div class="routine-option-card" data-routine-goal="glow">
                <div class="routine-option-icon">✨</div>
                <div class="routine-option-title">Smooth Polish & Glow</div>
                <div class="routine-option-desc">Buff away dry spots for silky skin.</div>
              </div>
              <div class="routine-option-card" data-routine-goal="gourmand">
                <div class="routine-option-icon">🍯</div>
                <div class="routine-option-title">Warm & Sweet Pampering</div>
                <div class="routine-option-desc">Rich almond, honey, and vanilla comfort.</div>
              </div>
              <div class="routine-option-card" data-routine-goal="tropical">
                <div class="routine-option-icon">🥭</div>
                <div class="routine-option-title">Tropical Vacation Vibe</div>
                <div class="routine-option-desc">Juicy mango and fresh coconut water.</div>
              </div>
            </div>
            <div style="text-align: center;">
              <button class="btn btn--primary btn--md" id="routine-next-1">
                Next: Choose Scent Vibe →
              </button>
            </div>
          </div>

          <!-- Step 2: Scent Choice -->
          <div class="routine-step-content" id="routine-step-2" style="display: none;">
            <h3 style="text-align: center; font-size: var(--text-lg); margin-bottom: 20px;">
              Which scent do you love most?
            </h3>
            <div class="routine-options-grid">
              <div class="routine-option-card is-selected" data-routine-scent="original-pink">
                <div class="routine-option-icon">🌹</div>
                <div class="routine-option-title">Original Pink™</div>
                <div class="routine-option-desc">Fresh rose, bergamot, and warm sandalwood.</div>
              </div>
              <div class="routine-option-card" data-routine-scent="smoothie-star">
                <div class="routine-option-icon">🌰</div>
                <div class="routine-option-title">Smoothie Star™</div>
                <div class="routine-option-desc">Sweet almond, honey, and cocoa butter.</div>
              </div>
              <div class="routine-option-card" data-routine-scent="call-of-fruity">
                <div class="routine-option-icon">🌺</div>
                <div class="routine-option-title">Call of Fruity™</div>
                <div class="routine-option-desc">Ripe mango, passionfruit, and coconut.</div>
              </div>
              <div class="routine-option-card" data-routine-scent="magnificoco">
                <div class="routine-option-icon">🥥</div>
                <div class="routine-option-title">Magnificoco™</div>
                <div class="routine-option-desc">Crisp green apple, coconut, and green tea.</div>
              </div>
            </div>
            <div style="display: flex; justify-content: center; gap: 16px;">
              <button class="btn btn--outline btn--md" id="routine-prev-2">
                ← Back
              </button>
              <button class="btn btn--primary btn--md" id="routine-next-2">
                Reveal My 3-Step Routine →
              </button>
            </div>
          </div>

          <!-- Step 3: Bundle Result -->
          <div class="routine-step-content" id="routine-step-3" style="display: none;">
            <div style="text-align: center; max-width: 600px; margin: 0 auto 24px;">
              <span class="badge-stamp badge-stamp--pink" style="margin-bottom: 8px;">PERFECT MATCH</span>
              <h3 style="font-size: var(--text-xl); font-weight: 900; margin-bottom: 6px;">
                Your Custom 3-Step Routine
              </h3>
              <p style="color: var(--sg-gray-600); font-size: var(--text-sm);">
                Wash, scrub, and moisturize for soft, glowing skin every day.
              </p>
            </div>

            <div class="routine-results-tray" id="routine-bundle-tray">
              <!-- Dynamically populated via JS -->
            </div>

            <div style="margin-top: 28px; background: var(--sg-ivory); border: 2px dashed var(--sg-pink); border-radius: var(--radius-md); padding: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
              <div>
                <div style="font-size: var(--text-sm); font-weight: 800; text-transform: uppercase;">Complete 3-Step Routine Price</div>
                <div style="font-size: var(--text-xl); font-weight: 900; color: var(--sg-pink);">
                  £24.97 ($32.46) <span style="font-size: var(--text-xs); color: var(--sg-gray-600); font-weight: 600;">(Qualifies for FREE UK Delivery & Free Mini)</span>
                </div>
              </div>
              <div style="display: flex; gap: 12px;">
                <button class="btn btn--outline btn--sm" id="routine-reset-btn">Change Options</button>
                <button class="btn btn--primary btn--md" id="routine-add-all-btn">
                  Buy Routine on Amazon ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
