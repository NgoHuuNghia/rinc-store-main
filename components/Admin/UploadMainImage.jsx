import { useState } from 'react';
import { updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, STATE_CHANGED } from '@lib/firebase';

import Loader from '@components/Loader'

function UploadMainImage({gameRef, slug}) {
    const [uploading, setUploading] = useState(false);//? fire being actively upload
    const [progress, setProgress] = useState(0);//? percentage of the file uploads till finish

    // Creates a Firebase Upload Task
    const uploadFile = async (e) => {
        // Get the file
        const file = Array.from(e.target.files)[0];

        // Makes reference to the storage bucket location
        //$ const fileRef = ref(storage, `uploads/${auth.currentUser.uid}/${Date.now()}.${extension}`);//? with a unique date so it can't be overwritten
        const fileRef = ref(storage, `uploads/images/games/${slug}/main-image/main-${slug}`);//? with a unique date so it can't be overwritten

        setUploading(true);

        // Starts the upload
        const task = uploadBytesResumable(fileRef, file)

        // Listen to updates to upload task
        task.on(STATE_CHANGED, (snapshot) => {
            const pct = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
            setProgress(pct);
        })

        //* Get downloadURL AFTER task resolves (Note: this is not a native Promise, it from firestorage)
        // task.then(() => setUploading(false))//? then allow us to get the download url only when it 100% finish to avoid errors

        task
            .then(() => getDownloadURL(fileRef))//? then allow us to get the download url only when it 100% finish to avoid errors
            .then( async(url) => {
                await updateDoc(gameRef, {//? firestore function to update
                    mainImageUrl: url,
                })
                setUploading(false);
            });
    }

    return (
        <div className='col-1 images-uploader'>
            {!uploading 
                ? (
                    <label className='custom-button'>
                        <span>📸 Main image</span>
                        <input type="file" onChange={uploadFile} accept="image/x-png,image/gif,image/jpeg" />
                    </label> )
                : (
                    <>
                        <Loader show={uploading}/>
                        {uploading && <h3>{progress}%</h3>}
                    </>
                )
            }
            
        </div>
    );
}


export default UploadMainImage