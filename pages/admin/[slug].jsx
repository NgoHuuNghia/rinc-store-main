import {doc, serverTimestamp, updateDoc} from 'firebase/firestore'
import {useRouter} from 'next/router'

import Image from 'next/image'
import { useForm } from "react-hook-form"
import {AiFillDelete, AiFillEye} from 'react-icons/ai'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import toast from 'react-hot-toast'

import AdminTerminal from '@components/admin/AdminTerminal'
import AdminHeader from '@components/admin/AdminHeader'
import AdminFilter from '@components/admin/AdminFilter'
import AdminOverlay from '@components/admin/AdminOverlay'
import { SidebarProvider } from '@lib/adminContext'
import { firestore } from '@lib/firebase'

function AdminGameEdit() {
    return (
        <GameManager />
    );
}

export default AdminGameEdit

function GameManager(){
    const router = useRouter();
    const { slug } = router.query;

    const gameRef = doc(firestore, 'games', slug)
    const [games] = useDocumentData(gameRef)//? will fetch the data once when the component is initialized

    return (
        <>
            {games && (
                <>
                    <div className='title'>
                    <h2>Editing {slug}</h2>
                    <div>
                        <button><AiFillEye /></button>
                        <button><AiFillDelete /></button>
                    </div>
                    </div>
                    <div className='game-edit'>
                        <GameManagerForm gameRef={gameRef} defaultValues={games}/>
                        <PreviewImages />
                    </div>
                </>
            )}
        </>
    )
}

function GameManagerForm({gameRef, defaultValues}){
    const { register, handleSubmit, formState, reset } = useForm({ defaultValues, mode: 'onChange' });//? mode act like state
    const { isValid, isDirty, errors } = formState

    const updateGame = async ({ title }) => {
        await updateDoc(gameRef, {//? firestore function to update
            title,
            updatedAt: serverTimestamp(),
        })
    
        reset({ title });//? reset the form
    
        toast.success('Game updated successfully!');
    };

    return (
        <form onSubmit={handleSubmit(updateGame)}>
            <input className='text'
                name='title'
                {...register('title',{ //? with added html validation
                    maxLength: { value: 20000, message: 'content is too long' },
                    minLength: { value: 10, message: 'content is too short' },
                    required: { value: true, message: 'content is required' },
                })}
            />
            <select className='custom-button' name='esrbRating' {...register("esrbRating")}>
                <option value="Everyone 10+">Everyone 10+</option>
                <option value="Mature 17+">Mature 17+</option>
                <option value="Adult 18+">Adult 18+</option>
                <option value="Rating Pending">Rating Pending</option>
            </select>
            
            
            <button type="submit" className="custom-button submit" disabled={!isDirty || !isValid}>{/*//? disabled if either of these are false */}
                Save Changes
            </button>
        </form>
    )
}

function PreviewImages(){
    return (
        <div className='image-preview'>
            <div>
                <strong>Main image</strong>
                <div>
                    <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test" 
                        width={850} height={500} layout='responsive'/>
                </div>
            </div>
            <div className='secondary'>
                <strong>Secondary images</strong>
                <div>
                    <div>
                        <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test" 
                            width={850} height={500} layout='responsive'/>
                    </div>
                    <div>
                        <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test" 
                            width={850} height={500} layout='responsive'/>
                    </div>
                    <div>
                        <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test" 
                            width={850} height={500} layout='responsive'/>
                    </div>
                    <div>
                        <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test" 
                            width={850} height={500} layout='responsive'/>
                    </div>
                </div>
            </div>
        </div>
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