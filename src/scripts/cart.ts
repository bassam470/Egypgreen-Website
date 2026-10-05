/**
 * Quote cart. Lives in localStorage only; nothing is sent anywhere until the
 * visitor presses "send on WhatsApp" on /quote. Labels are stored in both
 * languages so the message can be built in whichever language the visitor uses.
 */
export type L10n = { ar: string; en: string };

export interface CartItem {
  /** product slug + group + option, unique per line. */
  key: string;
  product: string;
  name: L10n;
  variant: L10n;
  detail?: L10n;
  qty: number;
}

const STORAGE_KEY = "eg-quote-v1";
const EVENT = "eg-cart-change";
export const MAX_QTY = 9999;

function read(): CartItem[] {
  try {
    const v = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(v) ? v.filter((i) => i && typeof i.key === "string" && i.qty > 0) : [];
  } catch {
    return [];
  }
}

function write(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* storage blocked: the cart simply won't persist */
  }
  window.dispatchEvent(new CustomEvent(EVENT));
}

const clamp = (n: number) => Math.min(MAX_QTY, Math.max(1, Math.round(n) || 1));

export const cart = {
  items: read,
  count: () => read().reduce((s, i) => s + i.qty, 0),
  lines: () => read().length,
  add(item: CartItem) {
    const items = read();
    const found = items.find((i) => i.key === item.key);
    if (found) found.qty = clamp(found.qty + item.qty);
    else items.push({ ...item, qty: clamp(item.qty) });
    write(items);
  },
  setQty(key: string, qty: number) {
    write(read().map((i) => (i.key === key ? { ...i, qty: clamp(qty) } : i)));
  },
  remove(key: string) {
    write(read().filter((i) => i.key !== key));
  },
  clear() {
    write([]);
  },
  onChange(fn: () => void) {
    window.addEventListener(EVENT, fn);
    // Keep tabs in sync.
    window.addEventListener("storage", (e) => e.key === STORAGE_KEY && fn());
  },
};

export function renderBadges() {
  const n = cart.lines();
  document.querySelectorAll<HTMLElement>("[data-cart-count]").forEach((el) => {
    el.textContent = String(n);
    el.hidden = n === 0;
  });
}
