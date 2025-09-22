// routes/userRoutes.js
import { Router } from "express";
const router = Router();
import { getAllUsers, getUserById } from "../controllers/userController.js";

// GET /api/users → return all users
router.get("/", getAllUsers);

// GET /api/users/:id → return single user by ID
router.get("/:id", getUserById);

export default router;