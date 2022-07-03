import Image, { ImageProps } from 'next/image'
import React from 'react'

export const Vectors = (props: ImageProps) => {
  return (
    <figure>
        <Image alt='Flying around' layout='fill' {...props} />
    </figure>
  )
}
