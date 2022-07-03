import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import header from '../src/assets/header.svg'
import footer from '../src/assets/footer.svg'
import { Slider } from '../src/components/Slider'
import { useEffect } from 'react'
import { Products } from '../src/components/Products'
import { Vectors } from '../src/components/vectors'
import vector1 from '../src/assets/Vector.png'
import vector2 from '../src/assets/Vector2.png'

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
    <div className='overflow-hidden  '>
      <Head>
        <title>Basement Challenge</title>
        <meta name="description" content="Leonardo Monzón" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='pt-[5.5rem] md:px-4'>
        <div className='w-full relative md:h-[550px] flex flex-col items-center leading-[18rem]  h-36  '>
          {/* <h1 className='text-[22rem] font-extrabold font- text-center'>BASEMENT<br/><span className={`stroke text-black`}>SUPPLY</span></h1> */}

          <Image src={header} layout='fill'  />
        </div>
      </div>

     
      {/* <div className=''>
        <Vectors src={vector1} />
        <Vectors src={vector2} />
      </div> */}

    <div className='w-full'>
      <Slider />
    </div>

      <Products />

      <section className='px-4 flex w-full justify-end sticky'>
        <div className=' w-full h-36 md:h-[500px] relative right-0 md:-mr-56 '>
          <Image src={footer} layout='fill' />
        </div>
      </section>
    </div>
  )
}

export default Home
