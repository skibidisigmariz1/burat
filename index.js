const express = require('express');
const fetch = require('node-fetch'); // Add node-fetch for API calls
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the public directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/random-video', async (req, res) => {
  try {
    const url = 'https://betadash-shoti-yazky.vercel.app/shotizxx';
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ apikey: "$shipazu" })
    });
    const content = await rawResponse.json();
    res.json({ videoUrl: content.data.shotiurl });
  } catch (e) {
    console.error("Error fetching Shoti video", e);
    res.status(500).json({ error: "Error fetching Shoti video" });
  }
});

app.listen(port, () => {
  console.log(`Tite is listening at http://localhost:${port}`);
});
