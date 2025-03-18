import express from "express";
import { UserController } from "./user.controller";
import { studentValidations } from "../student/student.zodValidation";
import validateRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(studentValidations.creatStudentValidationSchema),
  UserController.creatStudent,
);

export const UserRouter = router;
