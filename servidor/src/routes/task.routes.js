import { Router } from "express";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { createTaskSchema } from '../Schemas/task.schema.js';
import { validateSchema } from "../middlewares/validation.middlewares.js";

const router = Router()

router.get('/tasks', requiredAuth, getTasks);
router.get('/task/:id', requiredAuth, getTask);
router.post('/task', requiredAuth, validateSchema(createTaskSchema), createTask);
router.put('/task/:id', requiredAuth, updateTask);
router.delete('/task/:id', requiredAuth, deleteTask);

export default router;