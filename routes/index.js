var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* New message form */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message Form" });
});

router.post("/new", function (req, res, next) {
  let newMessage = req.body;
  messages.push({
    text: newMessage.content,
    user: newMessage.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
