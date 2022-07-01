import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

import navHead from '../assets/hd-4k.svg'
import Sbasement from '../assets/Sbasement.svg'
import Lbasement from '../assets/Lbasement.svg'
import { Cart } from './cart/Cart'
import { ShopContext } from '../context/shopContext';





export const Navbar = () => {


  const [showCart, setShowCart] = useState<boolean>(false)

  const { state } = useContext(ShopContext)

  const handleShow = () => {
    setShowCart(!showCart)
  }

  const totalProducts = state.cart.reduce((a,b) => a + b.quantity, 0)

  return (
    <div className='fixed w-full py-3 z-50 backdrop-blur-lg  bg-black/80 md:mb-20 border-b-2 '>

        <div className='flex justify-between px-4 items-center  '>
          <Link href="/">
              <div className='cursor-pointer md:hidden'>
                <Image src={Sbasement} />
              </div>
          </Link>
          <Link href="/">
              <div className='cursor-pointer hidden md:block'>
                <Image src={Lbasement} />
              </div>
            </Link>
            <div className='hidden md:block'>
                <Image src={navHead}/>
            </div>

           
            <button onClick={handleShow} className='font-bold w-[10.5rem] text-xl outline-2 px-8 uppercase py-2  rounded-full border-solid border-2'>Cart ( {totalProducts > 9 ?`+9` : totalProducts} )</button>
       
        
            {
              showCart
              ? <div className='absolute w-full h-screen bg-black/80 top-[4.5rem] right-[.02rem]'><Cart handleShow={handleShow} /></div>
              : ""
            }

          

        </div>

    </div>
  )
}
