import {useRouter} from 'next/router'
import { SidebarProvider } from '@lib/adminContext';

const AdminGameEdit = () => {
    return (
        <GameManager />
    );
}

export default AdminGameEdit

function GameManager(){
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>{slug}</div>
    )
}

AdminGameEdit.getLayout = function getLayout(page) {
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