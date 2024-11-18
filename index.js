// const express = require('express')
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
import express from "express"
// const cors = require('cors')
const app = express()
const port = process.env.PORT 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})