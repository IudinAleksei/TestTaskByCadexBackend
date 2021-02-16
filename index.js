const express = require('express');
var cors = require('cors')
const fs = require('fs');
const createBoxMesh = require('./mesh');
const parseSizesFromGet = require('./parseSize');
const checkRequestSizes = require('./check');
const USERS_DATA = require('./user-and-sevices');


const PORT = process.env.PORT || 3020;

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

app.use(express.json());

app.route('/forms/:field')
  .get((req, res) => {
      // console.log('base: ', req.params);

      res.status(200).json(USERS_DATA[req.params.field]);
  })
  .post((req, res) => {
    // console.log('base: ', req.body);

    // let rawdata = fs.readFileSync('users-and-services.json');
    // let student = JSON.parse(rawdata);
    // console.log(student);

    let data = JSON.stringify(req.body, undefined, 2);
    fs.writeFileSync('student-2.json', data);
    res.status(200).json(req.body);
})

app.route('/forms/:field/:id')
  .get((req, res) => {
      // console.log('spec:', req.params);
      const data = USERS_DATA[req.params.field][req.params.id-1];
      if (data) {
        res.status(200).json(USERS_DATA[req.params.field][req.params.id-1]);
      } else {
        res.status(404).send();
      }


  })
  .post((req, res) => {
    // console.log('spec:', req.body);
    res.status(200).json(req.body);
})

app.listen(PORT, () => {
  console.log('Server has being started...');
});
