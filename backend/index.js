const express = require("express");
const cors = require("cors");
require("dotenv").config()
require("./models/db");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
const gymsRouter = require("./routes/Gym");
const roleRouter = require("./routes/Roles");
const permissionRouter=require('./routes/permissions')
const rolePermissionRouter=require('./routes/role_permission')
const usersRouter = require("./routes/users");
const coachRouterRouter = require("./routes/coachs");
app.use("/gyms", gymsRouter)
app.use("/roles", roleRouter)
app.use("/users",usersRouter)
app.use("/permissions",permissionRouter)
app.use("/role_permission",rolePermissionRouter)
app.use("/coachs",coachRouterRouter)


app.use("*", (req, res) => res.status(404).json("NO content at this path"));


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
