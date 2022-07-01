import Image from 'next/image';
import React, {useContext, useEffect, useState} from 'react'

import Lyourcart from '../../assets/Lyour cart.svg'
import Myourcart from '../../assets/Myour cart.svg'
import { NavCardProduct } from './NavCardProduct';
import close from '../../assets/Close.svg'
import checkout from '../../assets/checkout.svg'
import Mcheckout from '../../assets/Mcheckout.svg'
import { ShopContext } from '../../context/shopContext';
import { IProduct } from '../../interfaces/products';
import StripeCheckout from 'react-stripe-checkout';



type setShowCart = {
  handleShow:React.MouseEventHandler<HTMLDivElement>;

}

export const Cart = ({handleShow}: setShowCart) => {


  const { state, dispatch } = useContext(ShopContext)


 const totalPrice = state.cart.reduce((a,b) => a + b.quantity * b.price, 0)


//stripe communication with the back
  const payNow = async() => {

    try {
   
    } catch (error) {
      
    }

  }


  return (<div className=''>
    <div className='absolute w-full md:w-[55%]  bg-black md:border-2 md:h-[800px] md:min-h-[800px]  max-h-screen overflow-y-auto md:scrollbar right-0 top-0 '>
      <div className='w-full flex justify-end px-8 py-8'>
        <div className='cursor-pointer ' onClick={handleShow}><Image src={close} /></div>
      </div>

        <div className='pb-10'>
          <div className='hidden md:block  relative  md:h-28 '><Image src={Lyourcart} layout="fill" /></div>
          <div className=' block md:hidden  relative h-52 md:h-28 '><Image src={Myourcart} layout="fill" /></div>
        </div>

        

        <div className='px-2 md:px-8 flex flex-col gap-2'>
          {
            state.cart.map(p => <div key={p._id}><NavCardProduct product={p}/></div>)
          }
        </div>
{        (state.cart.length <= 0) && <p className='text-center md:text-3xl pt-48'>{`Add products :)`}</p>}
        <div className=''>
          {
            state.cart.length > 0 &&
            <div className='flex justify-between flex-wrap md:flex-nowrap  relative border-t-2 mt-5 px-2 md:p-5  '>
              <p className='font-extrabold text-3xl md:text-5xl w-full flex justify-between md:justify-start gap-2'>TOTAL: <span className='text-end'>${totalPrice}</span></p>
              <div className=' h-40 md:h-0 w-full flex justify-center md:justify-end'>
                
                <button className='font-extrabold bg-black md:text-5xl pointer-events-none z-50 absolute hidden md:block'><Image src={checkout} /></button>
                <button className='font-extrabold bg-black md:text-5xl pointer-events-none z-50 absolute md:hidden block'><Image src={Mcheckout} width={400} height={80}/></button>

                <div className='mr-16'>
                  <StripeCheckout 
                    stripeKey='pk_test_51Ji5BCKm6U4hABrlan8TDlvZF2TUtkfTC4HrcaBmC6ZkJgpHs7YYeKDfvroKNGlWGpojjNhptGtyau1wkht6vtan003JsnVbGP'
                    label='CHECKOUT'
                    name='Pay with Credit Card'
                    billingAddress
                    shippingAddress
                    amount={totalPrice}
                    description={`Your total is, ${totalPrice}`}
                    token={payNow}
                  />
                </div>
              </div>
          </div>
          }

        </div>

    </div>
  
  </div>
  )
}
