const express = require("express");

const {createGym} = require("../controllers/Gym");

const gymsRouter = express.Router();

gymsRouter.post("/", createGym);

