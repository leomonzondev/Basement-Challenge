import '../styles/output.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../src/components/Navbar'
import { ShopProvider } from '../src/context/ShopProvider'
import { SnackbarProvider } from 'notistack'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}>
    <ShopProvider>
      <Navbar />
        <div className='pt-20 '>
          <Component {...pageProps} />
        </div>
    </ShopProvider>
      </SnackbarProvider>
  </>
  
  )
}

export default MyApp
