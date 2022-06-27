import React, { createContext, FC, ReactNode, useReducer } from 'react'
import { IProduct, shopContextType, ShopState } from '../src/interfaces/products';
import { shopReducer } from './shopReducer';

export const ShopContext = createContext<shopContextType | null>(null)

const INITIAL_STATE:ShopState = {
    cart: []
}


interface props {
    children: JSX.Element | JSX.Element[]
}



export const ShopProvider = ({ children }: props) => {


    const [state, dispatch] = useReducer(shopReducer, INITIAL_STATE)



return(
    <ShopContext.Provider value={{

    }}>
        { children }
    </ShopContext.Provider>
)


}
