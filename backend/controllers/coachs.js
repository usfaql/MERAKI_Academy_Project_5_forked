const pool = require("../models/db");

const cteateNewPlane =(req,res)=>{
    const {name,description,numOfMonth}=req.body
    const coach_id=req.token.userId
    const value=[name,description,numOfMonth,coach_id]
    const query=`INSERT INTO coach_plan (name,description,numOfMonth,coach_id) VALUES ($1,$2,$3,$4) RETURNING *;`
    pool.query(query,value).then((result)=>{
      res.status(201).json({
        success: true,
        message: "Plane created successfully",
        Plan: result.rows,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Server error",
      });
    });
    
}
const AddUserToPrivate=(req,res)=>{
    const {plan_id,coach_id,private_room_id}=req.body
    const user_id=req.token.userId
    const value=[plan_id,coach_id,private_room_id,user_id]
    const query=`INSERT INTO room_user (plan_id,coach_id,private_room_id,user_id) VALUES ($1,$2,$3,$4) RETURNING *;`
    pool.query(query,value).then((result)=>{
      res.status(201).json({
        success: true,
        message: "User Add successfully",
        user: result.rows,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Server error",
      });
    });
}
const removeUserFromPrivate=(req,res)=>{
    const user_id=req.body;
    const value=[user_id];
    const query=`UPDATE room_user SET is_delete=1 WHERE user_id=$1`
    pool.query(query,value).then((result)=>{
        res.status(201).json({
          success: true,
          message: "User Deleted successfully",
          user: result.rows,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          message: "Server error",
        });
      });
}
module.exports={
    cteateNewPlane,
    AddUserToPrivate,
removeUserFromPrivate
}