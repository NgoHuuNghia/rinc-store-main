// import '@styles/publicHai/aos.css'

import '@styles/index.css'
import {Toaster} from 'react-hot-toast'

import Header from '@components/Header'
import Footer from '@components/Footer'

import { AppProvider, UserContext } from '@lib/globalContext'
import Overlay from '@components/Overlay'
import { useUserData } from '@lib/hooks'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import AuthCheck from '@components/AuthCheck'

import { SidebarProvider } from '@lib/adminContext'
import AdminTerminal from '@components/Admin/AdminTerminal'
import AdminHeader from '@components/Admin/AdminHeader'
import AdminFilter from '@components/Admin/AdminFilter'
import AdminOverlay from '@components/Admin/AdminOverlay'

function MyApp({ Component, pageProps }) {
  const {user, role, username, shoppingCart} = useUserData()

  if(Component.getLayout){
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(
      <UserContext.Provider value={{user, username, role}}>
        <AuthCheck>
          <SidebarProvider>
            <section className='admin-container'>
                <AdminTerminal/>
                <div className='controls'>
                    <AdminHeader/>
                    <Component {...pageProps}/>
                </div>
                <AdminFilter/>
                <AdminOverlay/>
            </section>
          </SidebarProvider>
          <Toaster />
        </AuthCheck>
      </UserContext.Provider>
    )
  }

  return (
    <UserContext.Provider value={{user, username, role, shoppingCart}}>
      <PayPalScriptProvider options={{"client-id": process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_CLIENT_ID}}>
        <AppProvider>
          <div className='main-body'>
            <Header />
            <Component {...pageProps}/>
            <Overlay />
            <Toaster />
            <Footer />
          </div>
        </AppProvider>
      </PayPalScriptProvider>
    </UserContext.Provider>
  )
}

export default MyApp
