/* eslint-disable prettier/prettier */
import mongoose, { Document, Schema } from "mongoose";

// Define the TMonth type
type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

// Define the TAcadamicSemester interface
export interface TAcadamicSemester extends Document {
  name: "Autumn" | "Summar" | "Fall";
  code: "01" | "02" | "03";
  year: Date;
  startMonth: TMonth;
  endMonth: TMonth;
}

// Define the Mongoose schema
const AcadamicSemesterSchema = new Schema<TAcadamicSemester>({
  name: {
    type: String,
    required: true,
    enum: ["Autumn", "Summar", "Fall"], // Ensures only these values are allowed
  },
  code: {
    type: String,
    required: true,
    enum: ["01", "02", "03"], // Ensures only these values are allowed
  },
  year: {
    type: Date,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
    enum: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ], // Ensures only valid months are allowed
  },
  endMonth: {
    type: String,
    required: true,
    enum: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ], // Ensures only valid months are allowed
  },
},{
  timestamps:true
});

// Create the Mongoose model
export const AcadamicSemesterModel = mongoose.model<TAcadamicSemester>(
  "AcadamicSemester",
  AcadamicSemesterSchema,
);
