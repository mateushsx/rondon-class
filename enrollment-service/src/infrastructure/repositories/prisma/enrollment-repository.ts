import { prisma } from './index';
import { IEnrollment } from '~/domain/enrollment/entity';
import { IEnrollmentRepository } from '~/application/repositories/enrollment';

export class PrismaEnrollmentRepository implements IEnrollmentRepository {
  public async create(enrollment: IEnrollment): Promise<void> {
    await prisma.enrollment.create({
      data: { ...enrollment },
    });
  }
}
