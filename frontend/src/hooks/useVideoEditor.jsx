// src/hooks/useVideoEditor.js

import { useState, useEffect } from 'react';
import { loadFFmpeg, cutVideo } from '../services/ffmpegService';

const useVideoEditor = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [outputVideo, setOutputVideo] = useState('');
    const [startTime, setStartTime] = useState('00:00:00');
    const [endTime, setEndTime] = useState('00:00:10');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const initializeFFmpeg = async () => {
            await loadFFmpeg();
            setIsReady(true);
        };

        initializeFFmpeg();
    }, []);

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        setVideoFile(file);
    };

    const handleCutVideo = async () => {
        if (videoFile) {
            const videoURL = await cutVideo(videoFile, startTime, endTime);
            setOutputVideo(videoURL);
        }
    };

    return {
        videoFile,
        outputVideo,
        isReady,
        startTime,
        endTime,
        handleVideoChange,
        handleCutVideo,
        setStartTime,
        setEndTime,
    };
};

export default useVideoEditor;
