const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  console.log(req.url);
  res.send(req.url);
})

app.listen(PORT, () => {
  console.log('Server has being');
});
