import AdminTerminal from '@components/admin/AdminTerminal'
import AdminHeader from '@components/admin/AdminHeader'
import AdminFilter from '@components/admin/AdminFilter'
import AdminOverlay from '@components/admin/AdminOverlay'
import AdminGameList from './AdminGameList'
import { SidebarProvider } from '@lib/adminContext'

const Admin = () => {
    return (
        <AdminGameList/>
    )
}

export default Admin

Admin.getLayout = function getLayout(page) {
    return (
        <SidebarProvider>
            <section className='admin-container'>
                <AdminTerminal/>
                <div className='controls'>
                    <AdminHeader/>
                    {page}
                </div>
                <AdminFilter/>
                <AdminOverlay/>
            </section>
        </SidebarProvider>
    )
}