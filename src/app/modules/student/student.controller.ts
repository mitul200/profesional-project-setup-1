/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, RequestHandler, NextFunction } from 'express';
import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

// *** controller ar kaj hocche req nibe ar response pathabe *** ??
// const catchAsync = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => next(err));
//   };
// };

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentsFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Students retrive successfully !!',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.getSingleStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Single Students info retrive successfully',
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.deleteStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student data deleted successfully',
    data: result,
  });
});

// const getAllStudent = async (req: Request, res: Response) => {
//   try {
//     const result = await studentService.getAllStudentsFromDB();
//     res.status(200).json({
//       success: true,
//       message: 'student retrive successfulluy',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const studentContollers = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
