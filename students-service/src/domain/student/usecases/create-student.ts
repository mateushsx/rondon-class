import { IStudent, IStudentDTO } from '../entity';

export interface ICreateStudentUseCase {
  perform: (student: IStudentDTO) => Promise<IStudent | Error>;
}
