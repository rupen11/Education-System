import { Router } from "express";
import { createLecture, deleteLecture, getLecture, getLectures, retriveLecture, updateLecture } from "../controller";

const router: Router = Router();

// Only super admins can access crud of Lectures

// pending work -> add middleware of check current user is superadmin or not if super admin then allowed for access the routes mentioned below otherwise method not allowed for the current user
router.route("/lecture").post(createLecture);
router.route("/lecture").get(retriveLecture);
router.route("/lecture/:id").get(getLecture);
router.route("/lecture/:id").put(updateLecture);
router.route("/lecture/:id").delete(deleteLecture);
router.route("/lectures").post(getLectures);

export default router;

