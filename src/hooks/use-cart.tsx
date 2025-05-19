
import { create } from 'zustand';
import { toast } from 'sonner';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item: CartItem) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((i) => i.id === item.id);

    if (existingItem) {
      // Update quantity if item already exists
      return set({
        items: currentItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      });
    }

    set({ items: [...currentItems, item] });
    toast.success(`Added ${item.name} to cart!`);
  },
  removeItem: (id: string) => {
    set({ items: get().items.filter((item) => item.id !== id) });
    toast.info("Item removed from cart");
  },
  updateQuantity: (id: string, quantity: number) => {
    if (quantity <= 0) {
      return get().removeItem(id);
    }

    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    });
  },
  clearCart: () => {
    set({ items: [] });
  },
}));
