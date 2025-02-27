import { Request, Response } from 'express';
import { studentService } from './student.service';

// *** controller ar kaj hocche req nibe ar response pathabe *** ??

// client theke amra 3 vabe data ante pari 1) params 2)query 3)body diye
const creatStudent = async (req: Request, res: Response) => {
  // data client theke body er moddhome ansi
  try {
    const student = req.body;
    const result = await studentService.creatStudentIntroDB(student);
    // student name ei data ta amra service k diye dibo
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
  // send response
};

export const studentContollers = {
  creatStudent,
};
