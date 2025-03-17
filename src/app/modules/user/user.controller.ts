import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const creatStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserServices.creatStudentIntroDB(password, studentData);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'stdent creat successfully',
    data: result,
  });

  // send response
});

export const UserController = {
  creatStudent,
};
