const express = require("express");
const router = express.Router();


let todo = [];
let doneItem = [];

router.get("/", (req, res) => {
  res.render("index", {todo: todo})
});

router.post("/todo", (req, res) => {
  console.log(req.body.toDoItem);
  todo.push(req.body.toDoItem);
  res.redirect("/");
});

router.post("/done", (req, res) => {
  console.log(req.params);
})


module.exports = router;
