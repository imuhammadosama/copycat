import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(4000, () => {
  console.log('Server is listening to port 4000');
});
