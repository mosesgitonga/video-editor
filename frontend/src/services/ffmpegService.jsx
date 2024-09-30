// src/services/ffmpegService.jsx
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({
    log: true,
    corePath: 'https://unpkg.com/@ffmpeg/core@latest/dist/ffmpeg-core.js',
});


export const loadFFmpeg = async () => {
    if (!ffmpeg) {
        const ffmpeg = createFFmpeg({ log: true });
        console.log(ffmpeg)
        await ffmpeg.load();
    }
};

export const cutVideo = async (videoFile, startTime, endTime) => {
    try {
        await loadFFmpeg();
    } catch (error) {
        console.error("Error loading FFmpeg:", error);
        throw new Error("FFmpeg failed to load.");
    }
    
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoFile));
    await ffmpeg.run('-i', 'input.mp4', '-ss', startTime, '-to', endTime, '-c', 'copy', 'output.mp4');

    const data = ffmpeg.FS('readFile', 'output.mp4');
    return URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
};
