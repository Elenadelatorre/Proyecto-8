require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const playersRouter = require("./src/api/routes/players");
const brandsRouter = require("./src/api/routes/brands");
const usersRouter = require("./src/api/routes/user");
const cloudinary = require("cloudinary").v2;

const app=express();

app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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