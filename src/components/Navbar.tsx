import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import navHead from '../assets/hd-4k.svg'
import Sbasement from '../assets/Sbasement.svg'
import Lbasement from '../assets/Lbasement.svg'
import { Cart } from './cart/Cart'




export const Navbar = () => {


  const [showCart, setShowCart] = useState<boolean>(false)

  const handleShow = () => {

    setShowCart(!showCart)

  }

  return (
    <div className='fixed w-full py-3 z-50 backdrop-blur-lg bg-black/80 md:mb-20 border-b-2'>

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


            <button onClick={handleShow} className='font-bold text-xl outline-2 px-8 uppercase py-2 rounded-full border-solid border-2'>Cart (0)</button>
           
           {
            showCart
            ? <Cart handleShow={handleShow} />
            : ""
           }

        </div>

    </div>
  )
}
