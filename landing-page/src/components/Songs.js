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
        audioList.forEach(item => {
            item.pause();
        })
        const currentAudio = audioList.filter(url => url.src === link);
        console.log(currentAudio);
        setAudio(currentAudio[0]);
        setAudioData({
            title: title
        })
    }
    
    const convertDur = () => {
        let rawSec = audio.duration;
        let minutes = Math.floor(rawSec / 60);
        let seconds = rawSec - minutes * 60;
        let duration = `${minutes}:${Math.floor(seconds)}`;
        console.log(duration)
    }

    return (
        <div id="Songs">
            <div className="wrapper">
                <h2>Playlist</h2>
                {
                    songs.map(song => {
                        return <div className="cell" key={ song.id } onClick={() => playSong(song.link, song.title)}>
                        { createAudioData(song.link) }
                        { console.log(song) }
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