import { useReducer } from "react";

import { shopReducer, CartState, TYPES } from "./shopReducer";
import { ShopContext } from "./shopContext";
import { IProduct } from "../interfaces/products";

export interface ICartContext {
  state: CartState;
  dispatch: Function;
}

const CART_INITIAL_STATE = {
  cart: [],
};

interface ProviderProp {
  children: JSX.Element | JSX.Element[];
}
export const ShopProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(shopReducer, CART_INITIAL_STATE);

  return (
    <ShopContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
