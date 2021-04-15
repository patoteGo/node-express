const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {
    const response = { hello: 'this is my books API' };
    res.json(response);
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('welcome to my API2!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
