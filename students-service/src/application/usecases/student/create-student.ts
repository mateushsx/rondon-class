import { IStudentDTO, Student } from '~/domain/student/entity';
import { ICreateStudentUseCase } from '~/domain/student/usecases';
import { IMessagingService } from '~/application/services/messaging';
import { IStudentRepository } from '~/application/repositories/student';

export class CreateStudentUseCase implements ICreateStudentUseCase {
  public constructor(
    private studentRepository: IStudentRepository,
    private messagingService: IMessagingService
  ) {}

  public async perform(studentDTO: IStudentDTO) {
    const { student } = new Student(studentDTO);

    if (student) {
      await this.studentRepository.create(student);

      await this.messagingService.connect();
      await this.messagingService.publishInQueue('newstudent', student);
      await this.messagingService.close();

      return student;
    } else {
      throw new Error('error-create-student');
    }
  }
}
