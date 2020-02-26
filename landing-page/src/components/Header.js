import React from 'react';

const Header = () => {
    return (
        <div className="Header">
            <nav>
                <ul>
                    <li><a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer"><img src={ require('../assets/spotify.svg') } className="nav-icon" alt="spotify" /></a></li>
                    <li><a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer"><img src={ require('../assets/soundcloud.svg') } className="nav-icon" alt="soundcloud" /></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={ require('../assets/youtube.svg') } className="nav-icon" alt="youtube" /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={ require('../assets/instagram.svg') } className="nav-icon" alt="Instagram" /></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;