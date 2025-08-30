import { Router } from "express";
import { registerUser, loginUser, confirmEmail, logoutUser } from "../controllers/auth.controllers.js";

// Create a new router instance
const router = Router();

router.route("/signUp").post(registerUser);
router.route("/confirmEmail/:id").get(confirmEmail);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

// Export the router to be used in other parts of the application
export default router;
