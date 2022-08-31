import { Router } from "express";
import { createUniversity, deleteUniversity, getUniversity, getUniversities, retriveUniversity, updateUniversity } from "../controller";
import { validateBody } from "../middleware";

const router: Router = Router();

// Only super admins can access crud of Universitys

// pending work -> add middleware of check current user is superadmin or not if super admin then allowed for access the routes mentioned below otherwise method not allowed for the current user
router.route("/university").post(validateBody, createUniversity);
router.route("/university").get(retriveUniversity);
router.route("/university/:id").get(getUniversity);
router.route("/university/:id").put(validateBody, updateUniversity);
router.route("/university/:id").delete(deleteUniversity);
router.route("/universities").post(getUniversities);

export default router;

