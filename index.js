const express = require('express');
var cors = require('cors')
const createBoxMesh = require('./mesh');
const parseSizesFromGet = require('./parseSize');
const checkRequestSizes = require('./check');

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.get('/', cors(corsOptions), (req, res) => {
  const sizes = parseSizesFromGet(req.url);
  if (checkRequestSizes(sizes)) {
    const triangles = createBoxMesh(sizes);

    res.status(200).json(triangles);
  } else {
    res.status(400).send('Incorrect box sizes');
  }


})

app.listen(PORT, () => {
  console.log('Server has being started...');
});
