import { IProduct } from '../../interfaces/products';



export function clearSelect():IProduct[] {
    return []
}

export function removeSelect(cart: IProduct[], id= 0):IProduct[] {

    return cart.filter( product => product._id !== id )
}

export function addSelect(cart: IProduct[], product?: IProduct):IProduct[] {

    if(product && cart.find( p => p._id === product._id)){
        return [...cart, product]
    }

    return []
}