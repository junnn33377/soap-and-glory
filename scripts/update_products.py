import re

direct_urls = {
    'righteous-butter-300ml': 'https://www.amazon.com/dp/B01MSHIMSR?tag=soapnglory-20',
    'clean-on-me-500ml': 'https://www.amazon.com/dp/B016UKRDZ8?tag=soapnglory-20',
    'scrub-of-your-life-200ml': 'https://www.amazon.com/dp/B0CTS4V6RP?tag=soapnglory-20',
    'flake-away-300ml': 'https://www.amazon.com/dp/B010FJ2WQA?tag=soapnglory-20',
    'hand-food-125ml': 'https://www.amazon.com/dp/B07NF6416M?tag=soapnglory-20',
    'heel-genius-125ml': 'https://www.amazon.com/dp/B010NU5PYW?tag=soapnglory-20',
    'smoothie-star-lotion-500ml': 'https://www.amazon.com/dp/B0B98ZMFJN?tag=soapnglory-20',
    'smoothie-star-scrub-300ml': 'https://www.amazon.com/dp/B014MI18JM?tag=soapnglory-20',
    'call-of-fruity-lotion-500ml': 'https://www.amazon.com/dp/B09P1LGR5J?tag=soapnglory-20',
    'call-of-fruity-scrub-300ml': 'https://www.amazon.com/dp/B07NRSSY7T?tag=soapnglory-20',
    'magnificoco-lotion-500ml': 'https://www.amazon.com/dp/B0B98P9WTT?tag=soapnglory-20',
    'magnificoco-wash-500ml': 'https://www.amazon.com/dp/B0B98ZNQYC?tag=soapnglory-20',
    'sexy-mother-pucker-xxl': 'https://www.amazon.com/dp/B00Y5U9B3I?tag=soapnglory-20',
    'thick-and-fast-mascara': 'https://www.amazon.com/dp/B0845PN8F5?tag=soapnglory-20',
    'birthday-box-gift-set': 'https://www.amazon.com/dp/B006L68WBQ?tag=soapnglory-20',
    'face-soap-and-clarity': 'https://www.amazon.com/dp/B00X629R2G?tag=soapnglory-20',
    'peaches-and-clean': 'https://www.amazon.com/dp/B00X629W4O?tag=soapnglory-20',
    'speed-plump-hydrating-lotion': 'https://www.amazon.com/dp/B096H452H9?tag=soapnglory-20',
    'bright-beautiful-sheet-mask': 'https://www.amazon.com/dp/B074L4LMNC?tag=soapnglory-20',
    'puffy-eye-attack-patches': 'https://www.amazon.com/dp/B078WHGJSJ?tag=soapnglory-20',
    'the-fab-pore-cleanser': 'https://www.amazon.com/dp/B01EAMU08A?tag=soapnglory-20',
    'scrub-in-the-fast-lane': 'https://www.amazon.com/dp/B08CS4J41H?tag=soapnglory-20',
    'scrub-your-nose-in-it': 'https://www.amazon.com/dp/B00EYG6ZDC?tag=soapnglory-20'
}

with open('src/data/products.js', 'r', encoding='utf-8') as f:
    text = f.read()

for pid, url in direct_urls.items():
    # Match the block for the specific id
    pattern = re.compile(
        r"(id:\s*['\"]" + re.escape(pid) + r"['\"].*?amazonUrl:\s*['\"])[^'\"]+(['\"].*?retailers:\s*\{.*?amazon:\s*['\"])[^'\"]+(['\"])",
        re.DOTALL
    )
    def repl(m, u=url):
        return f"{m.group(1)}{u}{m.group(2)}{u}{m.group(3)}"
    
    new_text, count = pattern.subn(repl, text, count=1)
    if count == 0:
        print(f"FAILED to update {pid}")
    else:
        text = new_text
        print(f"Successfully updated {pid} -> {url}")

# Update images
text = re.sub(
    r"(id:\s*'flake-away-300ml'.*?image:\s*')[^']+'",
    r"\g<1>/images/products/flake-away-body-polish.jpg'",
    text,
    count=1,
    flags=re.DOTALL
)

text = re.sub(
    r"(id:\s*'smoothie-star-scrub-300ml'.*?image:\s*')[^']+'",
    r"\g<1>/images/products/smoothie-star-breakfast-scrub.jpg'",
    text,
    count=1,
    flags=re.DOTALL
)

with open('src/data/products.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("\nDone updating src/data/products.js!")
