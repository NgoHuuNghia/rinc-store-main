import {doc, serverTimestamp, updateDoc} from 'firebase/firestore'
import {useRouter} from 'next/router'

import Image from 'next/image'
import { useForm, Controller } from "react-hook-form"
import Select from 'react-select'
import {AiFillDelete, AiFillEye} from 'react-icons/ai'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import toast from 'react-hot-toast'

import AdminTerminal from '@components/admin/AdminTerminal'
import AdminHeader from '@components/admin/AdminHeader'
import AdminFilter from '@components/admin/AdminFilter'
import AdminOverlay from '@components/admin/AdminOverlay'
import UploadMainImage from '@components/admin/UploadMainImage'
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
    const { register, handleSubmit, formState, reset, control } = useForm({ defaultValues, mode: 'onChange' });//? mode act like state
    const { isValid, isDirty, errors } = formState

    const updateGame = async ({ title, esrbRating }) => {
        await updateDoc(gameRef, {//? firestore function to update
            title,
            esrbRating,
            updatedAt: serverTimestamp(),
        })
    
        reset({ title, esrbRating });//? reset the form
    
        toast.success('Game updated successfully!');
    };

    return (
        <form onSubmit={handleSubmit(updateGame)}>
            <div className='text col-2'>
                <label htmlFor="title">Title: </label>
                <input
                    type='text'
                    name='title'
                    {...register('title',{ //? with added html validation
                        maxLength: { value: 20000, message: 'title is too long' },
                        minLength: { value: 3, message: 'title is too short' },
                        required: true,
                    })}
                />
                {errors.title && <strong className="danger">{errors.title.message}</strong>}{/* if there error in content then show it */}
            </div>
            
            <div className='col-2'>
                <label htmlFor='esrbRating'>Esrb: </label>
                <Controller
                    name="esrbRating"
                    control={control}
                    render={({ field }) => 
                        <Select className='selection'
                            {...field}
                            defaultValue={defaultValues.esrbRating}
                            options={[
                                { value: "Everyone 10+", label: "Everyone 10+" },
                                { value: "Mature 17+", label: "Mature 17+" },
                                { value: "Adult 18+", label: "Adult 18+" },
                                { value: "Rating Pending", label: "Rating Pending" }
                        ]}/>}
                />
            </div>

            <UploadMainImage />

            <div className='col-1'>
                <label className='custom-button'>
                    📸 Secondary images
                    <input type="file" accept="image/x-png,image/gif,image/jpeg"/>
                    {/* onChange={uploadFile} */}
                </label>
            </div>

            <div className='text col-1'>
                <label htmlFor="metacritic">Metacritic: </label>
                <input
                    type='text'
                    name='metacritic'
                    // {...register('metacritic',{valueAsNumber: {value: true, message: 'must be a number'}})}
                    {...register("metacritic", {
                        pattern: {value: /^[0-9]+$/, message: 'no strings'},
                        pattern: {value: /^[0-9][0-9]?$|^100$/, message: 'score 0-100 only'},
                        maxLength: { value: 3, message: 'score 0-100 only' },
                        valueAsNumber: false,
                    })}

                />
                {errors.metacritic && <strong className="danger">{errors.metacritic.message}</strong>}{/* if there error in content then show it */}
            </div>
            
            <button type="submit" className="custom-button submit col-1" disabled={!isDirty || !isValid}>{/*//? disabled if either of these are false */}
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