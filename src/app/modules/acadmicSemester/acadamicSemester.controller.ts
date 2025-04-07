/* eslint-disable prettier/prettier */
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcadamicSemesterServices } from "./acadamicSemester.service";

const createAcadamicSemester = catchAsync(async (req, res) => {
const result = await AcadamicSemesterServices.createAcadamicSemesterIntoDB(req.body)
    sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Acadamic semester created successfully !!",
    data: result,
  });
});

const getAllAcadamicSemester = catchAsync(async (req, res) => {
  const result = await AcadamicSemesterServices.getAllAcadamicSemesterIntoDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Students retrive successfully !!",
    data: result,
  });
});

const getSingleAcadamicSemester = catchAsync(async(req,res)=>{
  const {semesterId} = req.params
  const result = await AcadamicSemesterServices.getSingleAcadamicSemester(semesterId)
  sendResponse(res,{
    statusCode:status.OK,
    success: true,
    message: "single Students retrive successfully !!",
    data: result,
  })
})

const updateAcadamicSemester = catchAsync(async(req,res)=>{
  const {semesterId} = req.params
  const result = await AcadamicSemesterServices.updateAcadamicSemesterIntoDB(semesterId,req.body)
  sendResponse(res,{
    statusCode:status.OK,
    success: true,
    message: " Students update  successfully !!",
    data: result,
  })
})

 

export const AcadamicSemesterController = {
  createAcadamicSemester,
  getAllAcadamicSemester,
  getSingleAcadamicSemester,
  updateAcadamicSemester
};
