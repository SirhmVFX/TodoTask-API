const { json } = require("express");
const userModel = require("../model/User");
const ToDo = require("../model/User");

//get all ToDo Task
exports.getAllTodoTask = async function (req, res) {
  try {
    let ToDoTask = await ToDo.find();
    if (ToDoTask.length === 0)
      return res.status(404).json({
        success: false,
        message: "No Todo Task Found",
      });
    res.status(200).json({
      success: true,
      message: "ToDo Tasks Found",
      ToDoTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
//get Single ToDo Task
exports.getTodoTask = async function (req, res) {
    try { 
        let id = {_id: req.params.id}; 
        let ToDoTask = await ToDo.findOne(id);
        if (!ToDoTask) return res.status(404).json({
            success: false, 
            message: "Todo Task Not Found"
        })
        res.status(200).json({
            success: true, 
            message: "Todo Task Found", 
            ToDoTask,
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: "interal server error", 
            error: error.message
        })
    }
};

//Create ToDo Task
exports.createToDo = async function (req, res){
    try {
        let ToDoTask = await req.body;
        let created = await ToDo.create(ToDoTask);
    if (!created) return res.status(400).json({
        success: false, 
        message: "ToDo Task Creation Failed", 
    })
    return res.status(201).json({
        success: true, 
        message: "ToDo Task Created Successfully",
        user: created,
    })
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: "internal server error",
            error: error.message
        })
    }
};

//Update ToDo Task
exports.updateToDo = async function (req, res) {
    try {
        let id ={_id: req.params.id};
    let ToDoTask = await req.body;
    let update = await ToDo.findOneAndUpdate(id, ToDoTask, {new: true}); 

    if(!update) 
    return res.status(400).json({
        success: false, 
        message: "User Not Updated",
    });
    return res.status(200).json({
        success: true, 
        message: "user update successfuly"
    })
    } catch (error) {
      res.status(500).json({
        success: false, 
        message: "internal Server error",
        error: error.message
      })  
    }
}

//Delete ToDo Task
exports.deleteTodoTask = async function(req, res){
    try {
        let id = {_id: req.params.id};
        let deleted = await ToDoTask.findOneAndRemove(id);
        
        if (!deleted)
        res.status(400).json({
            success: false, 
            message: "Todo Task not deleted", 
        })
        return res.status(200).json({
            success: true, 
            message: "Todo Task Deleted SUccessfully",
        })
    } catch (error){
        res.status(500).json({
            success: false, 
            message: "internal server error", 
            error: error.message,

        })
    }
}