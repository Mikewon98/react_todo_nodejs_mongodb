const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);

module.exports = router;
