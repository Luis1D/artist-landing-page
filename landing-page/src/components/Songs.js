import React from 'react';

const Songs = () => {
    return (
        <div className="Songs">
            <h2>Albums</h2>

            {/* ALBUM LIST */}
            <div className="album-flex">
                {/* album */}
                <div className="wrapper">
                    <div className="album-container">
                        <div className="img-container">
                            <img 
                                src={require('../assets/silhouette.jpg')}
                                alt="song"
                                className="song-img"
                            />
                        </div>
                        <h3>Album Title</h3>
                        <h4>2015 - Album</h4>
                        <p>A description of the album in a few sent. Some random words will go here. and here again.</p>
                    </div>
                    {/* album */}
                    <div className="album-container">
                        <div className="img-container">
                            <img 
                                src={require('../assets/fluorescent.jpg')}
                                alt="song"
                                className="song-img"
                            />
                        </div>
                        <h3>Album Title</h3>
                        <h4>2016 - Album</h4>
                        <p>A description of the album in a few sent. Some random words will go here. and here again.</p>
                    </div>
                    {/* album */}
                    <div className="album-container">
                        <div className="img-container">
                            <img 
                                src={require('../assets/water.jpg')}
                                alt="song"
                                className="song-img"
                            />
                        </div>
                        <h3>Album Title</h3>
                        <h4>2017 - Album</h4>
                        <p>A description of the album in a few sent. Some random words will go here. and here again.</p>
                    </div>
                    {/* album */}
                    <div className="album-container">
                        <div className="img-container">
                            <img 
                                src={require('../assets/mask.jpg')}
                                alt="song"
                                className="song-img"
                            />
                        </div>
                        <h3>Album Title</h3>
                        <h4>2018 - Album</h4>
                        <p>A description of the album in a few sent. Some random words will go here. and here again.</p>
                    </div>
                    {/* album */}
                    <div className="album-container">
                        <div className="img-container">
                            <img 
                                src={require('../assets/pink.jpg')}
                                alt="song"
                                className="song-img"
                            />
                        </div>
                        <h3>Album Title</h3>
                        <h4>2019 - Album</h4>
                        <p>A description of the album in a few sent. Some random words will go here. and here again.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Songs;