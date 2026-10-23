import { PRODUCTS } from '../data/products.js';

export function renderSearchModal() {
  return `
    <div class="search-modal" id="search-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Search Catalog">
      <div class="search-modal__box">
        <div class="search-modal__header">
          <svg class="search-modal__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input 
            type="search" 
            class="search-modal__input" 
            id="search-input" 
            placeholder="Search suds, scrubs, scents or ingredients..."
            autocomplete="off"
            aria-label="Search suds, scrubs, scents or ingredients"
          >
          <button class="search-modal__close" id="search-modal-close" aria-label="Close Search">✕</button>
        </div>

        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--sg-gray-600); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.05em;" id="search-meta">
          Popular searches: <button class="quick-tag" data-search-term="Righteous Butter" style="background:none; border:none; text-decoration:underline; font-weight:700; cursor:pointer;">The Righteous Butter</button>, <button class="quick-tag" data-search-term="Clean On Me" style="background:none; border:none; text-decoration:underline; font-weight:700; cursor:pointer;">Clean On Me</button>, <button class="quick-tag" data-search-term="Mother Pucker" style="background:none; border:none; text-decoration:underline; font-weight:700; cursor:pointer;">Mother Pucker</button>
        </div>

        <div class="search-results-list" id="search-results-list">
          <!-- Populated dynamically via JS -->
        </div>
      </div>
    </div>
  `;
}
