const express = require('express');
const fs = require('fs');
const app = express();

// start the server
const port = 3000;
// define the data for the Thing and Area arrays
const things = JSON.parse(fs.readFileSync('assets/json/things.json'));
const areas = JSON.parse(fs.readFileSync('assets/json/areas.json'));

// create default route for welcome page
app.get('/', (req, res) => {
  res.send(
    '<h1 style="text-align:center;font-weight:600;margin:20px;">This is default page back-end server</h1><br/>' +
      '<h4><a href="/api/things" target="_self">things</a> - To view things data from json</h4>' +
      '<h4><a href="/api/areas" target="_self">areas</a> - To view areas data from json</a></h4>'
  );
});
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
