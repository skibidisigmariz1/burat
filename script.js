document.addEventListener('DOMContentLoaded', (event) => {
  const videoContainer = document.getElementById('videoContainer');

  const videoPlayer = document.createElement('video');
  videoPlayer.setAttribute('id', 'videoPlayer');
  videoPlayer.setAttribute('width', '600');
  videoPlayer.setAttribute('controls', '');

  const source = document.createElement('source');
  source.setAttribute('src', 'random.mp4', 'random1.mp4');
  source.setAttribute('type', 'video/mp4');

  videoPlayer.appendChild(source);
  videoContainer.appendChild(videoPlayer);

  // Example controls
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
