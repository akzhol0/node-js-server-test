import express from 'express';
const router = express.Router();

router.get('/users/', (req, res) => {
  res.send('users list');
});

router.get('/users/new', (req, res) => {
  res.send('User New');
});