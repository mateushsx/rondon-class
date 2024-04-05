import { IEnrollmentDTO, Enrollment } from '~/domain/enrollment/entity';
import { ICreateEnrollmentUseCase } from '~/domain/enrollment/usecases';
import { IEnrollmentRepository } from '~/application/repositories/enrollment';

export class CreateEnrollmentUseCase implements ICreateEnrollmentUseCase {
  public constructor(private enrollmentRepository: IEnrollmentRepository) {}

  public async perform(enrollmentDTO: IEnrollmentDTO) {
    const { enrollment } = new Enrollment(enrollmentDTO);

    if (enrollment) {
      await this.enrollmentRepository.create(enrollment);

      return enrollment;
    } else {
      throw new Error('error-create-enrollment');
    }
  }
}
