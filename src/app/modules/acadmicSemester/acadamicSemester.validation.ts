/* eslint-disable prettier/prettier */
import { z } from "zod";
import { AcadamicSemesterCode, AcadamicSemesterName, Months } from "./acadamicSemester.constans";


export const creatAcadamicSemesterValidationSchema = z.object({
    body:z.object({
  name: z.enum([...AcadamicSemesterName] as [string, ...string[]]), // Ensures only these values are allowed
  code: z.enum([...AcadamicSemesterCode] as [string, ...string[]]), // Ensures only these values are allowed
  year: z.date(), // Ensures the value is a valid Date object
  startMonth: z.enum([...Months] as [string, ...string[]]), // Ensures the value is a valid month
  endMonth: z.enum([...Months] as [string, ...string[]]) // Ensures the value is a valid month
    })
})

export const AcadamicSemesterValidation = {
  creatAcadamicSemesterValidationSchema
}