document.addEventListener('DOMContentLoaded', async () => {
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSource = document.getElementById('videoSource');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  let videoList = [];
  let currentIndex = 0;

  // Fetch video list from the API
  async function fetchVideoList() {
    try {
      const response = await fetch('https://betadash-shoti-yazky.vercel.app/');
      const data = await response.json();
      videoList = data.videos; // Adjust according to your API response structure
      if (videoList.length > 0) {
        loadVideo(currentIndex);
      }
    } catch (error) {
      console.error('Error fetching video list:', error);
    }
  }

  // Load video by index
  function loadVideo(index) {
    videoSource.src = videoList[index];
    videoPlayer.load();
  }

  // Event listeners for buttons
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      loadVideo(currentIndex);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < videoList.length - 1) {
      currentIndex++;
      loadVideo(currentIndex);
    }
  });

  // Initial fetch of video list
  fetchVideoList();
});
