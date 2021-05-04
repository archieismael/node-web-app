'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World! This portal is run from Docker Container.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)
