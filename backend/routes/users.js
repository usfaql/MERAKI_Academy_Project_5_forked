const express = require("express");

const { register, login,Add_User_info } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/user_info",Add_User_info)

module.exports = usersRouter;
