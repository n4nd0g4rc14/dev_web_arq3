import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const HP = () => {
    return (
        <div className="video-container">
            <video className="video" width="900" height="650" src="festa.webm" autoPlay muted loop></video>
            <p>Faça seu show onde quiser!</p>
        </div>
    );
}


export default HP;
