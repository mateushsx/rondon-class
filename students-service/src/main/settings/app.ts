import cors from 'cors';
import express from 'express';

import { studentRoutes } from '../routes/student';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/student', studentRoutes);

app.get('/', (req, res) => res.send('This student service OK!'));

export { app };
