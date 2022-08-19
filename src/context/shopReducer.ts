import { IProduct } from "../interfaces/products";
import {
  addSelect,
  removeSelect,
  clearSelect,
} from "./selectors/shopSelectors";

export interface CartState {
  cart: IProduct[];
}

export enum TYPES {
  CART_CLEAR,
  CART_ADD,
  CART_REMOVE,
}

interface CartAction {
  type: TYPES;
  id?: number;
  product?: IProduct | any;
}

export const shopReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case TYPES.CART_ADD:
      let add = [...state.cart, action.product];
      const exist = state.cart.find((p) => p._id === action.product._id);
      const newArr = state.cart.map((item) => {
        if (item._id === action.product._id) {
          return { ...action.product };
        }
        return item;
      });
      exist ? (add = newArr) : add;

      return { ...state, cart: add };

    case TYPES.CART_REMOVE:
      const filtered = state.cart.filter((p) => p._id !== action.product._id);

      return { ...state, cart: filtered };

    case TYPES.CART_CLEAR:
      return {
        cart: clearSelect(),
      };
    default:
      return state;
  }
};
