const express = require("express");
const coachRouter = express.Router();
const {cteateNewPlane,AddUserToPrivte,removeUserFromPrivte}=require('../controllers/coachs')
const authentication=require('../middleware/authentication')
coachRouter.post('/plan',cteateNewPlane)
module.exports=coachRouter