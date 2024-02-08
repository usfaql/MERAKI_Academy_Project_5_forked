
const pool = require("../models/db");

const createGym = (req,res)=>{
    const userId = 1;
    const {name, description} = req.body;
    const provider = [name, description, userId];
    pool.query(`INSERT INTO gyms (name , description, owner_id, created_at) VALUES ($1, $2, $3)`, provider).then((result) => {
        res.status(201).json({
            success : true,
            message : "Gym created successfully",
            gym : result.rows
        })
    }).catch((err) => {
        res.status(500).json({
            success : false,
            message : "Server error",
            error : err.message
        })
    });
    
}

const addNewUserInGym = (req,res)=>{
    const {gym_id, user_id} = req.body;
    const provider = [user_id, gym_id];
    pool.query(`INSERT INTO gym_user(user_id, gym_id) VALUES ($1,$2)`, provider).then((result) => {
        res.status(201).json({
            success : true,
            message : "User Add Successfully In Gym",
            result : result.rows
        })
    }).catch((err) => {
        res.status(500).json({
            success : false,
            message : `Server error`,
            error : err.message
        })
    });
}



module.exports = {
    createGym,
    addNewUserInGym,
}