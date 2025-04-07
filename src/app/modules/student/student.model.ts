import { Schema, model } from "mongoose";

import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
} from "./student.interface";
import validator from "validator";

const userNameSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "First Name is required!"],
    validate: {
      validator: function (value: string) {
        const firstNameStr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstNameStr === value;
      },
      message: "{VALUE} is not contain alphabetic characters and spaces!",
    },
    minlength: [
      6,
      "First Name must be at least 6 characters long, got {VALUE}",
    ],
    maxlength: [10, "First Name cannot exceed 10 characters"],
  },
  middleName: {
    type: String,
    trim: true,
    required: [true, "Middle Name is required!"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last Name is required!"],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "{VALUE} is not valid please try another name",
    },
  },
});

// Define the Guardian schema
const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father Name is required!"],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father Occupation is required!"],
  },
  fatherContuctNumber: {
    type: String,
    trim: true,
    required: [true, "Father Contact Number is required!"],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, "Mother Name is required!"],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, "Mother Occupation is required!"],
  },
  motherContuctNumber: {
    type: String,
    trim: true,
    required: [true, "Mother Contact Number is required!"],
  },
});

// Define the LocalGuardian schema
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, "Local Guardian Name is required!"],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, "Local Guardian Occupation is required!"],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, "Local Guardian Contact Number is required!"],
  },
  adress: {
    type: String,
    trim: true,
    required: [true, "Local Guardian Address is required!"],
  },
});

// Define the Student schema
const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      trim: true,
      required: [true, "Student ID is required!"],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User ID must be required"],
      unique: true,
      ref: "User",
    },
    name: {
      type: userNameSchema,
      required: [true, "Name is required!"],
    },
    gender: {
      type: String,
      trim: true,
      enum: {
        values: ["male", "female", "other"],
        message:
          "{VALUE} is not supported. Gender must be one of: male, female, other",
      },
      required: [true, "Gender is required!"],
    },
    dateOfBirth: {
      type: Date,
      trim: true,
      required: [true, "Date of Birth is required!"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required!"],
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: "{VALUE} is not validate plese try again ",
      },
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: "AcademicSemester",
    },
    contactNo: {
      type: String,
      trim: true,
      required: [true, "Contact Number is required!"],
    },
    emergencyContactNumber: {
      type: String,
      trim: true,
      required: [true, "Emergency Contact Number is required!"],
    },
    bloodGrp: {
      type: String,
      trim: true,
      enum: {
        values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        message: "{VALUE} is not a valid blood group.",
      },
    },
    presentAdress: {
      type: String,
      trim: true,
      required: [true, "Present Address is required!"],
    },
    parmanentAdress: {
      type: String,
      trim: true,
      required: [true, "Permanent Address is required!"],
    },
    guardian: {
      type: guardianSchema,
      required: [true, "Guardian information is required!"],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, "Local Guardian information is required!"],
    },
    profileImg: {
      type: String,
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

studentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName}  ${this.name.middleName}  ${this.name.lastName}`;
});

// query middleware

studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// Aggregate
studentSchema.pre("aggregate", function (next) {
  // this.find({ isDeleted: { $ne: true } });
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// Create a Model.
export const Student = model<TStudent, StudentModel>("Student", studentSchema);
