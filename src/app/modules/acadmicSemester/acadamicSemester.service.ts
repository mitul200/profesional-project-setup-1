/* eslint-disable prettier/prettier */
import { acadamicSemesterNameCodeMaper } from "./acadamicSemester.constans";
import { TAcadamicSemester } from "./acadamicSemester.interface";
import { AcadamicSemesterModel } from "./acadamicSemester.model";

const createAcadamicSemesterIntoDB = async (payload: TAcadamicSemester) => {

  if(acadamicSemesterNameCodeMaper[payload.name] !== payload.code){
    throw new Error("Invalid Semester Code")
  }
  const result = await AcadamicSemesterModel.create(payload);
  return result
};

export const AcadamicSemesterServices = {
  createAcadamicSemesterIntoDB,
};
