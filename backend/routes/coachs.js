const express = require("express");
const coachRouter = express.Router();
const {cteateNewPlane,AddUserToPrivte,removeUserFromPrivte}=require('../controllers/coachs')
const authentication=require('../middleware/authentication')
coachRouter.post('/plan',cteateNewPlane)
coachRouter.post('/user',AddUserToPrivte)
module.exports=coachRouter