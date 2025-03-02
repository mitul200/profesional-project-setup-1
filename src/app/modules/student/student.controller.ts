import { Request, Response } from 'express';
import { studentService } from './student.service';
import studentValidationSchema from './student.zodValidation';

// *** controller ar kaj hocche req nibe ar response pathabe *** ??

// client theke amra 3 vabe data ante pari 1) params 2)query 3)body diye
const creatStudent = async (req: Request, res: Response) => {
  // data client theke body er moddhome ansi
  try {
    const { student: studentData } = req.body;

    const zodParsedData = studentValidationSchema.parse(studentData);
    console.log(zodParsedData);

    const result = await studentService.creatStudentIntroDB(zodParsedData);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something wants wrong',
    //     error: error.details,
    //   });
    // }

    // student name ei data ta amra service k diye dibo
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Students retrive successfully 2nd time',
      error: err,
    });
  }
  // send response
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(500).json({
      success: true,
      message: 'Students retrive successfully 2nd time',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Students retrive successfully 2nd time',
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: ' Single Students info retrive successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
  creatStudent,
  getAllStudent,
  getSingleStudent,
};
