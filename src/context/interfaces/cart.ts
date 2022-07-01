

export interface ICartProduct {
    _id: number;
    description: string;
    image: any;
    inStock?: number;
    price: number;
    size?: ISizes[];
    slug?: string;
    tags?: string[];
    title: string;
    type?: ITypes;
    quantity: number;
}

export type ISizes = |'S'|'M'|'L'|'XL';
export type ITypes = 'shirts'|'hoodies'|'hats';



