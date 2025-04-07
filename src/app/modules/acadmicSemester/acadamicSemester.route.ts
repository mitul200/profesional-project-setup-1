/* eslint-disable prettier/prettier */
import express from "express";
import { AcadamicSemesterController } from "./acadamicSemester.controller";
import validateRequest from "../../middleware/validateRequest";
import { AcadamicSemesterValidation } from "./acadamicSemester.validation";
const router = express.Router();

router.post("/create-acadamic-semester",AcadamicSemesterController.createAcadamicSemester,AcadamicSemesterController.createAcadamicSemester);
 
router.get("/", AcadamicSemesterController.getAllAcadamicSemester);

router.get("/:semesterId",AcadamicSemesterController.getSingleAcadamicSemester)

router.patch("/:semesterId",validateRequest(AcadamicSemesterValidation.updateAcadamicSemesterValidationSchema),AcadamicSemesterController.updateAcadamicSemester)


// router.get("/",AcadamicSemesterController.getAllAcadamicSemester)
export const AcadamicSemesterRoutes = router
