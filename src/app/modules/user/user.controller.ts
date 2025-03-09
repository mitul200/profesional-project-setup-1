import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const creatStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserServices.creatStudentIntroDB(
      password,
      studentData,
    );
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
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
