/* eslint-disable prettier/prettier */
import {model, Schema } from "mongoose";
import { TAcadamicSemester} from "./acadamicSemester.interface";
import { AcadamicSemesterCode, AcadamicSemesterName, Months } from "./acadamicSemester.constans";


// Define the Mongoose schema
const AcadamicSemesterSchema = new Schema<TAcadamicSemester>({
  name: {
    type: String,
    required: true,
    enum: AcadamicSemesterName, // Ensures only these values are allowed
  },
  code: {
    type: String,
    required: true,
    enum: AcadamicSemesterCode, // Ensures only these values are allowed
  },
  year: {
    type: Date,
    required: true,
  },
  startMonth: {
    type: String,
    required:true,
    enum: Months // Ensures only valid months are allowed
  },
  endMonth: {
    type: String,
    required: true,
    enum: Months // Ensures only valid months are allowed
  },
},{
  timestamps:true
});

// Create the Mongoose model
export const AcadamicSemesterModel = model<TAcadamicSemester>(
  "AcadamicSemester",
  AcadamicSemesterSchema,
);
