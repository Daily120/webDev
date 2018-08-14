import React from 'react';
import Tilt from 'react-tilt';
import brain from './logo_brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '25%'}} src={brain} alt=""/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;