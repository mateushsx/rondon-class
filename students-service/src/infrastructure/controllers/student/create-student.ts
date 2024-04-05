import { IController } from '~/infrastructure/protocols';
import { ICreateStudentUseCase } from '~/domain/student/usecases';

export class CreateStudentController implements IController {
  constructor(private readonly createStudentUseCase: ICreateStudentUseCase) {}

  async execute({
    request,
    response,
  }: IController.Input): Promise<IController.Output> {
    const payload = request.body;
    if (JSON.stringify(payload) === '{}') {
      return response.status(204).json({ message: 'payload is empty' });
    }

    const student = await this.createStudentUseCase.perform(payload);

    if (student instanceof Error) {
      return response.status(500).json({
        message: 'Error create student',
      });
    }

    return response.status(200).json({ student });
  }
}
