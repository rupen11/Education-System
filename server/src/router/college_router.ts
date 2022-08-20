import { Router } from "express";
import { createCollege, deleteCollege, retriveColleges, getCollege, updateCollege, getColleges } from "../controller";

const router: Router = Router();

// Only super admins can access crud of colleges

// pending work -> add middleware of check current user is superadmin or not if super admin then allowed for access the routes mentioned below otherwise method not allowed for the current user
router.route("/college").post(createCollege);
router.route("/college").get(retriveColleges);
router.route("/college/:id").get(getCollege);
router.route("/college/:id").put(updateCollege);
router.route("/college/:id").delete(deleteCollege);
router.route("/colleges").post(getColleges);

export default router;

