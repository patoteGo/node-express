const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = mongoose.connect('mongodb://localhost/bookAPI');
const app = express();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', bookRouter);

app.get('/', (req, res) => {
	res.send('welcome to my API2!');
});

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});
