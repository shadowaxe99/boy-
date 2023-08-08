// Add your server code here

// Example code
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Investor Experience Platform!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});