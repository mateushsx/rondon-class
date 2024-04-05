import { Request, Response } from 'express';
import { CreateStudentUseCase } from '~/application/usecases/student';
import { AmqpMessagingService } from '~/infrastructure/services/rabbitmq';
import { CreateStudentController } from '~/infrastructure/controllers/student';
import { PrismaStudentRepository } from '~/infrastructure/repositories/prisma';

export const createStudentFactory = async (
  request: Request,
  response: Response
) => {
  const studentRepository = new PrismaStudentRepository();
  const messagingService = new AmqpMessagingService();
  const createStudentUseCase = new CreateStudentUseCase(
    studentRepository,
    messagingService
  );
  const createStudentController = new CreateStudentController(
    createStudentUseCase
  );
  return await createStudentController.execute({ request, response });
};
