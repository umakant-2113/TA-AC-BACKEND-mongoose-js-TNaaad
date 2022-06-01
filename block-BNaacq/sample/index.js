let express = require('express');
let mongoose = require('mongoose');

let app = express();

// mongoose  connection
mongoose.connect('mongodb://127.0.0.1/sample', (err) => {
  console.log(err ? err : 'mongoose are connected');
});

// middleware
app.use(express.json());

let Article = require('./modles/article');
let Comment = require('./modles/comment');
let User = require('./modles/user');

// routes
app.get('/', (req, res) => {
  res.send('welcome to express');
});

// creat Schema
app.post('/article', (req, res) => {
  console.log(req.body);
  Article.create(req.body, (err, article) => {
    res.json(article);
    console.log(err, article);
  });
});

// server
app.listen(3000, () => {
  console.log('server on listing on 3k ');
});
