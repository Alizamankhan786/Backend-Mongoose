import mongoose from "mongoose";
import Todos from "../models/todos.model.js";


// Add TODO

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

// GET ALL TODO

const getAllTodo = async (req, res) => {
  const todos = await Todos.find({});
  res.status(200).json({
    todos: todos,
  });
};

// Get SINGLE TODO

const singleTodo = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'ID parameter is required.' });
  }
  Todos.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found.' });
      }
      res.status(200).json(todo);
    })
    .catch(err => {
      res.status(500).json({ error: 'Something went wrong.', details: err });
    });
};


// DELETE TODO

const deleteTodo = async (req , res) => {

  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const todo = await Todos.findOneAndDelete({_id : id});

  if(!todo){
    return res.status(404).json({
      message: "Todo not Found"
    });
  };

  res.status(200).json({
    message: "Todo Deleted Successfully",
    todo,
  });
};

// EDIT TODO

const editTodo = async (req, res) => {
  const { id } = req.params;


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  try {
    const updatedTodo = await Todos.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );


    if (!updatedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the todo" });
  }
};




export { addTodo , getAllTodo , singleTodo , deleteTodo , editTodo };