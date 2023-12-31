import { Router } from "express";
import { register, login, logout, profile, verfyToken } from "../controllers/auth.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { registerSchema, loginSchema } from "../Schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validation.middlewares.js";

const router = Router()
router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/verify', verfyToken)
router.post('/logout', logout);
router.get('/profile', requiredAuth, profile);

export default router;