/* eslint-disable prettier/prettier */
import { TAcadamicSemester } from "../acadmicSemester/acadamicSemester.interface";

export const generateStudentId = (payload: TAcadamicSemester) => {
  const currentId = (0).toString()

  let incrementId = (Number(currentId)+1).toString().padStart(4,"0")

  incrementId = `${payload.year}${payload.code}${incrementId}`

  return incrementId
};
