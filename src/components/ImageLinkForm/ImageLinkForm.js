import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit, lookalike, confidence}) => {
    let num = confidence === '' ? 0 : confidence
    return(
        <div className='ma4 mt2'>
            <p className='white f3'>
                {'Enter your image url and the app will find your celebrity lookalike.'}
            </p>
            <p className='white f3'>
                {'You look most like: '}<span className='underline capitalize'>{lookalike}</span>
                <br />
                {'With a confidence score of: ' + (parseFloat(num) * 100).toFixed(2) + '%'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white gr' onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;