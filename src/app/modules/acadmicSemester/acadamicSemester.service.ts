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

 
const getAllAcadamicSemesterIntoDB = async () => {
  const result = await AcadamicSemesterModel.find();
  return result;
};


const getSingleAcadamicSemester = async (id:string)=>{
  const result = await AcadamicSemesterModel.findById(id)
  return result
}


const updateAcadamicSemesterIntoDB = async(id:string,payload:Partial<TAcadamicSemester>) =>{
  if(payload.name&& payload.code&&acadamicSemesterNameCodeMaper[payload.name] !== payload.code){
    throw new Error("Invalid semester code")
  }
    
  const result = await AcadamicSemesterModel.findByIdAndUpdate({_id:id},payload,{
    new:true
  })
  return result
}
export const AcadamicSemesterServices = {
  createAcadamicSemesterIntoDB,
  getAllAcadamicSemesterIntoDB,
  getSingleAcadamicSemester,
  updateAcadamicSemesterIntoDB
};
