import { IController } from '~/infrastructure/protocols';
import { ICreateEnrollmentUseCase } from '~/domain/enrollment/usecases';

export class CreateEnrollmentController implements IController {
  constructor(
    private readonly createStudentUseCase: ICreateEnrollmentUseCase
  ) {}

  async execute({
    request,
    response,
  }: IController.Input): Promise<IController.Output> {
    const payload = request.body;
    if (JSON.stringify(payload) === '{}') {
      return response.status(204).json({ message: 'payload is empty' });
    }

    const enrollment = await this.createStudentUseCase.perform(payload);

    if (enrollment instanceof Error) {
      return response.status(500).json({
        message: 'Error create enrollment',
      });
    }

    return response.status(200).json({ enrollment });
  }
}
