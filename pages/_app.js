//import '../styles/globals.css'
import '@styles/index.css'
import {Toaster} from 'react-hot-toast'

import Header from '@components/header'
import Footer from '@components/footer'

import { AppProvider } from '@lib/globalContext'
import Overlay from '@components/Overlay'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<>
      <Component {...pageProps} />
      <Toaster />
    </>)
  }

  return (
    <AppProvider>
      <div className='main-body'>
        <Header />
        <Component {...pageProps} />
        <Overlay />
        <Toaster />
        <Footer />
      </div>
    </AppProvider>
  )
}

export default MyApp
