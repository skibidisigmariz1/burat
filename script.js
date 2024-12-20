document.addEventListener('DOMContentLoaded', (event) => {
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSources = [
    'random1.mp4',
    'random2.mp4',
    'random3.mp4',
    'random4.mp4',
    'random5.mp4',
    'random.mp4'// Add more video files here
  ];
  let currentVideoIndex = 0;

  videoPlayer.src = videoSources[currentVideoIndex];

  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const playButton = document.getElementById('playButton');
  const pauseButton = document.getElementById('pauseButton');

  prevButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
  });

  nextButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
  });

  playButton.addEventListener('click', () => {
    videoPlayer.play();
  });

  pauseButton.addEventListener('click', () => {
    videoPlayer.pause();
  });

  videoPlayer.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
  });

  videoPlayer.play();
});
