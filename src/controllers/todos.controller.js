import mongoose from "mongoose";
import Todos from "../models/todos.model.js";

const addTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: "Title or Description is required",
    });
    return;
  }

  const todo = Todos.create({
    title,
    description,
  });
  res.status(201).json({
    message: "User Added SuccessFully",
  });
};

export { addTodo };