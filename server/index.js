import express from 'express';
import {PORT} from './config.js';
import cors from 'cors';
import usersRouter from './routers/user.routes.js';

const app = express();

app.use(cors());

app.use(express.json());


app.use(usersRouter);

app.listen(PORT);

console.log(`server is runnig on port ${PORT}`);