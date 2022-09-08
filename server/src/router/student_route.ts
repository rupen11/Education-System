import { Router } from "express";
import { createStudent, deleteStudent, getStudent, getStudents, retriveStudent, updateStudent } from "../controller";
import { tokenAuth, validateBody } from "../middleware";
import { studentSchema } from "../model";

const router: Router = Router();

// Only super admins can access crud of Students

// pending work -> add middleware of check current user is superadmin or not if super admin then allowed for access the routes mentioned below otherwise method not allowed for the current user
router.route("/student").post(validateBody, createStudent);
router.route("/student").get(retriveStudent);
router.route("/student/:id").get(tokenAuth, getStudent);
router.route("/student/:id").put(validateBody, tokenAuth, updateStudent);
router.route("/student/:id").delete(tokenAuth, deleteStudent);
router.route("/students").post(getStudents);

export default router;

