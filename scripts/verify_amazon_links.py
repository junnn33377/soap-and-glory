#!/usr/bin/env python3
"""
Soap & Glory Automated Amazon Link & Image QA Verification Tool
Validates that:
1. Every product in src/data/products.js has a direct Amazon product page (/dp/<ASIN>).
2. No search query URLs (/s?k=) exist.
3. Every direct URL returns HTTP 200 and does NOT trigger the Amazon 'Dogs of Amazon' 404 page.
4. Every product image exists locally in the public/ directory.
"""

import sys
import os
import re
import urllib.request
import json

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    products_file = os.path.join(root_dir, 'src', 'data', 'products.js')

    if not os.path.exists(products_file):
        print(f"Error: {products_file} not found.")
        sys.exit(1)

    with open(products_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all product definitions
    product_blocks = re.findall(r"\{\s*id:\s*['\"]([^'\"]+)['\"].*?image:\s*['\"]([^'\"]+)['\"].*?amazonUrl:\s*['\"]([^'\"]+)['\"]", content, re.DOTALL)

    print("=" * 80)
    print(f"SOAP & GLORY QA AUDIT: {len(product_blocks)} Products Found")
    print("=" * 80)

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    errors = []
    warnings = []

    for idx, (pid, image, url) in enumerate(product_blocks, 1):
        print(f"[{idx:02d}/{len(product_blocks):02d}] Checking {pid}...")

        # 1. Search Query Check
        if '/s?k=' in url or 'search' in url.lower():
            errors.append(f"Product '{pid}' uses a forbidden search query URL: {url}")
            print(f"   [FAIL] Uses search query URL: {url}")
            continue

        # 2. Direct DP Check
        if '/dp/' not in url:
            warnings.append(f"Product '{pid}' URL does not contain /dp/: {url}")
            print(f"   [WARN] URL does not follow /dp/ format: {url}")

        # 3. Image file existence check
        local_img_path = os.path.join(root_dir, 'public' + image)
        if not os.path.exists(local_img_path):
            errors.append(f"Product '{pid}' image does not exist locally: {local_img_path}")
            print(f"   [FAIL] Missing image: {image}")
        else:
            print(f"   [PASS] Image exists: {image}")

        # 4. HTTP 200 Verification with retry for transient rate limiting
        headers_with_accept = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
        }
        success = False
        import time
        time.sleep(0.3)
        for attempt in range(3):
            try:
                req = urllib.request.Request(url, headers=headers_with_accept)
                with urllib.request.urlopen(req, timeout=10) as resp:
                    if resp.status == 200:
                        full_body = resp.read().decode('utf-8', errors='ignore')
                        title_match = re.search(r'<title>(.*?)</title>', full_body, re.IGNORECASE)
                        page_title = title_match.group(1).strip() if title_match else ''
                        
                        is_not_found = (
                            'Page Not Found' in page_title or
                            'dogs of amazon' in full_body.lower() or
                            'dogsofamazon' in full_body.lower() or
                            'title._TTD_.png' in full_body or
                            'The Web address you entered is not a functioning page' in full_body
                        )
                        
                        if is_not_found:
                            errors.append(f"Product '{pid}' triggered Amazon 404 / Dog page: {url}")
                            print(f"   [FAIL] Amazon 404 / Page Not Found detected! Title: {page_title}")
                        else:
                            print(f"   [PASS] HTTP 200 OK (Active product page: {page_title[:45]}...)")
                            success = True
                        break
                    else:
                        time.sleep(1)
            except urllib.error.HTTPError as e:
                if e.code == 404:
                    errors.append(f"Product '{pid}' returned HTTP 404: {url}")
                    print(f"   [FAIL] HTTP 404 Not Found!")
                    break
                elif attempt == 2:
                    errors.append(f"Product '{pid}' failed HTTP check: {e}")
                    print(f"   [FAIL] HTTP check failed: {e}")
                else:
                    time.sleep(1)
            except Exception as e:
                if attempt == 2:
                    errors.append(f"Product '{pid}' failed check: {e}")
                    print(f"   [FAIL] Check failed: {e}")
                else:
                    time.sleep(1)

    print("\n" + "=" * 80)
    print("AUDIT SUMMARY:")
    print(f"Total Products Checked: {len(product_blocks)}")
    print(f"Total Errors: {len(errors)}")
    print(f"Total Warnings: {len(warnings)}")

    if errors:
        print("\nERRORS ENCOUNTERED:")
        for err in errors:
            print(f" - {err}")
        print("=" * 80)
        sys.exit(1)
    else:
        print("\nALL PRODUCT LINKS & IMAGES PASSED QA VERIFICATION!")
        print("=" * 80)
        sys.exit(0)

if __name__ == '__main__':
    main()
