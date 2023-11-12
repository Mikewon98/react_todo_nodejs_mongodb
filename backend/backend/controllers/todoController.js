const todoModel = require("../models/todoModel");
const ToDoModel = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
  // res.status(200).json({
  //   toDo,
  // });
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added Succesfull...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Update Succesfull"))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  console.log("Deleting ToDo with ID:", _id);
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Succesfull"))
    .catch((err) => console.log(err));
};
