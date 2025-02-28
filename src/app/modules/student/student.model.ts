import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student } from './student.interface';

const userNameSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required !'],
  },
  middleName: {
    type: String,
    required: [true, 'Middle Name is required !'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required !'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContuctNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContuctNumber: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  adress: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGrp: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAdress: { type: String, required: true },
  parmanentAdress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: `{VALUE} is not supported Gender field can be one of following 'male','female','other'`,
    },
    default: 'active',
  },
});

// Create a Model.

export const StudentModel = model<Student>('Student', studentSchema);
