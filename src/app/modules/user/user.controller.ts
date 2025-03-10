import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const creatStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserServices.creatStudentIntroDB(
      password,
      studentData,
    );
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'stdent creat successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
  // send response
};

export const UserController = {
  creatStudent,
};
