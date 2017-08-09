const express = require("express");
const router = express.Router();


let todo = [
  {
    task: "Clean",
    done: false
  },
  {
    task: "Wash",
    done: true
  }
];

router.get("/", (req, res) => {
  res.render("index", {todo: todo})
});

router.post("/todo", (req, res) => {
  todo.push({
    task: req.body.toDoItem,
    done: false
  });
  res.redirect("/");
});

router.post("/done", (req, res) => {
  todo.forEach(function(d) {
    if(req.body.button === d.task) {
      d.done = true;
    }
  })
  res.redirect("/");
})


module.exports = router;
