const pool = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { firstName, lastName, age, gender, email, password,role_id } =req.body;
  const Password = await bcrypt.hash(password, 7);
 const Email =email.toLowerCase();
  pool.query( `INSERT INTO users (firstName, lastName, age, gender, email, password, role_id) VALUES ($1,$2,$3,$4,$5,$6,$7)`,[firstName,lastName,age,gender,Email,Password,role_id])
  
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Account created successfully",
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
        err,
      });
    });
};



module.exports = {
  register,
  login,
  Add_User_info
};
