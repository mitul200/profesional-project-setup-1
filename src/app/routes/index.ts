import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";
import { studentRouter } from "../modules/student/student.route";
import { AcadamicSemesterRoutes } from "../modules/acadmicSemester/acadamicSemester.route";

const router = Router();

const modulesRoutes = [
  {
    path: "/users",
    router: UserRouter,
  },
  {
    path: "/students",
    router: studentRouter,
  },
  {
    path: "/acadamic-semesters",
    router: AcadamicSemesterRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.router));

// router.use('/users', UserRouter);
// router.use('/students', studentRouter);

export default router;
