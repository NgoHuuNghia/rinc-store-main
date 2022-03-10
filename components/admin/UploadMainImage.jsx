import Loader from '@components/Loader'

function UploadMainImage({}) {
    return (
        <div className='col-1 images-uploader'>
            <label className='custom-button'>
                📸 Main image
                <input type="file" accept="image/x-png,image/gif,image/jpeg" />
                {/* onChange={uploadFile} */}
            </label>
            {/* <Loader />
            <strong>50%</strong> */}
        </div>
    );
}


export default UploadMainImage