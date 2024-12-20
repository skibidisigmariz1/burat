document.addEventListener('DOMContentLoaded', (event) => {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSources = [
        'random.mp4',
        '',
        ''
    ];
    let currentVideoIndex = 0;

    videoPlayer.src = videoSources[currentVideoIndex];

    videoPlayer.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        videoPlayer.src = videoSources[currentVideoIndex];
        videoPlayer.play();
    });

    videoPlayer.play();
});
