import React from 'react';
import albumList from '../data/albums.js';

const Albums = () => {
    return (
        <div id="Albums">
            <div className="album-flex">
                <div className="wrapper">
                {
                    albumList.map(album => {
                        return <div className="album-container" key={album.id}>
                            <div className="img-container">
                                <img 
                                    src={ require(`../assets/${album.albumCover}`) }
                                    alt="song"
                                    className="song-img"
                                />
                            </div>
                            <h3>{ album.title }</h3>
                            <h4>{ album.releaseDate }</h4>
                            <p>{ album.description }</p>
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Albums;