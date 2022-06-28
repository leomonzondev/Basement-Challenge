import Image from 'next/image'
import React from 'react'

import tshirt from '../../../public/products/shirt.png'

export const NavCardProduct = () => {
  return (
    <div className='flex border-2 border-solid border-white '>
        <div className='px-4 pt-4 pb-6'>
            <div className='flex  justify-center items-center bg-gradient-to-b from-black to-gray-900 select-none px-4'>
                <Image src={tshirt} width={280} height={320}  />
            </div>
        </div>
        <div className='flex justify-between flex-col  w-full'>
            <div className='font-basement pt-2'>
                <h1 className='font-extrabold text-5xl'>BLACK T-SHIRT</h1>
                <h2 className='font-extrabold text-4xl text-gray-500'>Unisex Basic Softstyle T-Shirt</h2>
            </div>

            <div className='flex'>
                <h2 className='font-extrabold text-3xl '>QUANTITY:</h2>
                <div className='flex'>
                    <button>-</button>
                    <p>3</p>
                    <button>+</button>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <h2 className='font-extrabold text-3xl'>SIZE:</h2>
                <div className='font-bold text-5xl p-5'>$12,50</div>
            </div>

        </div>



    </div>
  )
}
