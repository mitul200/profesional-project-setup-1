import express from 'express';
import { studentContollers } from './student.controller';

const router = express.Router();

// will call contorllar

router.get('/', studentContollers.getAllStudent);

router.get('/:studentId', studentContollers.getSingleStudent);

router.delete('/:studentId', studentContollers.deleteStudent);

// router.get('/',studentContollers.getAllStudent)

export const studentRouter = router;
// route => controller => services
