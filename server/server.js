import express from 'express';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('Start point...');
  res.render('index');
});

app.listen(PORT);
