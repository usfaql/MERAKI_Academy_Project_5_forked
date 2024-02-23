const express = require("express");
const coachRouter = express.Router();
const {
  createNewPlane,
  AddUserToPrivate,
  removeUserFromPrivate,
  getAllPlanByCoachId,
  getAllUserByPlanId,
  activePrivate,
  disActivePrivate,
  getAllCoachsAreOpenPrivate,
  getAllUserByCoachId,
  getAllCoachesByUserId,
  updatePlanByName,
  removePlanByName
} = require("../controllers/coachs");
const authentication = require("../middleware/authentication");
coachRouter.post("/plan", authentication, createNewPlane);
coachRouter.get("/plan", authentication, getAllPlanByCoachId);
coachRouter.post("/user", authentication, AddUserToPrivate);
coachRouter.get('/user',authentication,getAllUserByCoachId)
coachRouter.get('/coach',authentication,getAllCoachesByUserId)
coachRouter.put("/user/remove", authentication, removeUserFromPrivate);
coachRouter.get("/:idplan/user", authentication, getAllUserByPlanId);
coachRouter.get("/private", authentication, activePrivate);
coachRouter.get("/private/disactive",authentication,disActivePrivate)
coachRouter.get("/openedprivate", authentication, getAllCoachsAreOpenPrivate);
coachRouter.put('/plan',authentication,updatePlanByName)
coachRouter.delete('/plan',authentication,removePlanByName)
module.exports = coachRouter;
