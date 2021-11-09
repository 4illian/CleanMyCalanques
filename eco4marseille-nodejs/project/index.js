const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 8080;
const cors = require("cors");
const userController = require("./controller/user");
const wasteController = require("./controller/waste");
const auth = require("./middleware/auth");
const uploadFile = require("./middleware/upload");

var path = require("path");
global.__basedir = __dirname;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/users", userController.getAll);
app.get("/users/:id", userController.findOneById);
app.post("/users", userController.create);
app.post("/login", userController.login);
app.delete("/users/:id", userController.deleteUser);

app.post("/wastes", auth, uploadFile, wasteController.create);
