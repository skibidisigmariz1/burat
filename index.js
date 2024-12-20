const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the public directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Tite is listening at http://localhost:${port}`);
});
