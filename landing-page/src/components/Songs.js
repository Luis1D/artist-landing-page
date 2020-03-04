import React, { useState, useEffect } from 'react';
import MediaPlayer from './MediaPlayer';
import songs from '../data/songs';

const Songs = () => {
    const [audioList, setAudioList] = useState([]);
    const [audio, setAudio] = useState();
    const [audioData, setAudioData] = useState({});

    const createAudioData = link => {
        const rawAudio = new Audio(link);
        audioList.push(rawAudio);
    }

    const playSong = (link, title) => {
        // PAUSE ALL AUDIO
        audioList.forEach(item => {
            item.pause();
        })
        // SET SELECTED AUDIO
        const currentAudio = audioList.filter(url => url.src === link);
        setAudio(currentAudio[0]);
        // CONVERT SECONDS TO MINUTES:SECONDS
        const filtered = audioList.filter(item => item.src === link);
        let rawSec = filtered[0].duration;
        let minutes = Math.floor(rawSec / 60);
        let seconds = rawSec - minutes * 60;
        let duration = `${minutes}:${Math.floor(seconds)}`;
        // PACKAGE AUDIO DATA
        setAudioData({
            title: title,
            duration: duration
        })
    }

    return (
        <div id="Songs">
            <div className="wrapper">
                <h2>Playlist</h2>
                {
                    songs.map(song => {
                        return <div className="cell" key={ song.id } onClick={() => playSong(song.link, song.title)}>
                        { createAudioData(song.link) }
                            <div className="song-album">
                                <span className="song-title">{ song.title }</span>
                            </div>
                        </div>
                    })
                }
            </div>
            <MediaPlayer track={ audio } trackList={ audioList } trackData={ audioData } />
        </div>
    )
}

export default Songs;