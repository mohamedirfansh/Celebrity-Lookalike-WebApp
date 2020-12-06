import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return(
        <div className='ma4 mt2'>
            <p className='white f3'>
                {'Enter your image url and the app will detect faces in the image.'}
            </p>
            <div class='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;