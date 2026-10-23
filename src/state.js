import { PRODUCTS } from './data/products.js';

class StoreState {
  constructor() {
    this.cart = this.load('sg_cart', []);
    this.wishlist = this.load('sg_wishlist', []);
    this.activeTheme = 'original-pink';
    this.catalogFilter = 'all';
    this.catalogSort = 'featured';
    this.subscribers = new Set();
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  notify(event) {
    this.subscribers.forEach(fn => fn(event, this));
  }

  addToCart(productId, size = null, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || product.size;
    const existing = this.cart.find(item => item.id === productId && item.size === chosenSize);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ id: productId, size: chosenSize, quantity });
    }
    this.save('sg_cart', this.cart);
    this.notify({ type: 'cart_updated', product, quantity });
  }

  updateQuantity(productId, size, delta) {
    const item = this.cart.find(i => i.id === productId && i.size === size);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => !(i.id === productId && i.size === size));
    }
    this.save('sg_cart', this.cart);
    this.notify({ type: 'cart_updated' });
  }

  openCart() {
    this.notify({ type: 'cart_opened' });
  }

  closeCart() {
    this.notify({ type: 'cart_closed' });
  }

  updateCartQuantity(productId, delta, size = null) {
    const item = size ? this.cart.find(i => i.id === productId && i.size === size) : this.cart.find(i => i.id === productId);
    if (item) {
      this.updateQuantity(productId, item.size, delta);
    }
  }

  removeFromCart(productId, size) {
    this.cart = this.cart.filter(i => !(i.id === productId && i.size === size));
    this.save('sg_cart', this.cart);
    this.notify({ type: 'cart_updated' });
  }

  toggleWishlist(productId) {
    if (this.wishlist.includes(productId)) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
    } else {
      this.wishlist.push(productId);
    }
    this.save('sg_wishlist', this.wishlist);
    this.notify({ type: 'wishlist_updated', productId });
  }

  setTheme(themeName) {
    this.activeTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    this.notify({ type: 'theme_changed', theme: themeName });
  }

  setCatalogFilter(category) {
    this.catalogFilter = category;
    this.notify({ type: 'filter_changed', category });
  }

  setCatalogSort(sortType) {
    this.catalogSort = sortType;
    this.notify({ type: 'sort_changed', sortType });
  }

  getCartTotals() {
    let subtotal = 0;
    let count = 0;

    for (const item of this.cart) {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      if (p) {
        subtotal += p.price * item.quantity;
        count += item.quantity;
      }
    }

    const freeGiftThreshold = 25.00; // £25 free shipping/gift threshold standard in UK Boots
    const diff = Math.max(0, freeGiftThreshold - subtotal);
    const progress = Math.min(100, Math.round((subtotal / freeGiftThreshold) * 100));

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      count,
      freeGiftThreshold,
      diff: parseFloat(diff.toFixed(2)),
      progress,
      qualifiesForFreeGift: subtotal >= freeGiftThreshold
    };
  }
}

export const store = new StoreState();
