//import '../styles/globals.css'
import '@styles/index.css'
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<>
      <Component {...pageProps} />
      <Toaster />
    </>)
  }

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
