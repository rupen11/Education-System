import { Router } from "express";
import { createSuperAdmin, deleteSuperAdmin, getSuperAdmin, getSuperAdmins, retriveSuperAdmin, updateSuperAdmin } from "../controller";

const router: Router = Router();

// Only super admins can access crud of SuperAdmins

// pending work -> add middleware of check current user is superadmin or not if super admin then allowed for access the routes mentioned below otherwise method not allowed for the current user
router.route("/superadmin").post(createSuperAdmin);
router.route("/superadmin").get(retriveSuperAdmin);
router.route("/superadmin/:id").get(getSuperAdmin);
router.route("/superadmin/:id").put(updateSuperAdmin);
router.route("/superadmin/:id").delete(deleteSuperAdmin);
router.route("/superadmins").post(getSuperAdmins);

export default router;

