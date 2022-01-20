require('dotenv').config();
const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
