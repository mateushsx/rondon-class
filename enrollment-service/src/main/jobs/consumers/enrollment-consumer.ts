import { randomUUID } from 'crypto';
import { CreateEnrollmentUseCase } from '~/application/usecases/enrollment';
import { PrismaEnrollmentRepository } from '~/infrastructure/repositories/prisma';
import { AmqpMessagingService } from '~/infrastructure/services/rabbitmq';

const messagingService = new AmqpMessagingService();

export async function enrollmentConsumer() {
  await messagingService.connect();

  await messagingService.consume('newstudent', (message) => {
    const enrollmentRepository = new PrismaEnrollmentRepository();
    const createEnrollmentUseCase = new CreateEnrollmentUseCase(
      enrollmentRepository
    );

    createEnrollmentUseCase.perform({
      courseId: randomUUID(),
      enrollmentDate: new Date(),
      studentId: message.id,
    });
  });
}
