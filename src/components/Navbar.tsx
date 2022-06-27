import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import navHead from '../assets/hd-4k.svg'


export const Navbar = () => {
  return (
    <div className='fixed w-full py-3 z-50 backdrop-blur-lg bg-black/80 mb-20 border-b-2'>

        <div className='flex justify-between px-4 items-center  '>
          <Link href="/">
            <h1 className='text-4xl font-bold cursor-pointer'>basement.</h1>
          </Link>

            <div>
                <Image src={navHead}/>
            </div>

            <div>
                <button className='font-bold text-xl outline-2 px-8 uppercase py-2 rounded-full border-solid border-2'>Cart (0)</button>
            </div>

        </div>

    </div>
  )
}
