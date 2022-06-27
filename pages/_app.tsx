import '../styles/output.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../src/components/Navbar'
import { ShopProvider } from '../context/shopContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  {/* <ShopProvider> */}

    <Navbar />
    <div className='pt-20'>
      <Component {...pageProps} />

    </div>
  {/* </ShopProvider> */}
  </>
  
  )
}

export default MyApp
