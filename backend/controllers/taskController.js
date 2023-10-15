const Task = require("../model/taskModel");


/*This is an async fuction called createTask to create a task */
const createTask = async (req, res) =>{
  try {
    const task = await Task.create(req.body)
    res.json(task)

  } catch (error) {
    res.status(500).json({msg: error.message})

  }
}; //Ends of async fuction called createTask

/*This is an async fuction called getTasks to get all tasks */
const getTasks = async (req, res) =>{

  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  }catch (error){
    res.status(500).json({msg: error.message});

  }
}; //Ends of async fuction called getTasks to get all tasks

//This is an asygnc fuction called getTask to get a single task
const getTask = async (req, res) =>{
try {
  const {id} = req.params
  const task = await Task.findById(id);
  if(!task){
    return res.status(404).json(`There is not task with id: ${id}`)
  }
  res.status(200).json(task)
} catch (error) {
  res.status(500).json({msg: error.message});
}
}; //Ends of asygnc fuction called getTask

//This is an asygn fuction called deleteTask to delete a task
const deleteTask = async (req, res) =>{
  try {
    const {id} = req.params
    const task = await Task.findByIdAndDelete(id)
    if(!task){
      return res.status(404).json(`There is not task with id: ${id}`)
    }
    res.status(200)
    .send("Task has been deleted successfully")
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
}; //Ends of asygn fuction called deleteTask 


//This is an asygn fuction called updateTask to update a task
const updateTask = async (req, res) => {

  try {
    const {id} = req.params
    const task = await Task.findByIdAndUpdate(
    {_id: id}, req.body, {new: true, runValidators: true,})
    if(!task){
      return res.status(404).json(`There is not task with id: ${id}`)
    }
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({msg: error.message})
  }

}; //End of asygn fuction called updateTask 

module.exports = {
   createTask,
   getTasks,
   getTask,
   deleteTask, 
   updateTask
};