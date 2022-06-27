import React from 'react'
import { shop } from '../../helper/data'
import { ProductCard } from './ProductCard'
import { IProduct } from '../interfaces/products';


export const Products = () => {
  return (
    <div className='flex gap-10 py-20'>
        {
            shop.map(product => <div key={product._id}>
                <ProductCard product={product} />
            </div>)
        }
    </div>
  )
}
