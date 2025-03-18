/* eslint-disable prettier/prettier */
import { TAcadamicSemester } from "./acadamicSemester.interface";
import { AcadamicSemesterModel } from "./acadamicSemester.model";

const createAcadamicSemesterIntoDB = async (payload: TAcadamicSemester) => {
  const result = await AcadamicSemesterModel.create(payload);
  return result
};

export const AcadamicSemesterServices = {
  createAcadamicSemesterIntoDB,
};
