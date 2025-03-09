import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const creatStudentIntroDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  // if password is not gicven then given a default password
  userData.password = password || (config.default_password as string);
  // set role
  userData.role = 'student';
  // set id
  userData.id = '20300001';
  // creat a student
  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //referance id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  return newUser;
};
export const UserServices = { creatStudentIntroDB };
