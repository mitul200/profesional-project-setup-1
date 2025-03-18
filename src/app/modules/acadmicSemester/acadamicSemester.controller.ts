/* eslint-disable prettier/prettier */
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createAcadamicSemester = catchAsync(async (req, res) => {
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Student data deleted successfully",
    data: result,
  });
});

export const AcadamicSemesterController = {
  createAcadamicSemester,
};
