import React from 'react'

export const Slider = () => {
  const marqueeContent = "— A man can't have enough basement swag ".repeat(8)
  return (
    <div className='flex md:mt-3 py-3 border-y-2 border-white whitespace-nowrap w-full '>
      <div className='relative flex w-1/2 gap-6  '>
        <p className='text-5xl font-bold animate-marquee '>{marqueeContent}</p>
      </div>
    </div>
  )
}
