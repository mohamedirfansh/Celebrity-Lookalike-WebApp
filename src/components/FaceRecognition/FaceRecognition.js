import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    let image;
    if (imageUrl === ''){
        image = null
    } else {
        image = <img id='inputimage' src={imageUrl} alt='Your' width='auto' height='400px'/>
    }

    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                {image}
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.botRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;