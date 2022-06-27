import Image from 'next/image'
import React from 'react'

export const CardProduct = () => {
  return (
    <div className='flex'>
        {/* <Image /> */}
        <div>
            <div>
                <h1>BLACK T-SHIRT</h1>
                <h2>Unisex Basic Softstyle T-Shirt</h2>
            </div>

            <div className='flex'>
                <h2>QUANTITY:</h2>
                <div>
                    <button>-</button>
                    <p>3</p>
                    <button>+</button>
                </div>
            </div>

            <div>
                <h2>SIZE:</h2>
                <div></div>
            </div>

        </div>



    </div>
  )
}
