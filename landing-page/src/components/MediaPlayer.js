import React, { useState,useEffect } from 'react';

const MediaPlayer = props => {
    const [trackDur, setTrackDur] = useState();
        

    // console.log(trackDur);
    // let rawSec = audio.duration;
    // let minutes = Math.floor(rawSec / 60);
    // let seconds = rawSec - minutes * 60;
    // let duration = minutes + ":" + Math.floor(seconds)
    // console.log(minutes + ":" + Math.floor(seconds))

    const playTrack = () => {
        if (props.track) {
            props.track.play();
        } else {
            return null;
        }
    }
    
    const pauseTrack = () => {
        if (props.track) {
            props.track.pause();
        } else {
            return null;
        }
    }

    
    return (
        <div id="MediaPlayer">
            <div className="mp-wrapper">
            <div>
                {
                props.track ? <div>
                    <span>{ props.trackData.title }</span>
                    <br />
                    <span>{ props.track.duration }</span>
                </div> : null
                }
            </div>
            
            
                <div className="pause-play">
                    <img
                        src={ require('../assets/pause-button.svg') }
                        alt="Pause Button"
                        className="pause-btn"
                        onClick={ () => pauseTrack() }
                    />
                    <img
                        src={ require('../assets/play-btn.svg') }
                        alt="Play Button"
                        className="pause-btn play"
                        onClick={ () => playTrack() }
                    />
                </div>
            </div>
        </div>
    )
}

export default MediaPlayer;