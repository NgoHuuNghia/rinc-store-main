//import '../styles/globals.css'
import '@styles/index.css'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
  }

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
