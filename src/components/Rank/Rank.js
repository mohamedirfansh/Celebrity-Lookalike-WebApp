import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <div>
            <div className='white f3'>
                <span className='capitalize b'>{name}</span>{' you have submitted this number of pictures:'}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;