const express = require("express");
const router = express.Router();
const todocontroller = require("../controller/todoController");

router.get("/getall", todocontroller.getallTodo);
router.post("/add", todocontroller.addTodo);
router.get("/:id", todocontroller.gettodoById);
router.put("/update/:id", todocontroller.updateTodo);
router.delete("/delete/:id", todocontroller.deleteTodo);

module.exports = router;
