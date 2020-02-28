import React from 'react';

const MediaPlayer = () => {
    return (
        <div id="MediaPlayer">
            <div className="mp-wrapper">
                <img
                    src={ require('../assets/skip-btn.svg') }
                    alt="Skip Back Button"
                    className="pause-btn skip-backward"
                />
                <div className="pause-play">
                    <img
                        src={ require('../assets/pause-button.svg') }
                        alt="Pause Button"
                        className="pause-btn"
                    />
                    <img
                        src={ require('../assets/play-btn.svg') }
                        alt="Play Button"
                        className="pause-btn play"
                    />
                </div>
                <img
                    src={ require('../assets/skip-btn.svg') }
                    alt="Skip forward Button"
                    className="pause-btn skip-forward"
                />
            </div>
        </div>
    )
}

export default MediaPlayer;