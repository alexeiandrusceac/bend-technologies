const express = require('express');
const fs = require('fs');
const app = express();

// start the server
const port = 3000;
// define the data for the Thing and Area arrays
const things = JSON.parse(fs.readFileSync('assets/json/things.json'));
const areas = JSON.parse(fs.readFileSync('assets/json/areas.json'));

// create a GET route for the /api/things endpoint
app.get('/api/things', (req, res) => {
  res.json(things);
});

// create a GET route for the /api/areas endpoint
app.get('/api/areas', (req, res) => {
  res.json(areas);
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
