import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const { PORT } = process.env;

app.listen({ port: PORT }, async () => {
  console.log(`app listening on port ${PORT}!`);
});

export default app;
