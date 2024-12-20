document.addEventListener('DOMContentLoaded', (event) => {
    const videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.addEventListener('play', () => {
        console.log('Video is playing');
    });

    videoPlayer.addEventListener('pause', () => {
        console.log('Video is paused');
    });

    videoPlayer.addEventListener('ended', () => {
        console.log('Video has ended');
    });
});
