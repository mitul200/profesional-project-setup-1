import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

// *** controller ar kaj hocche req nibe ar response pathabe *** ??

// client theke amra 3 vabe data ante pari 1) params 2)query 3)body diye

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Students retrive successfully !!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Single Students info retrive successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.deleteStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student data deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

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
