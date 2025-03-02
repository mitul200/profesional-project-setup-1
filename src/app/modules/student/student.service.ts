import { TStudent } from './student.interface';
import { Student } from './student.model';

// service hocche buissness logic
// creatStudentIntroDB disi jeno amra bujte pari creat student kortesi

const creatStudentIntroDB = async (studentData: TStudent) => {
  // database ar query kar upore cholbe model ar upore
  // const result = await Student.create(student); //built in static method

  const student = new Student(studentData);
  if (await student.isUserExists(studentData.id)) {
    throw new Error('User already exists');
  }

  const result = await student.save(); // built in instance method
  return result;
};

// get all students
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

// get single student

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

// const getAllStudentsFromDB = async () => {
//   const result = await Student.find();
//   return result;
// };

export const studentService = {
  creatStudentIntroDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
