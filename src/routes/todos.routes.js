import express from "express";
import { addTodo, deleteTodo, editTodo, getAllTodo, singleTodo } from "../controllers/todos.controller.js";

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", getAllTodo);
router.get(`/todo/:id`, singleTodo);
router.delete("/todo/:id", deleteTodo);
router.put("/todo/:id", editTodo);

export default router;
