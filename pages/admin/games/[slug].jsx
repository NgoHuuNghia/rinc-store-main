import {collection, doc, serverTimestamp, updateDoc} from 'firebase/firestore'
import {useRouter} from 'next/router'

import { useForm, Controller } from "react-hook-form"
import Select from 'react-select'
import {AiFillDelete, AiFillEye} from 'react-icons/ai'
import { useCollection, useDocumentData } from 'react-firebase-hooks/firestore'
import toast from 'react-hot-toast'

import UploadMainImage from '@components/Admin/UploadMainImage'
import SecondaryImages from '@components/Admin/SecondaryImages'
import { SidebarProvider } from '@lib/adminContext'
import { firestore } from '@lib/firebase'
import GameMainImage from '@components/Admin/GameMainImage'
import UploadSecondaryImages from '@components/Admin/UploadSecondaryImages'
function GameManager(){
    const router = useRouter();
    const { slug } = router.query;

    const gameRef = doc(firestore, 'games', slug)
    const [games] = useDocumentData(gameRef)//? will fetch the data once when the component is initialized

    //? fetching selections
    const genresRef = collection(firestore, 'genres')
    const [genresSnap] = useCollection(genresRef)
    const genresData = genresSnap?.docs.map(doc => {
        const data = doc.data()
        return {
            id: doc.id,
            label: data.title,
            value: data.title,
        }
    })

    const platformsRef = collection(firestore, 'platforms')
    const [platformsSnap] = useCollection(platformsRef)
    const platformsData = platformsSnap?.docs.map(doc => {
        const data = doc.data()
        return {
            id: doc.id,
            label: data.title,
            value: data.title,
            url: data.url
        }
    })

    const storesRef = collection(firestore, 'stores')
    const [storesSnap] = useCollection(storesRef)
    const storesData = storesSnap?.docs.map(doc => {
        const data = doc.data()
        return {
            id: doc.id,
            label: data.title,
            value: data.title,
            url: data.url
        }
    })

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
                        <GameManagerForm 
                            gameRef={gameRef} 
                            defaultValues={games}
                            genresData={genresData}
                            platformsData={platformsData}
                            storesData={storesData}
                        />
                        <PreviewImages slug={slug} mainUrl={games.mainImageUrl} secondaryImageUrls={games.secondaryImageUrls}/>
                    </div>
                </>
            )}
        </>
    )
}
export default GameManager

