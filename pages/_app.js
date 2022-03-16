//import '../styles/globals.css'
import '@styles/index.css'
import {Toaster} from 'react-hot-toast'

import Header from '@components/header'
import Footer from '@components/footer'

import { AppProvider, UserContext } from '@lib/globalContext'
import Overlay from '@components/Overlay'
import { useUserData } from '@lib/hooks'

function MyApp({ Component, pageProps }) {
  const {user, username} = useUserData()

  if(Component.getLayout){
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<>
      <Component {...pageProps} />
      <Toaster />
    </>)
  }

  return (
    <UserContext.Provider value={{user, username}}>
      <AppProvider>
        <div className='main-body'>
          <Header />
          <Component {...pageProps} />
          <Overlay />
          <Toaster />
          <Footer />
        </div>
      </AppProvider>
    </UserContext.Provider>
  )
}

export default MyApp
