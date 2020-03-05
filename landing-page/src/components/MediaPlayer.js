import React, { useState,useEffect } from 'react';

const MediaPlayer = props => {
    const [trackDur, setTrackDur] = useState();

    const playTrack = () => {
        if (props.track) {
            props.track.play();
        } else {
            return null;
        }
        props.setPlaying(!props.playing)
    }
    
    const pauseTrack = () => {
        if (props.track) {
            props.track.pause();
        } else {
            return null;
        }
        props.setPlaying(!props.playing)
    }
    
    return (
        <div id="MediaPlayer">
            <div className="mp-wrapper">
            <div>
                {
                props.track ? <div>
                    <span className="track-title">{ props.trackData.title }</span>
                    <br />
                    <span className="track-duration">{ props.trackData.duration }</span>
                </div> : <span className="select-a-track">Select a track</span>
                }
            </div>
                <div className="pause-play">
                    {
                        props.playing ? <img
                        src={ require('../assets/pause-button.svg') }
                        alt="Pause Button"
                        className="pause-btn"
                        onClick={ () => pauseTrack() }
                    /> : <img
                        src={ require('../assets/play-btn.svg') }
                        alt="Play Button"
                        className="play-btn"
                        onClick={ () => playTrack() }
                    />
                    }
                </div>
                
            </div>
        </div>
    )
}

export default MediaPlayer;