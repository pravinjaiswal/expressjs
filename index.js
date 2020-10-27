const express = require("express");
const app = express();

//-------------------Pug--------------------------//

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("example");
});

app.listen(4000);
//-----------------end's Pug---------------------//

//---------middleware--------------------------//

// function loginInfo(req, res, next) {
//   console.log("Hello from login Middleware.....");
//   next();
// }

// function addData(req, res, next) {
//   var person = {
//     name: "Pravin",
//     city: "Mumbai",
//   };
//   req.person = person;
//   next();
// }

// app.use("/profile/:id([0-3]{1})", (req, res, next) => {
//   var names = ["Pravin", "Rohit", "Nikas", "vikrant"];
//   req.name = names[req.params.id];
//   next();
// });

// app.use(loginInfo);
// app.use(addData);

// app.get("/", (req, res) => {
//   res.end("hii to the index page");
// });

// app.get("/person", (req, res) => {
//   res.end("Name: " + req.person.name + " City: " + req.person.city);
// });

// app.get("/profile/:id([0-3]{1})", (req, res) => {
//   res.end("id :" + req.name);
// });

//--------------------End's Middleware ---------------------//

// var things = require("./thing.js");

// app.use("/thing", things);

// app.get("/", (req, res) => {
//   res.end("welcome");
// });

// app.get("/:id", (req, res) => {
//   res.end("your profile id is:" + req.person.id);
// });
//app.listen(4000, "127.0.0.1");
