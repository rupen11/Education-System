import { Router } from "express";
import { createCourse, deleteCourse, getCourse, getCourses, retriveCourse, updateCourse } from "../controller";
import { validateBody } from "../middleware";

const router: Router = Router();

// Only super admins can access crud of Courses

// pending work -> add middleware of check current user is superadmin or not if super admin then allowed for access the routes mentioned below otherwise method not allowed for the current user
router.route("/course").post(validateBody, createCourse);
router.route("/course").get(retriveCourse);
router.route("/course/:id").get(getCourse);
router.route("/course/:id").put(validateBody, updateCourse);
router.route("/course/:id").delete(deleteCourse);
router.route("/courses").post(getCourses);

export default router;

