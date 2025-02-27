import { Student } from './student.interface';
import { StudentModel } from './student.model';

// service hocche buissness logic
// creatStudentIntroDB disi jeno amra bujte pari creat student kortesi

const creatStudentIntroDB = async (student: Student) => {
  // database ar query kar upore cholbe model ar upore
  const result = await StudentModel.create(student);
  return result;
};

// get all students
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get single student

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

// const getAllStudentsFromDB = async () => {
//   const result = await StudentModel.find();
//   return result;
// };

export const studentService = {
  creatStudentIntroDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
