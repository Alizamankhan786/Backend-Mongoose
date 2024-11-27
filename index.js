// const express = require('express')
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import express from "express"
import connectDB from "./src/db/index.js";
const port = process.env.PORT 
import todosRoutes from "./src/routes/todos.routes.js";

const app = express()

app.use(cors());
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
