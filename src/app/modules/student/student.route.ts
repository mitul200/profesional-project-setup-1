import express from 'express';
import { studentContollers } from './student.controller';

const router = express.Router();

// will call contorllar
router.post('/create-student', studentContollers.creatStudent);

router.get('/', studentContollers.getAllStudent);

router.get('/:studentId', studentContollers.getSingleStudent);

// router.get('/',studentContollers.getAllStudent)

export const studentRouter = router;
// route => controller => services
