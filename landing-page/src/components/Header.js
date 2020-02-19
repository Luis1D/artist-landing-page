import React from 'react';

const Header = () => {
    return (
        <div className="Header">
            <nav>
                <ul>
                    <li><img src={ require('../assets/spotify.svg') } className="nav-icon" alt="spotify" /></li>
                    <li><img src={ require('../assets/soundcloud.svg') } className="nav-icon" alt="soundcloud" /></li>
                    <li><img src={ require('../assets/youtube.svg') } className="nav-icon" alt="youtube" /></li>
                    <li><img src={ require('../assets/instagram.svg') } className="nav-icon" alt="Instagram" /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;