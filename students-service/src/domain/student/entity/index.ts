import { randomUUID } from 'node:crypto';

export type IStudentDTO = {
  name: string;
  age: number;
  email: string;
};

export type IStudent = IStudentDTO & {
  id: string;
};

export class Student {
  public student: IStudent;

  constructor(props: IStudentDTO) {
    this.student = {
      ...props,
      id: randomUUID(),
    };
  }
}
