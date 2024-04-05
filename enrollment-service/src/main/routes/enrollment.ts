import { Router } from 'express';
import { createEnrollmentFactory } from '../factories/enrollment';

const enrollmentRoutes = Router();

enrollmentRoutes.get('/create', createEnrollmentFactory);

export { enrollmentRoutes };
