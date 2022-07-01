import Image from 'next/image';
import React, { FC, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { IProduct } from '../interfaces/products';
import { useSnackbar } from 'notistack'

import { ShopContext } from '../context/shopContext';
import { TYPES } from '../context/shopReducer';
import world from '../assets/VectorWorld.svg'
import buyme from '../assets/BUY ME.svg'

import { MdCheckCircle } from 'react-icons/md'

interface Props {
    product: IProduct;

}

export const ProductCard: FC<Props> = ({ product }) => {

    const { enqueueSnackbar } = useSnackbar();

    const { state, dispatch } = useContext(ShopContext)
    const [show, setShow] = useState(false)
    const [alreadyHave, setAlreadyHave] = useState<boolean>(false)


    const handleBuy = () => {
        if(state.cart.find(p => p._id === product._id)){
            setAlreadyHave(true)
            return
        }
        enqueueSnackbar(`✅ ${product.title} added to cart`, { variant: "default"})
        dispatch({type:TYPES.CART_ADD, product: {...product, quantity: 1}})
    }


    useEffect(() => {

        if(state.cart.find(p => p._id === product._id)){
            setAlreadyHave(true)
            return
        }
        else {
            setAlreadyHave(false)
            setShow(false)
        }


    },[state.cart])
    


    const already = 'You already have this product in your cart'

  return (
    <div className={`${alreadyHave ? "cursor-default" : "cursor-pointer "} `} onMouseEnter={() => `${ alreadyHave ? null : setShow(true)}`} onMouseLeave={() => `${alreadyHave ? null : setShow(false)}`} >

        
        <div className='border-b-4 relative flex justify-center border-white bg-gradient-to-t  from-gray select-none'>
        <div className='flex h-full w-full absolute items-center  '>
            {
                show
                ? <div className=' z-10 bg-black/40 h-full w-full flex justify-center ' onClick={handleBuy}><Image src={alreadyHave ? buyme : world}/></div>
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
