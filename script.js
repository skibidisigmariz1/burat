document.addEventListener('DOMContentLoaded', (event) => {
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSources = [
    'random.mp4',
    'random1.mp4',
    'random2.mp4',
    'random3.mp4',
    'random4.mp4'// Add more video files here
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

  const toggleDarkModeButton = document.getElementById('toggleDarkMode');
  toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });

  // Snow effect
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.getElementById('snowContainer').appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, (Math.random() * 3 + 2) * 1000);
  }

  setInterval(createSnowflake, 100);
});
