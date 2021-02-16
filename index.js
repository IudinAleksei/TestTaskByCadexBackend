const express = require('express');
var cors = require('cors')
const fs = require('fs');
const createBoxMesh = require('./mesh');
const parseSizesFromGet = require('./parseSize');
const checkRequestSizes = require('./check');
const USERS_DATA = require('./user-and-sevices');

const PORT = process.env.PORT || 3020;

const fileDB = 'db.json';

const app = express();

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  const sizes = parseSizesFromGet(req.url);
  if (checkRequestSizes(sizes)) {
    const triangles = createBoxMesh(sizes);

    res.status(200).json(triangles);
  } else {
    res.status(400).send('Incorrect box sizes');
  }
})

//ng-user-forms endpoints

const readJson = () => {
  const rawdata = fs.readFileSync(fileDB);
  const data = JSON.parse(rawdata);

  return data;
}

const writeJson = (fullFileBody) => {
  const data = JSON.stringify(fullFileBody, undefined, 2);
  fs.writeFileSync('student-2.json', data);
}

app.use(express.json());

app.route('/forms/:field')
  .get((req, res) => {
      const responseData = readJson()[req.params.field];

      res.status(200).json(responseData);
  })
  .post((req, res) => {
    // console.log('base: ', req.body);
    // writeJson(req.body);

    res.status(200).json(req.body);
})

app.route('/forms/:field/:id')
  .get((req, res) => {
      console.log('spec:', req.params);
      const responseData = readJson()[req.params.field][req.params.id-1];
      if (responseData) {
        res.status(200).json(responseData);
      } else {
        res.status(404).send({message: 'Not found'});
      }


  })
  .patch((req, res) => {
    const input = readJson();
    input[req.params.field][req.params.id-1] = req.body;
    writeJson(input);
    // console.log('spec patch:', req.params, req.body);
    res.status(200).json(req.body);
})

app.listen(PORT, () => {
  console.log('Server has being started...');
});
