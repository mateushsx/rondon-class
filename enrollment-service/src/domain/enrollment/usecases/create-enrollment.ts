import { IEnrollmentDTO, IEnrollment } from '../entity';

export interface ICreateEnrollmentUseCase {
  perform: (enrollment: IEnrollmentDTO) => Promise<IEnrollment | Error>;
}
