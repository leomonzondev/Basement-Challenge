import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import header from "../src/assets/header.svg";
import footer from "../src/assets/footer.svg";
import { Slider } from "../src/components/Slider";
import { useEffect } from "react";
import { Products } from "../src/components/Products";

import textLogo1 from "../src/assets/est.svg";
import textLogo2 from "../src/assets/2k22.svg";
import footerDisks from "../src/assets/footerDisks.svg";

// import { Vectors } from '../src/components/vectors'
// import vector1 from '../src/assets/asterik.png'
// import vector2 from '../src/assets/asterik.png'

const Home: NextPage = () => {
  useEffect(() => {
    console.log(`
    ██╗     ███╗   ███╗   
    ██║     ████╗ ████║   
    ██║     ██╔████╔██║   
    ██║     ██║╚██╔╝██║   
    ███████╗██║ ╚═╝ ██║██╗
    ╚══════╝╚═╝     ╚═╝╚═╝
                          
    `);
  }, []);

  return (
    <div className="overflow-hidden  ">
      <Head>
        <title>Basement Challenge</title>
        <meta name="description" content="Leonardo Monzón" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-[5.5rem] md:px-4 relative">
        <div
          className="w-full relative md:h-[550px] 
         flex flex-col items-center h-36  "
        >
          <h1 className="md:text-[18rem] text-[3.5rem] leading-[4rem] md:leading-[18rem] text-center">
            BASEMENT
            <br />
            <span className="stroke text-black">SUPPLY</span>
          </h1>
          {/* <Image src={header} layout='fill'  /> */}
        </div>
        <picture className=" w-[3rem] h-[3rem] md:w-[20rem]  absolute md:-right-4 right-4 bottom-5 md:bottom-24">
          <Image src={textLogo2} layout="intrinsic" />
        </picture>
        <picture className="w-[3rem] h-[3rem] md:w-[20rem]  absolute md:left-28 bottom-5 left-3 md:bottom-24">
          <Image src={textLogo1} layout="intrinsic" />
        </picture>
      </div>

      {/* <div className=''>
        <Vectors src={vector1} />
        <Vectors src={vector2} />
      </div> */}

      <div className="w-full">
        <Slider />
      </div>

      <Products />

      <section className="px-4 flex relative w-full justify-end pt-20">
        <h1 className="text-[3.5rem] leading-[4rem] relative md:text-[18rem]  text-end md:leading-[18rem]">
          <picture className="pr-10 w-[8rem] absolute left-10 md:w-[22rem] md:left-96 md:-top-2 ">
            <Image src={footerDisks} layout="intrinsic" />
          </picture>
          WEAR <br />
          <span className="text-black stroke">EVERYDAY</span>
        </h1>
        {/* <Image src={footer} layout="fill" /> */}
      </section>
    </div>
  );
};

export default Home;
