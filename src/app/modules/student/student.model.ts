import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, student } from './student.interface';

const userNameSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
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

const localGuardian = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  adress: { type: String, required: true },
});

const studentSchema = new Schema<student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGrp: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  presentAdress: { type: String, required: true },
  parmanentAdress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardian,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});


// Create a Model.
