import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { shop } from '../services/data'
import { ProductCard } from './ProductCard'


type alreadyHaveState = {

  
}


export const Products = () => {

  const { state } = useContext(ShopContext)







  return (
    <div className='flex px-4 flex-wrap md:flex-nowrap gap-10 md:py-20'>
        {
            shop.map(product => <div key={product._id}>
                <ProductCard product={product}  />
            </div>)
        }
    </div>
  )
}
