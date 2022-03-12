import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // We're telling express to use CORS
app.use(express.json()); // we need to tell server to use json as well

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is listening to port 4000');
});