function GameManagerForm({gameRef, defaultValues, genresData, platformsData, storesData}){
    const { register, handleSubmit, formState, reset, control } = useForm({ defaultValues, mode: 'onChange' });//? mode act like state
    const { isValid, isDirty, errors } = formState

    const updateGame = async ({ title, esrbRating, published, genres, platforms, stores, description, basePrice, discount, metacritic }) => {

        await updateDoc(gameRef, {//? firestore function to update
            title: title.toLowerCase(), //? capitalized 1st letter
            esrbRating,
            description,
            basePrice,
            discount,
            metacritic,
            published,
            genres,
            platforms,
            stores,
            updatedAt: serverTimestamp(),
        })
    
        reset({ title, esrbRating, published, genres, platforms, stores, description, basePrice, discount, metacritic });//? reset the form
    
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
                        maxLength: { value: 100, message: 'title is too long' },
                        minLength: { value: 3, message: 'title is too short' },
                        required: true,
                    })}
                />
                {errors.title && <strong className="danger">{errors.title.message}</strong>}
            </div>

            <div className='col-2'>
                <label htmlFor='esrbRating'>Esrb: </label>
                <Controller
                    name="esrbRating"
                    control={control}
                    render={({ field }) => 
                        <Select className='selection'
                            {...field}
                            options={[
                                { id: "everyone-10+", value: "Everyone 10+", label: "Everyone 10+" },
                                { id: "teen", value: "Teen", label: "Teen" },
                                { id: "mature-17+", value: "Mature 17+", label: "Mature 17+" },
                                { id: "adult-18+", value: "Adult 18+", label: "Adult 18+" },
                                { id: "rating-pending", value: "Rating Pending", label: "Rating Pending" }
                            ]}
                        />
                    }
                />
            </div>

            <div className='col-2'>
                <label htmlFor='genres'>Genres: </label>
                <Controller
                    name="genres"
                    control={control}
                    render={({ field }) => 
                        <Select isMulti className='selection'
                            {...field}
                            options={genresData}
                        />
                    }
                />
            </div>

            <div className='col-2'>
                <label htmlFor='platforms'>Platforms: </label>
                <Controller
                    name="platforms"
                    control={control}
                    render={({ field }) => 
                        <Select isMulti className='selection'
                            {...field}
                            options={platformsData}
                        />
                    }
                />
            </div>

            <div className='col-2'>
                <label htmlFor='stores'>Stores: </label>
                <Controller
                    name="stores"
                    control={control}
                    render={({ field }) => 
                        <Select isMulti className='selection'
                            {...field}
                            options={storesData}
                        />
                    }
                />
            </div>

            <div className='col-2'>
                <label htmlFor="description">Description: </label>
                <textarea
                    name='description'
                    {...register('description',{ //? with added html validation
                        maxLength: { value: 20000, message: 'description is too long' },
                        minLength: { value: 20, message: 'description is too short' },
                    })}
                />
                {errors.description && <strong className="danger">{errors.description.message}</strong>}
            </div>

            <div className='text col-1'>
                <label htmlFor="metacritic">Metacritic: </label>
                <input
                    type='number'
                    name='metacritic'
                    {...register("metacritic", {
                        pattern: {value: /^[0-9]+$/, message: 'no strings'},
                        pattern: {value: /^[0-9][0-9]?$|^100$/, message: 'score 0-100 only'},
                        maxLength: { value: 3, message: 'score 0-100 only' },
                        valueAsNumber: true,
                    })}
                />
                {errors.metacritic && <strong className="danger">{errors.metacritic.message}</strong>}
            </div>

            <div className='text col-1'>
                <label htmlFor="basePrice">Base price in dollars: </label>
                <input
                    type='number'
                    name='basePrice'
                    {...register("basePrice", {
                        pattern: {value: /^[0-9]+$/, message: 'no strings'},
                        pattern: {value: /^([1-9][0-9]{0,2}|1000)$/, message: 'score 0-1000 only'},
                        maxLength: { value: 4, message: 'score 0-100 only' },
                        valueAsNumber: true,
                    })}
                />
                {errors.basePrice && <strong className="danger">{errors.basePrice.message}</strong>}
            </div>

            <div className='text col-1'>
                <label htmlFor="discount">Discount in percentage: </label>
                <input
                    type='number'
                    name='discount'
                    {...register("discount", {
                        pattern: {value: /^[0-9]+$/, message: 'no strings'},
                        pattern: {value: /^[0-9][0-9]?$|^100$/, message: 'score 0-100 only'},
                        maxLength: { value: 3, message: 'score 0-100 only' },
                        valueAsNumber: true,
                    })}
                />
                {errors.discount && <strong className="danger">{errors.discount.message}</strong>}
            </div>

            <UploadMainImage gameRef={gameRef} slug={defaultValues.slug}/>

            <UploadSecondaryImages gameRef={gameRef} slug={defaultValues.slug}/>

            <div className='published col-1'>
                <label htmlFor="title">Published </label>
                <fieldset>
                    <input name="published" type="checkbox" {...register('published')} />
                </fieldset>
                {errors.title && <strong className="danger">{errors.title.message}</strong>}
            </div>
            
            <button type="submit" className="custom-button submit col-1" disabled={!isDirty || !isValid}>{/*//? disabled if either of these are false */}
                Save Changes
            </button>
        </form>
    )
}

function PreviewImages({slug, mainUrl, secondaryImageUrls}){
    return (
        <div className='image-preview'>
            <div>
                <strong>Main image</strong>
                <GameMainImage mainUrl={mainUrl} slug={slug}/>
            </div>
            <SecondaryImages secondaryImageUrls={secondaryImageUrls} slug={slug}/>
        </div>
    )
}

GameManager.getLayout = function getLayout(page) {
    return <SidebarProvider>{page}</SidebarProvider>
}