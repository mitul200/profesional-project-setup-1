/* eslint-disable prettier/prettier */
import config from "../../config";
import { AcadamicSemesterModel } from "../acadmicSemester/acadamicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const creatStudentIntroDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  // if password is not given then given a default password
  userData.password = password || (config.default_password as string);
  // set role
  userData.role = "student";

  // find academic semestar id 
 const admissionSemester = await AcadamicSemesterModel.findById(payload.admissionSemester)

 if (!admissionSemester) {
  throw new Error("Admission semester not found!");
}
  userData.id = generateStudentId(admissionSemester);
  // creat a student
  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id; //referance id

    const newStudent = await Student.create(payload);
    return newStudent;
  }
  return newUser;
};
export const UserServices = { creatStudentIntroDB };
