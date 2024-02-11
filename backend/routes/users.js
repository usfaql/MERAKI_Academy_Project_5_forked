const express = require("express");

const { register, login,Add_User_info,getAllUsers ,getAllCoachs,getUser_InfoById} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/add_user_info",Add_User_info)
usersRouter.get("/*", getAllUsers)
usersRouter.get("/coaches", getAllCoachs)
usersRouter.get("/get_user_info",getUser_InfoById)
module.exports = usersRouter;
