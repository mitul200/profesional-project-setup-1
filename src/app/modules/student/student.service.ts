import { Student } from './student.interface';
import { StudentModel } from './student.model';

// service hocche buissness logic
// creatStudentIntroDB disi jeno amra bujte pari creat student kortesi

const creatStudentIntroDB = async (student: Student) => {
  // database ar query kar upore cholbe model ar upore
  const result = await StudentModel.create(student);
  return result;
};

export const studentService ={
  creatStudentIntroDB
}
