import express from "express";
import { addTodo } from "../controllers/todos.controller.js";

const router = express.Router();

router.post("/todo", addTodo);

export default router;
