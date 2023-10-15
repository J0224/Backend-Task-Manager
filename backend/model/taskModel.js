const mongoose = require("mongoose");

/*This is the Schema Struture for the sckeleton struture 
this is how the data is gona be organized before it stores into 
the data base  is gonna be inside the model function*/

const taskSchema = mongoose.Schema(
  {
   
  name: {
      type: String,
      required: [true, "Please add a task"]
    },
    completed:{
          type: Boolean,
          required: true,
          default: false,
        },
      },
      {
        timestamps: true
      }
      
    );

  const Task = mongoose.model("Task", taskSchema)

  module.exports = Task