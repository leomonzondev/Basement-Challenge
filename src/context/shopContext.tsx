import React, { createContext } from 'react'


import { CartState } from './shopReducer';


//Context vvv
interface ContextProps {

    CartContextValue:ICartContext;
}

export interface ICartContext {
    state: CartState ;
    dispatch:Function;
}

export const ShopContext = createContext<ICartContext>({} as ICartContext)