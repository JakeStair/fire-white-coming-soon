import React from 'react';
import './Hero.css';
import logo from '../assets/text.svg';

function Hero() {
    return (
        <div className="hero-container">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="content">
                <h1>Fire & White Podcast</h1>
                <p>Website coming Soon!</p>
                <p>Links below to our most popular podcast platforms:</p>
                <div className="links">
                    <a href="https://feeds.buzzsprout.com/2221953.rss">Spotify</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;