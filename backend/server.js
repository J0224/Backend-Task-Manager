const dotenv = require("dotenv").config();
const express = require ("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require ("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");
const https = require("https");


const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
  origin: [ "http://localhost:3000",
  "https://campanita-task-manager.onrender.com",
  "http://campanita-task-manager.onrender.com"]
}));

app.use("/api/tasks", taskRoutes);


//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});


//Create the port for the SERVER
const PORT = process.env.PORT || 4000;

//Connecting MongoDB with the SERVER
mongoose
.connect(process.env.MONGO_URI)
.then(() =>{
  app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
  });
})
.catch((err) => console.log(err));
