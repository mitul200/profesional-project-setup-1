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
    type: String,
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



AcadamicSemesterSchema.pre('save', async function(next){
const isSemesterExists = await AcadamicSemesterModel.findOne({
  name:this.name,
  year:this.year,
})
if(isSemesterExists){
  throw new Error('semester is already exiest')
}
next()
})

// Create the Mongoose model
export const AcadamicSemesterModel = model<TAcadamicSemester>(
  "AcadamicSemester",
  AcadamicSemesterSchema,
);
