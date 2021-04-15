const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('welcome to my API2!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
