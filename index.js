const express = require('express');
var cors = require('cors')
const createBoxMesh = require('./mesh');
const parseSizesFromGet = require('./parseSize');
const checkRequestSizes = require('./check');
const USERS_DATA = require('./user-and-sevices');

const PORT = process.env.PORT || 3020;

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

app.get('/forms', cors(corsOptions), (req, res) => {

    res.status(200).json(USERS_DATA);
})

app.listen(PORT, () => {
  console.log('Server has being started...');
});
