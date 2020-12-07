import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './face.png'

const Logo = () => {
    return(
        <div className='logo-div mt2'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 60, }}>
                <div className="Tilt-inner pa3">
                    <img id='logo' src={logo} alt='logo' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;