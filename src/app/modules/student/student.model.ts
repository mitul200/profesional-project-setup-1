import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student } from './student.interface';

const userNameSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required!'],
    validate: {
      validator: function (value: string) {
        const firstNameStr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstNameStr === value;
      },
      message: '{VALUE} is not contain alphabetic characters and spaces!',
    },
    minlength: [
      6,
      'First Name must be at least 6 characters long, got {VALUE}',
    ],
    maxlength: [10, 'First Name cannot exceed 10 characters'],
  },
  middleName: {
    type: String,
    trim: true,
    required: [true, 'Middle Name is required!'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required!'],
  },
});

// Define the Guardian schema
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is required!'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father Occupation is required!'],
  },
  fatherContuctNumber: {
    type: String,
    trim: true,
    required: [true, 'Father Contact Number is required!'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother Name is required!'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Mother Occupation is required!'],
  },
  motherContuctNumber: {
    type: String,
    trim: true,
    required: [true, 'Mother Contact Number is required!'],
  },
});

// Define the LocalGuardian schema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian Name is required!'],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian Occupation is required!'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian Contact Number is required!'],
  },
  adress: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian Address is required!'],
  },
});

// Define the Student schema
const studentSchema = new Schema({
  id: {
    type: String,
    trim: true,
    required: [true, 'Student ID is required!'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required!'],
  },
  gender: {
    type: String,
    trim: true,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        '{VALUE} is not supported. Gender must be one of: male, female, other',
    },
    required: [true, 'Gender is required!'],
  },
  dateOfBirth: {
    type: String,
    trim: true,
    required: [true, 'Date of Birth is required!'],
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is required!'],
    unique: true,
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact Number is required!'],
  },
  emergencyContactNumber: {
    type: String,
    trim: true,
    required: [true, 'Emergency Contact Number is required!'],
  },
  bloodGrp: {
    type: String,
    trim: true,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      message: '{VALUE} is not a valid blood group.',
    },
  },
  presentAdress: {
    type: String,
    trim: true,
    required: [true, 'Present Address is required!'],
  },
  parmanentAdress: {
    type: String,
    trim: true,
    required: [true, 'Permanent Address is required!'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required!'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian information is required!'],
  },
  profileImg: {
    type: String,
    trim: true,
  },
  isActive: {
    type: String,
    trim: true,
    enum: {
      values: ['active', 'blocked'],
      message:
        '{VALUE} is not supported. Status must be either active or blocked',
    },
    default: 'active',
  },
});

// Create a Model.

export const StudentModel = model<Student>('Student', studentSchema);
