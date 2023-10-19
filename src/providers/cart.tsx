"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CardProducts extends Product {
  quantity: number;
}

interface ICartContext {
  products: CardProducts[];
  cardTotalPrice: number;
  cardBasePrice: number;
  cartTotalDiscount: number;
}

const CartContext = createContext<ICartContext>({
  products: [],
  cardTotalPrice: 0,
  cardBasePrice: 0,
  cartTotalDiscount: 0,
});

const CardProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider
      value={{
        products: [],
        cardTotalPrice: 0,
        cardBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
