import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import routes from './routes';
import { setupWebSocket } from './websocket';

const app = express();
const server = http.Server(app);
setupWebSocket(server);

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

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
