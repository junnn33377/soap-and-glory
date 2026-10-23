# Soap & Glory Web Engineering & Affiliate Quality Assurance Standards

> **Document Version:** 1.0.0  
> **Last Verified:** October 2026  
> **Scope:** Entire Soap & Glory Web Application (Catalog, Product Modals, Routines, Landing Pages)  
> **Status:** STRICT PRODUCTION MANDATE  

---

## 1. Executive Summary & Purpose

This standard was established to eliminate errors across affiliate links, product imagery, heading typography, and layout responsiveness. Whenever new pages, components, or product entries are created, they **must strictly comply** with this document.

### Core Non-Negotiable Directives:
1. **NEVER use Amazon Search URLs (`/s?k=...`):** Every product button or link MUST resolve directly to an active, specific Product Detail Page (`https://www.amazon.com/dp/<ASIN>?tag=soapnglory-20`).
2. **ZERO Broken Links or 404s:** Soft-404 pages (including Amazon's "Dogs of Amazon" error pages) are strictly prohibited and automatically caught by our test suite.
3. **100% Visual & Specification Matching:** The product packaging photo, milliliter/gram volume, product name, and format on our website MUST match the exact Amazon listing.
4. **Strict Heading Ampersand Rule:** There must be **at most ONE ampersand (`&`)** in any heading, strictly reserved for the brand name `Soap & Glory`. Any other conjunctions in the title must use "and", commas, or slashes.
5. **Mandatory Automated Pre-Flight Check:** `python3 scripts/verify_amazon_links.py` must run and exit with code `0` before any changes are committed or deployed.

---

## 2. Issues Log, Root Causes & Prevention Guidelines

### Issue 1: Generic Search URLs Used Instead of Direct Product Pages
- **Symptom:** User clicked "Buy on Amazon ↗" and was taken to `amazon.co.uk/s?k=Soap+and+Glory+Face+Soap+and+Clarity` showing unrelated search listings, competitor ads, and sponsored products.
- **Root Cause:** When older UK ASINs returned 404, generic search links were implemented as a fallback instead of identifying active canonical ASINs.
- **Prevention Rule:** **NEVER write `/s?k=` anywhere in the codebase.** If a product ASIN becomes inactive, locate the live active ASIN or direct official storefront catalog link. Search URLs degrade user conversion and trust.

### Issue 2: "Dogs of Amazon" Soft 404s Disguised as HTTP 200
- **Symptom:** An ASIN returned HTTP status 200 via simple curl headers, but rendering it in a browser showed the Amazon dog image with "Sorry! We couldn't find that page".
- **Root Cause:** Amazon often returns soft-404 error pages (`/dogsofamazon`) with HTTP status 200 for delisted items.
- **Prevention Rule:** The automated test script (`scripts/verify_amazon_links.py`) inspects the response body for `dogsofamazon` and `title._TTD_.png` and verifies the actual `<title>` / `productTitle` string to confirm the listing is live.

### Issue 3: Image Packaging & Volume Discrepancy
- **Symptom:** The product was listed as "Face Soap & Clarity 350ml jumbo pump", but the image displayed a 50ml travel squeeze tube.
- **Root Cause:** Placeholder assets were created without verifying that the package format and volume matched the catalog specification.
- **Prevention Rule:** Every product image must depict the exact packaging variant being sold:
  - Jumbo bottles must show pumps (e.g., 350ml Face Soap & Clarity, 500ml Clean On Me).
  - Tubs must show tubs (e.g., 300ml Righteous Butter, 300ml Flake Away).
  - Tubes must show tubes (e.g., 200ml Scrub Of Your Life, 125ml Hand Food).

### Issue 4: ASIN Scrambling Across Product Catalog
- **Symptom:** Clicking "Thick & Fast Mascara" redirected to Magnifi-Coco Body Lotion; clicking "Hand Food" redirected to a facial steamer.
- **Root Cause:** Bulk ASIN assignments from external databases without 1-to-1 canonical title validation.
- **Prevention Rule:** Every ASIN is verified against its `<span id="productTitle">` or canonical metadata using our QA script before inclusion in `src/data/products.js`.

### Issue 5: Duplicate Ampersands in Headings
- **Symptom:** Headings read: `Soap & Glory Face Wash, Cleansers & Skincare` or `Soap & Glory ... & Glow`.
- **Root Cause:** Neglecting typographic consistency when inserting secondary conjunctions into templates that already contain the brand name `Soap & Glory`.
- **Prevention Rule:**
  - **Forbidden:** `Soap & Glory Face Wash & Skincare`
  - **Required:** `Soap & Glory Face Wash, Clarity, Skincare` or `Soap & Glory Face Wash, Cleansers and Skincare`
  - The brand name `Soap & Glory` holds the only allowed ampersand.

### Issue 6: Mobile Button Flex & Metric Wrap Breakage
- **Symptom:** On mobile (375px), hero trust metrics and CTA buttons wrapped onto awkward three-line fragments.
- **Root Cause:** Using unconstrained flex containers with `flex-wrap: wrap` without explicit minimum touch-target boundaries and `white-space: nowrap` where appropriate.
- **Prevention Rule:** All primary CTA buttons use explicit minimum heights (`44px`–`48px`), flexbox centering, and responsive padding.

---

## 3. Verified Master Product Catalog (All 23 Products)

| # | Product ID | Full Name | Size | Image Path | Active Verified ASIN | Direct Canonical URL | HTTP Status |
|---|---|---|---|---|---|---|---|
| 01 | `righteous-butter-300ml` | The Righteous Butter™ Body Butter | 300ml Tub | `/images/products/the-righteous-butter.webp` | `B01MSHIMSR` | `https://www.amazon.com/dp/B01MSHIMSR?tag=soapnglory-20` | 200 OK |
| 02 | `clean-on-me-500ml` | Clean On Me™ Clarifying Body Wash | 500ml Pump | `/images/products/clean-on-me-body-wash.webp` | `B016UKRDZ8` | `https://www.amazon.com/dp/B016UKRDZ8?tag=soapnglory-20` | 200 OK |
| 03 | `scrub-of-your-life-200ml` | The Scrub Of Your Life™ Body Buffer | 200ml Tube | `/images/products/the-scrub-of-your-life.webp` | `B0CTS4V6RP` | `https://www.amazon.com/dp/B0CTS4V6RP?tag=soapnglory-20` | 200 OK |
| 04 | `flake-away-300ml` | Flake Away™ Body Polish | 300ml Tub | `/images/products/flake-away-body-polish.jpg` | `B010FJ2WQA` | `https://www.amazon.com/dp/B010FJ2WQA?tag=soapnglory-20` | 200 OK |
| 05 | `hand-food-125ml` | Hand Food™ Hand Cream | 125ml Tube | `/images/products/hand-food-hand-cream.webp` | `B07NF6416M` | `https://www.amazon.com/dp/B07NF6416M?tag=soapnglory-20` | 200 OK |
| 06 | `heel-genius-125ml` | Heel Genius™ Foot Cream | 125ml Tube | `/images/products/heel-genius-foot-cream.webp` | `B092WFQ3TZ` | `https://www.amazon.com/dp/B092WFQ3TZ?tag=soapnglory-20` | 200 OK |
| 07 | `smoothie-star-lotion-500ml` | Smoothie Star™ Body Lotion | 500ml Pump | `/images/products/smoothie-star-body-lotion.webp` | `B0B98ZMFJN` | `https://www.amazon.com/dp/B0B98ZMFJN?tag=soapnglory-20` | 200 OK |
| 08 | `smoothie-star-scrub-300ml` | Smoothie Star™ Breakfast Scrub | 300ml Tub | `/images/products/smoothie-star-breakfast-scrub.jpg` | `B014MI18JM` | `https://www.amazon.com/dp/B014MI18JM?tag=soapnglory-20` | 200 OK |
| 09 | `call-of-fruity-lotion-500ml` | Call of Fruity™ Body Lotion | 500ml Pump | `/images/products/call-of-fruity-body-lotion.webp` | `B09P1LGR5J` | `https://www.amazon.com/dp/B09P1LGR5J?tag=soapnglory-20` | 200 OK |
| 10 | `call-of-fruity-scrub-300ml` | Call of Fruity™ Body Scrub | 300ml Tub | `/images/products/call-of-fruity-scrub.webp` | `B07NRSSY7T` | `https://www.amazon.com/dp/B07NRSSY7T?tag=soapnglory-20` | 200 OK |
| 11 | `magnificoco-lotion-500ml` | Magnificoco™ Body Lotion | 500ml Pump | `/images/products/magnificoco-body-lotion.webp` | `B0B98P9WTT` | `https://www.amazon.com/dp/B0B98P9WTT?tag=soapnglory-20` | 200 OK |
| 12 | `magnificoco-wash-500ml` | Magnificoco™ Body Wash | 500ml Pump | `/images/products/clean-on-me-body-wash.webp` | `B0B98ZNQYC` | `https://www.amazon.com/dp/B0B98ZNQYC?tag=soapnglory-20` | 200 OK |
| 13 | `sexy-mother-pucker-xxl` | Sexy Mother Pucker™ Pillow Plump XXL | 10ml Tube | `/images/products/sexy-mother-pucker-xxl.webp` | `B00Y5U9B3I` | `https://www.amazon.com/dp/B00Y5U9B3I?tag=soapnglory-20` | 200 OK |
| 14 | `thick-and-fast-mascara` | Thick & Fast™ Mascara | 10ml Tube | `/images/products/thick-and-fast-mascara.webp` | `B0845PN8F5` | `https://www.amazon.com/dp/B0845PN8F5?tag=soapnglory-20` | 200 OK |
| 15 | `birthday-box-gift-set` | The Birthday Box™ Star Gift Set | 5-Piece Tin | `/images/products/birthday-box-gift-set.jpg` | `B006L68WBQ` | `https://www.amazon.com/dp/B006L68WBQ?tag=soapnglory-20` | 200 OK |
| 16 | `face-soap-and-clarity` | Face Soap & Clarity™ 3-in-1 Wash | 350ml Pump | `/images/products/face-soap-and-clarity.webp` | `B00X629R2G` | `https://www.amazon.com/dp/B00X629R2G?tag=soapnglory-20` | 200 OK |
| 17 | `peaches-and-clean` | Peaches and Clean™ Cleansing Milk | 350ml Pump | `/images/products/peaches-and-clean-cleanser.webp` | `B00X629W4O` | `https://www.amazon.com/dp/B00X629W4O?tag=soapnglory-20` | 200 OK |
| 18 | `speed-plump-hydrating-lotion` | Speed Plump™ Day Lotion | 50ml Pump | `/images/products/speed-plump-hydrating-lotion.webp` | `B096H452H9` | `https://www.amazon.com/dp/B096H452H9?tag=soapnglory-20` | 200 OK |
| 19 | `bright-beautiful-sheet-mask` | Bright + Beautiful™ Sheet Mask | 29g Sachet | `/images/products/bright-beautiful-sheet-mask.webp` | `B074L4LMNC` | `https://www.amazon.com/dp/B074L4LMNC?tag=soapnglory-20` | 200 OK |
| 20 | `puffy-eye-attack-patches` | Puffy Eye Attack™ Patches | 3g Hydrogel | `/images/products/puffy-eye-attack-patches.webp` | `B078WHGJSJ` | `https://www.amazon.com/dp/B078WHGJSJ?tag=soapnglory-20` | 200 OK |
| 21 | `the-fab-pore-cleanser` | The Fab Pore™ Foam Cleanser | 200ml Pump | `/images/products/the-fab-pore-cleanser.jpg` | `B01EAMU08A` | `https://www.amazon.com/dp/B01EAMU08A?tag=soapnglory-20` | 200 OK |
| 22 | `scrub-in-the-fast-lane` | Scrub In The Fast Lane™ Facial Polish | 75ml Tube | `/images/products/scrub-in-the-fast-lane.jpg` | `B08CS4J41H` | `https://www.amazon.com/dp/B08CS4J41H?tag=soapnglory-20` | 200 OK |
| 23 | `scrub-your-nose-in-it` | Scrub Your Nose In It™ 2-in-1 Scrub | 100ml Tube | `/images/products/scrub-your-nose-in-it.jpg` | `B00EYG6ZDC` | `https://www.amazon.com/dp/B00EYG6ZDC?tag=soapnglory-20` | 200 OK |

---

## 4. Pre-Launch QA Checklist for Future Pages

Before creating any new page (e.g. `bodycare.html`, `fragrances.html`, `makeup.html`), follow this exact protocol:

- [ ] **1. Run the Automated Link Verification Suite:**
  ```bash
  python3 scripts/verify_amazon_links.py
  ```
  Must output `ALL PRODUCT LINKS & IMAGES PASSED QA VERIFICATION!` with `0 Errors`.
- [ ] **2. Search URL Audit:**
  ```bash
  grep -rn "/s?k=" src/
  ```
  Must return empty. No search query links are permitted.
- [ ] **3. Ampersand Typography Audit:**
  Review all `<h1>`, `<h2>`, and `<h3>` tags. Verify there is at most **ONE `&`** per heading (exclusively in `Soap & Glory`).
- [ ] **4. Image File Verification:**
  Every product `image` attribute in `src/data/products.js` must exist on disk under `public/` and display the exact package format (pump, tub, tube, sachet).
- [ ] **5. Shared Header Component:**
  All pages must use the shared `renderHeader()` function from `src/components/Header.js` to guarantee consistent navigation, active search modal, and screen-reader accessibility.
- [ ] **6. Production Bundle Build Test:**
  ```bash
  npm run build
  ```
  Must compile cleanly without Vite/Rollup errors.
