import { ShopState, IProduct } from '../src/interfaces/products';

type shopAction =
{ type: 'ADD_TO_CART', payload: IProduct } |
{ type: 'REMOVE_FROM_CART', payload: number } 


export const shopReducer = ( state:ShopState, action: shopAction  ) => {

    const { type, payload } = action

    switch ( type ) {
        case 'ADD_TO_CART':
            
            return { ...state, cart:[ ...state.cart, payload]}
    
        case 'REMOVE_FROM_CART':
            
            return {...state, cart:[ ...state.cart, payload]}

        default:
            break;
    }


}