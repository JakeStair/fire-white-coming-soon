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
                    <a href="https://www.pandora.com/podcast/fire-and-white/PC:1001085627">Pandora</a>
                    <a href="https://open.spotify.com/show/5CNtyoJ8vP9plKDmg3jVhv">Spotify</a>
                    <a href="https://podcasts.apple.com/us/podcast/fire-white/id1733507614">Apple</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;