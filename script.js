document.addEventListener('DOMContentLoaded', (event) => {
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSources = [
    'random.mp4',
    'random1.mp4',
    'random2.mp4',
    'random3.mp4'// Add more video files here
  ];
  let currentVideoIndex = 0;

  videoPlayer.src = videoSources[currentVideoIndex];

  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

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

  videoPlayer.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
  });

  videoPlayer.play();
});
