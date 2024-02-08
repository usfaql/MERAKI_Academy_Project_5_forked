const express = require("express");

const {createGym, addNewUserInGym} = require("../controllers/Gym");

const gymsRouter = express.Router();

gymsRouter.post("/", createGym);

gymsRouter.post("/gym_user", addNewUserInGym)

module.exports = gymsRouter;