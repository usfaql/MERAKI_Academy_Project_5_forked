const express = require("express");
const coachRouter = express.Router();
const {cteateNewPlane,AddUserToPrivate,removeUserFromPrivate}=require('../controllers/coachs')
const authentication=require('../middleware/authentication')
coachRouter.post('/plan',cteateNewPlane)
coachRouter.post('/user',AddUserToPrivate)
coachRouter.put('/remove_user',removeUserFromPrivate)
module.exports=coachRouter