import { randomUUID } from 'crypto';

export type IEnrollmentDTO = {
  courseId: string;
  studentId: string;
  enrollmentDate: Date;
};

export type IEnrollment = IEnrollmentDTO & {
  id: string;
};

export class Enrollment {
  public enrollment: IEnrollment;

  constructor(props: IEnrollmentDTO) {
    this.enrollment = {
      ...props,
      id: randomUUID(),
    };
  }
}
