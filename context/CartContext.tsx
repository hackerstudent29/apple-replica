"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  priceNumber?: number;
  image: string;
  quantity: number;
  color?: string;
  specs?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  totalAmount: number;
  totalCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const DEFAULT_INITIAL_ITEMS: CartItem[] = [
  {
    id: "iphone-duo",
    name: "iPhone Duo 256GB - Star White",
    price: "$1,499.00",
    priceNumber: 1499,
    image: "https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated_preorder__c10i2x3qhi4i_large_2x.jpg",
    quantity: 1,
    color: "Star White",
    specs: "256GB • Dual Super Retina XDR • A19 Pro",
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro (2nd generation) with MagSafe Case (USB-C)",
    price: "$249.00",
    priceNumber: 249,
    image: "https://www.apple.com/v/airpods-pro/j/images/overview/hero/hero__f1k80h3a0oae_large_2x.png",
    quantity: 1,
    color: "White",
    specs: "Active Noise Cancellation • Hearing Aid Feature",
  },
];

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(DEFAULT_INITIAL_ITEMS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("apple_replica_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // fallback
    }
  }, []);

  const saveItems = (newItems: CartItem[]) => {
    setItems(newItems);
    try {
      localStorage.setItem("apple_replica_cart", JSON.stringify(newItems));
    } catch {
      // fallback
    }
  };

  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    const parsedNumber =
      newItem.priceNumber ??
      (parseFloat(String(newItem.price).replace(/[^0-9.]/g, "")) || 0);

    const existingIndex = items.findIndex((i) => i.id === newItem.id);
    if (existingIndex > -1) {
      const updated = [...items];
      updated[existingIndex].quantity += 1;
      saveItems(updated);
    } else {
      saveItems([...items, { ...newItem, priceNumber: parsedNumber, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    saveItems(items.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    const updated = items.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    saveItems(updated);
  };

  const clearCart = () => {
    saveItems([]);
  };

  const totalAmount = items.reduce(
    (acc, curr) => acc + (curr.priceNumber || 0) * curr.quantity,
    0
  );

  const totalCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalAmount,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
