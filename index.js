require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");

const app=express();
connectDB();

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found")
})
app.listen(3000, ()=> {
  console.log("El servidor está levantado en: http://localhost:3000 🤩");
})