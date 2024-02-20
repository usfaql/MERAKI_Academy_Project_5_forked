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
  getAllUserByCoachId
} = require("../controllers/coachs");
const authentication = require("../middleware/authentication");
coachRouter.post("/plan", authentication, createNewPlane);
coachRouter.get("/plan", authentication, getAllPlanByCoachId);
coachRouter.post("/user", authentication, AddUserToPrivate);
coachRouter.get('/user',authentication,getAllUserByCoachId)
coachRouter.put("/user/remove", authentication, removeUserFromPrivate);
coachRouter.get("/:idplan/user", authentication, getAllUserByPlanId);
coachRouter.put("/private", authentication, activePrivate);
coachRouter.put("/private/disactive",authentication,disActivePrivate)
coachRouter.get("/openedprivate", authentication, getAllCoachsAreOpenPrivate);
module.exports = coachRouter;
