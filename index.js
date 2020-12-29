const express = require('express');
const createBoxMesh = require('./mesh');
const parseSizesFromGet = require('./parseSize');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  const sizes = parseSizesFromGet(req.url);
  const triangles = createBoxMesh(sizes);

  res.send(triangles);
})

app.listen(PORT, () => {
  console.log('Server has being started...');
});
