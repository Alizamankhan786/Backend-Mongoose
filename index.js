// const express = require('express')
import dotenv from "dotenv";
dotenv.config();
import express from "express"
import connectDB from "./src/db/index.js";
const app = express()
const port = process.env.PORT 
import todosRoutes from "./src/routes/todos.routes.js";



app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
});

// ROUTES

app.use("/api/v1" , todosRoutes);

connectDB()

.then((res) => {
  app.listen(process.env.PORT, () => {
    console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
  });

}).catch((err)=> {

  console.log("MONGO DB connection failed !!! ", err);
});
