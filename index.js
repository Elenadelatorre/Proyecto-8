require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const playersRouter = require("./src/api/routes/players");
const brandsRouter = require("./src/api/routes/brands");
const usersRouter = require("./src/api/routes/user");

const app=express();

app.use(express.json());
connectDB();

app.use("/api/v1/players", playersRouter)
app.use("/api/v1/brands", brandsRouter)
app.use("/api/v1/users", usersRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found")
})
app.listen(3000, ()=> {
  console.log("El servidor está levantado en: http://localhost:3000 🤩");
})