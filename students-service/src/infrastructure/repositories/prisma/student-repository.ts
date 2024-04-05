import { prisma } from './index';
import { IStudent } from '~/domain/student/entity';
import { IStudentRepository } from '~/application/repositories/student';

export class PrismaStudentRepository implements IStudentRepository {
  public async create(student: IStudent): Promise<void> {
    await prisma.student.create({
      data: { ...student },
    });
  }
}
