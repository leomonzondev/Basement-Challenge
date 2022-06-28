import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import header from '../src/assets/header.svg'
import footer from '../src/assets/footer.svg'
import { Slider } from '../src/components/Slider'
import { useEffect } from 'react'
import { Products } from '../src/components/Products'

const Home: NextPage = () => {

  useEffect(() => {
    console.log(`
    ██╗     ███╗   ███╗   
    ██║     ████╗ ████║   
    ██║     ██╔████╔██║   
    ██║     ██║╚██╔╝██║   
    ███████╗██║ ╚═╝ ██║██╗
    ╚══════╝╚═╝     ╚═╝╚═╝
                          
    `)
  },[])

  return (
    <div className='px-4 overflow-hidden '>
      <Head>
        <title>Basement Challenge</title>
        <meta name="description" content="Leonardo Monzón" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='w-full relative md:h-[500px]  h-36 flex justify-center items-center '>
        <Image src={header} layout='fill'  />
      </div>

    <div className='w-full '>
      <Slider />
    </div>
  
        <Products />


      <section className='flex w-full justify-end sticky'>
        <div className=' w-full h-[500px] relative right-0 -mr-56 '>
          <Image src={footer} layout='fill' />
        </div>
      </section>

      {/* <footer className='absolute z-10'>
      <div className='w-full relative h-[1200px] flex justify-center'>
        <Image src={header}  />
      </div>
      </footer> */}
    </div>
  )
}

export default Home
