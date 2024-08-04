import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import Movies from '../model/movie';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const { PORT } = process.env;

app.listen({ port: PORT }, async () => {
  console.log(`app listening on port ${PORT}!`);

  const allMovies = await Movies.find();

  console.log('\nallMovies', allMovies);
});

export default app;
