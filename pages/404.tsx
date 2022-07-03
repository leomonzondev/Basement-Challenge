import Link from 'next/link'
import React from 'react'

const Custom404 = () => {

  const text = 'text-[12rem] font-bold tracking-[.75rem]'

  return (
    <div className='bg-orange overflow-hidden flex h-[100vh] flex-col justify-end px-6 leading-[11rem]'>
        <div className='flex '>
          <h1 className={`${text}`}>ERROR #404</h1>
          <Link href={'/'}>
            <button className='ml-10 text-black font-bold text-6xl'>🡒 GET ME HOME</button>
          </Link>
        </div>
        <h1 className={`${text}`}>PAGE NOT FOUND</h1>
    </div>
  )
}

export default Custom404