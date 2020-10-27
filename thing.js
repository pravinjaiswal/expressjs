const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  var out = `<h2>Welcome to the course page</h2> `;
  res.end(out);
});

router.post("/", (req, res) => {
  res.end("post");
});

module.exports = router;
