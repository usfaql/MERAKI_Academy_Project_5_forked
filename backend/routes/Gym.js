const express = require("express");

const {createGym, addNewUserInGym,addNewCoachInGym,getAllGym, getAllUserInGym} = require("../controllers/Gym");

const gymsRouter = express.Router();

gymsRouter.post("/", createGym);
gymsRouter.get("/", getAllGym);
gymsRouter.post("/gym_user", addNewUserInGym)
gymsRouter.get("/gym_user", getAllUserInGym)
gymsRouter.post("/gym_coach", addNewCoachInGym)

module.exports = gymsRouter