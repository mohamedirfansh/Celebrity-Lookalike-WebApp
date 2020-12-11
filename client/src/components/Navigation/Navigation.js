import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return(
            <nav>
                <p onClick={() => onRouteChange('signout')} className='f5 link dim white underline pa3 pointer'>Sign out</p>
            </nav>
        );   
    } else {
        return (
            <nav>
                <p onClick={() => onRouteChange('signin')} className='f5 link dim white underline pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('Register')} className='f5 link dim white underline pa3 pointer'>Register</p>
            </nav>
        );
    }
    
}

export default Navigation;