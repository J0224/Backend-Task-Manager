const express = require("express");
const Task = require ("../model/taskModel");

const { 
  createTask, 
  getTasks, 
  getTask, 
  deleteTask, 
  updateTask} = require("../controllers/taskController");
const router = express.Router()


/*
This way we can compressed the routes

router.route("/").get(getTasks).post(createTask)
router.route("/:id").gt(getTask).delete(deleteTask).put(updateTask)
*/

/*Create a Tasks routes and is used with the taskController*/
router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask );

module.exports = router