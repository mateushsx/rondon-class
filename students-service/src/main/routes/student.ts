import { Router } from 'express';
import { createStudentFactory } from '../factories/student/create-student-factory';

const studentRoutes = Router();

studentRoutes.post('/create', createStudentFactory);

export { studentRoutes };
