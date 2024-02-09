
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

const getAllGym = (req, res)=>{
    pool.query(`SELECT * FROM gyms`).then((result) => {
        res.status(201).json({
            success : true,
            message : `All Gym`,
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

const getAllUserInGym = (req,res)=>{
    const gym_id = 2;
    const provider = [gym_id]
    pool.query(`SELECT * FROM gym_user INNER JOIN users ON gym_user.user_id = users.id WHERE gym_id = $1`, provider).then((result) => {
        res.status(200).json({
            success : true,
            message : `All User In Gym`,
            result : result.rows
        });
    }).catch((err) => {
        res.status(500).json({
            success : false,
            message : `Error server`,
            err
        });
    });
}
const addNewCoachInGym = (req,res) =>{
    const {gym_id, coach_id} = req.body;
    const provider = [gym_id, coach_id];
    pool.query(`DELETE FROM gym_user WHERE user_id = $2`,provider).then((result) => {
        pool.query(`INSERT INTO gym_coach (gym_id, user_id) VALUES ($1,$2)`, provider).then((result) => {
            res.status(201).json({
                success : true,
                message : `Coach Add Successfully In Gym`,
                result : result.rows
            });
        }).catch((err) => {
            res.status(500).json({
                success : false,
                message : `Server Error`,
                error : err.message
            });
        });
    }).catch((err) => {
        res.status(500).json({
            success : false,
            message : `Server Error`,
            error : err.message
        });
    });
}



module.exports = {
    createGym,
    addNewCoachInGym,
    addNewUserInGym,
    getAllGym,
    getAllUserInGym
}