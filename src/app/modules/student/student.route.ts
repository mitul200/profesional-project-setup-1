import express from 'express';
import { studentContollers } from './student.controller';

const router = express.Router();

// will call contorllar
router.post('/creata-data', studentContollers.creatStudent);


// route => controller => services