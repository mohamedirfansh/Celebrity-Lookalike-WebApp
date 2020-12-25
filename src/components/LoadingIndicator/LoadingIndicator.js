import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import './LoadingIndicator.css'

const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&
        <div className='back'>
            <div className="loader">
                <Loader type="ThreeDots" color="#20b2aa" height="100" width="100" />
            </div>
        </div>
    );
}

export default LoadingIndicator;