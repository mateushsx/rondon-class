import cors from 'cors';
import express from 'express';

import { enrollmentRoutes } from '../routes/enrollment';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/enrollment', enrollmentRoutes);

app.get('/', (req, res) => res.send('This enrollment service OK!'));

export { app };
