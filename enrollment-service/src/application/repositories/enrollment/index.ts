import { IEnrollment } from '~/domain/enrollment/entity';

export interface IEnrollmentRepository {
  create(enrollment: IEnrollment): Promise<void>;
}
