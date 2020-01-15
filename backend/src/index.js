import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose
  .connect(
    'mongodb+srv://omnistack:omnistack@cluster0-v8pzm.gcp.mongodb.net/week10?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(null);

app.use(express.json());
app.use(routes);

app.listen(3333);
