export interface IProduct {
    _id: number;
    description: string;
    image: any;
    inStock?: number;
    price: number;
    sizes?: ISizes[];
    slug?: string;
    tags?: string[];
    title: string;
    type?: ITypes;
}

export type ISizes = |'S'|'M'|'L'|'XL';
export type ITypes = 'shirts'|'hoodies'|'hats';

export type shopContextType = {
    cart: IProduct;
    addToCart: (product: IProduct) => void;
    removeFromCart: (_id: number) => void
}

export interface ShopState {
    cart: string[]
}