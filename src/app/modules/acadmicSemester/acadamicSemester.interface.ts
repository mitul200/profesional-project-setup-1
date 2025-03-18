/* eslint-disable prettier/prettier */

type TMonths =
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

 export type TAcadamicSemesterName = "Autumn"|"Summar"|"Fall"
 export type TAcadamicSemesterCode = "01"|"02"|"03"

export type TAcadamicSemester = {
  name: TAcadamicSemesterName
  code:TAcadamicSemesterCode
  year:Date
  startMonth:TMonths
  endMonth:TMonths
};
