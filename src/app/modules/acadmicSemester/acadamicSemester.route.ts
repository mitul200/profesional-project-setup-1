/* eslint-disable prettier/prettier */
import express from "express";
import { AcadamicSemesterController } from "./acadamicSemester.controller";
const router = express.Router();

router.post("/create-acadamic-semester",AcadamicSemesterController.createAcadamicSemester,AcadamicSemesterController.createAcadamicSemester);


export const AcadamicSemesterRoutes = router
