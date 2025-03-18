/* eslint-disable prettier/prettier */
import {
  TAcadamicSemesterCode,
  TAcadamicSemesterName,
  TMonths,
} from "./acadamicSemester.interface";

export const Months: TMonths[] = [
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
];
export const AcadamicSemesterName: TAcadamicSemesterName[] = [
  "Autumn",
  "Summar",
  "Fall",
];
export const AcadamicSemesterCode: TAcadamicSemesterCode[] = ["01", "02", "03"];

export   const acadamicSemesterNameCodeMaper :TAcadamicSemesterNameCodeMaper = {
  Autumn:"01",
  Summar:"02",
  Fall:"03"
}
