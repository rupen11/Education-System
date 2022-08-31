import { Router } from "express";
import { createFaculty, deleteFaculty, getFaculty, getFaculties, retriveFaculty, updateFaculty } from "../controller";
import { validateBody } from "../middleware";

const router: Router = Router();

// Only super admins can access crud of Facultys

// pending work -> add middleware of check current user is superadmin or not if super admin then allowed for access the routes mentioned below otherwise method not allowed for the current user
router.route("/faculty").post(validateBody, createFaculty);
router.route("/faculty").get(retriveFaculty);
router.route("/faculty/:id").get(getFaculty);
router.route("/faculty/:id").put(validateBody, updateFaculty);
router.route("/faculty/:id").delete(deleteFaculty);
router.route("/faculties").post(getFaculties);

export default router;

