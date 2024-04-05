import { Request, Response } from 'express';
import { CreateEnrollmentUseCase } from '~/application/usecases/enrollment/';
import { CreateEnrollmentController } from '~/infrastructure/controllers/enrollment';
import { PrismaEnrollmentRepository } from '~/infrastructure/repositories/prisma';

export const createEnrollmentFactory = async (
  request: Request,
  response: Response
) => {
  const enrollmentRepository = new PrismaEnrollmentRepository();
  const createEnrollmentUseCase = new CreateEnrollmentUseCase(
    enrollmentRepository
  );
  const createEnrollmentController = new CreateEnrollmentController(
    createEnrollmentUseCase
  );
  return await createEnrollmentController.execute({ request, response });
};
