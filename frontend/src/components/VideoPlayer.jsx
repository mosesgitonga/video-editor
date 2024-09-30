import React from 'react';


const VideoPlayer = ({src}) => {
    return (
        <div>
            <h2>Output Video</h2>
            <video src={src} controls width="600"></video>
        </div>
    )
}

export default VideoPlayer;