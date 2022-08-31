import { Router } from "express";
import { createStudent, deleteStudent, getStudent, getStudents, retriveStudent, updateStudent } from "../controller";
import { validateBody } from "../middleware";

const router: Router = Router();

// Only super admins can access crud of Students

// pending work -> add middleware of check current user is superadmin or not if super admin then allowed for access the routes mentioned below otherwise method not allowed for the current user
router.route("/student").post(validateBody, createStudent);
router.route("/student").get(retriveStudent);
router.route("/student/:id").get(getStudent);
router.route("/student/:id").put(validateBody, updateStudent);
router.route("/student/:id").delete(deleteStudent);
router.route("/students").post(getStudents);

export default router;

