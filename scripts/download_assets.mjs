import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const assets = [
  // Brand Logo
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/cropped-Soap-and-Glory-Logo.png',
    dest: 'public/images/brand/soap-and-glory-logo.png'
  },
  // Products from shop UK
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Body-Butter-1.webp',
    dest: 'public/images/products/the-righteous-butter.webp'
  },
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Body-Wash-1024x1024.webp',
    dest: 'public/images/products/clean-on-me-body-wash.webp'
  },
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Body-Scrubs.webp',
    dest: 'public/images/products/the-scrub-of-your-life.webp'
  },
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Pumping-Lip-Gloss.webp',
    dest: 'public/images/products/sexy-mother-pucker-gloss.webp'
  },
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Mascara.webp',
    dest: 'public/images/products/thick-and-fast-mascara.webp'
  },
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Clear-Skin.webp',
    dest: 'public/images/products/face-soap-and-clarity.webp'
  },
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Hydrate.webp',
    dest: 'public/images/products/speed-plump-hydrating-lotion.webp'
  },
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Face-Masks.webp',
    dest: 'public/images/products/puffy-eye-attack-patches.webp'
  },
  {
    url: 'https://soapandgloryshop.co.uk/wp-content/uploads/2026/01/Cleanse.webp',
    dest: 'public/images/products/peaches-and-clean-cleanser.webp'
  },
  // Products from glory.net
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Hand-Food-Hand-Cream.webp',
    dest: 'public/images/products/hand-food-hand-cream.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Heel-Genius-Moisturizing-Foot-Cream-1.webp',
    dest: 'public/images/products/heel-genius-foot-cream.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Original-Pink-Moisturizing-Body-Lotion-Pump-1024x1024.webp',
    dest: 'public/images/products/the-righteous-butter-lotion.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Call-Of-Fruity-Exfoliating-Body-Scrub.webp',
    dest: 'public/images/products/call-of-fruity-scrub.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Call-of-Fruity-Vegan-Body-Lotion.webp',
    dest: 'public/images/products/call-of-fruity-body-lotion.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Smoothie-Star-Body-Lotion-for-Women.webp',
    dest: 'public/images/products/smoothie-star-body-lotion.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Simply-The-Boost-Body-Yogurt.webp',
    dest: 'public/images/products/simply-the-boost-body-yogurt.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Magnificoco-Buff-and-Ready-Coconut-Body-Scrub.webp',
    dest: 'public/images/products/magnificoco-body-scrub.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Magnifi-Coco-Body-Lotion-for-Women-1024x1024.webp',
    dest: 'public/images/products/magnificoco-body-lotion.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Peach-Please-Scented-Body-Wash.webp',
    dest: 'public/images/products/peach-please-body-wash.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Sexy-Mother-Pucker-XXL-Lip-Plumper-Gloss-1024x1024.webp',
    dest: 'public/images/products/sexy-mother-pucker-xxl.webp'
  },
  {
    url: 'https://soapandglory.net/wp-content/uploads/2025/12/Soap-Glory-Bright-Beautiful-Brightening-Sheet-Face-Mask.webp',
    dest: 'public/images/products/bright-beautiful-sheet-mask.webp'
  }
];

async function download() {
  for (const item of assets) {
    const fullPath = path.resolve(rootDir, item.dest);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    try {
      console.log(`Downloading ${item.url} -> ${item.dest}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${item.url}: HTTP ${res.status}`);
        continue;
      }
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(fullPath, Buffer.from(arrayBuffer));
      console.log(`Saved ${item.dest} (${arrayBuffer.byteLength} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${item.url}:`, err.message);
    }
  }
  console.log('Asset download completed.');
}

download();
