import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imageUrl} alt='Your' width='auto' height='400px'/>
            </div>
        </div>
    );
}

export default FaceRecognition;