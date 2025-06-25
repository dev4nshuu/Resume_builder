import express from "express";
import { getUserProfile, registerUser, loginUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js"; // make sure this exists

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile', protect, getUserProfile); // token-protected route

export default userRouter;
