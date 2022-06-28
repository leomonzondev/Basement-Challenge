import Image from 'next/image';
import React from 'react'

import Lyourcart from '../../assets/Lyour cart.svg'
import { NavCardProduct } from './NavCardProduct';


type setShowCart = {
  handleShow:React.MouseEventHandler<HTMLButtonElement>;
}

export const Cart = ({handleShow}: setShowCart) => {


  


  return (<div className=''>
    <div className='absolute w-[55%] bg-black border-2  right-0 top-0 min-h-[800px]'>
      <div className='w-full flex justify-end px-8 py-8'>
        <button className='font-extrabold text-3xl' onClick={handleShow}>X CLOSE</button>
      </div>

        <div className=' pb-10'>
          <div className='hidden md:block relative h-28 '><Image src={Lyourcart} layout="fill" /></div>

        </div>

        <div className='px-8'>
          <NavCardProduct />
        </div>
        

          <div className='flex justify-between border-t-2 mt-5 h-full p-5 '>
            <p className='font-extrabold text-5xl'>TOTAL: $37,50</p>
            <button className='font-extrabold text-5xl'>CHECKOUT</button>
          </div>
    </div>
  
  </div>
  )
}
