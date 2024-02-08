const express = require("express");

const {createGym, addNewUserInGym,addNewCoachInGym} = require("../controllers/Gym");

const gymsRouter = express.Router();

gymsRouter.post("/", createGym);

gymsRouter.post("/gym_user", addNewUserInGym)
gymsRouter.post("/gym_coach", addNewCoachInGym)

module.exports = gymsRouter