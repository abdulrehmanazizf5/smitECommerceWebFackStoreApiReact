import { createContext, useContext, useState } from "react";

type CartContextType = {
  cart: any[];
  addToCart: (id: number) => void;
  quantity: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  // 1. Har item ki quantity ko jama (sum) karein
  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item.id === product.id);

      if (isExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Naya item add karte waqt poora product object bhejien
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    // Yahan 'totalQuantity' bhejien jo asli count batayega
    <CartContext.Provider value={{ cart, addToCart, quantity: totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
