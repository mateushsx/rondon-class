import { IStudent } from '~/domain/student/entity';

export interface IStudentRepository {
  create(student: IStudent): Promise<void>;
}
