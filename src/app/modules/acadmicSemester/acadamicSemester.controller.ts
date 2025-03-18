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

export const AcadamicSemesterController = {
  createAcadamicSemester,
};
