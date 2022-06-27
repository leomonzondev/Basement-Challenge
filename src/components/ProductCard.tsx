import Image from 'next/image';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import { IProduct } from '../interfaces/products';

import world from '../assets/VectorWorld.svg'

interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

    const card = useRef()

    const [show, setShow] = useState(false)



  return (
    <div className={` cursor-pointer `} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >

        
        <div className='border-b-4 relative flex justify-center border-white bg-gradient-to-b from-black to-gray-900 select-none'>
        <div className='flex h-full w-full absolute items-center  '>
            {
                show
                ? <div className=' z-10 bg-black/40 h-full w-full flex justify-center '><Image src={world}/></div>
                : ""
            }
        </div>
        <Image src={product.image} />

        </div>
        <div className='flex justify-between text-3xl font-bold'>
            <h1 className=''>{ product.title }</h1>
            <p>${ product.price }</p>
        </div>
    </div>
  )
}
