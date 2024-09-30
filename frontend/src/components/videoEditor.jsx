import React from 'react';
import useVideoEditor from '../hooks/useVideoEditor';
import VideoPlayer from './VideoPlayer';

const VideoEditor = () => {
    const {
        outputVideo,
        isReady,
        startTime,
        endTime,
        handleVideoChange,
        handleCutVideo,
        setStartTime,
        setEndTime,
    } = useVideoEditor();

    return (
        <div>
            <h1>Video Editor</h1>
            <input type="file" accept="video/*" onChange={handleVideoChange} />
            <div>
                <label>Start Time:</label>
                <input type="text" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                <label>End Time:</label>
                <input type="text" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </div>
            <button onClick={handleCutVideo} disabled={!isReady}>Cut Video</button>
            {outputVideo && <VideoPlayer src={outputVideo} />}
        </div>
    );
};

export default VideoEditor;
