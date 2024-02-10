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

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const query = `SELECT * FROM users WHERE email = $1`;
  const data = [email.toLowerCase()];
  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length) {
        bcrypt.compare(password, result.rows[0].password, (err, response) => {
          if (err) res.json(err);
          if (response) {
            const payload = {
              userId: result.rows[0].id,
              country: result.rows[0].country,
              role: result.rows[0].role_id,
            };
            const options = { expiresIn: "1d" };
            const secret = process.env.SECRET;
            const token = jwt.sign(payload, secret, options);
            if (token) {
              return res.status(200).json({
                token,
                success: true,
                message: `Valid login credentials`,
                userId:result.rows[0].id
              });
            } else {
              throw Error;
            }
          } else {
            res.status(403).json({
              success: false,
              message: `The email doesn’t exist or the password you’ve entered is incorrect`,
            });
          }
        });
      } else throw Error;
    })
    .catch((err) => {
      res.status(403).json({
        success: false,
        message:
          "The email doesn’t exist or the password you’ve entered is incorrect",
        err,
      });
    });
};

const Add_User_info =(req,res)=>{
    const { weight, height,goal } = req.body;
    const user_id = req.token.user_id; 
    const value = [weight, height,goal, user_id]
    pool.query( `INSERT INTO user_info (weight, height, goal,user_id) VALUES ($1,$2,$3,$4) RETURNING*`,value)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: "user_info created successfully",
          result: result.rows[0],
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error",
          err: err,
        });
      });
  };

  const getAllUsers =(req,res)=>{

  }

  const getAllCoachs =(req,res)=>{
    
  }

  const getUserInfoById =(req,res)=>{
    
  }

module.exports = {
  register,
  login,
  Add_User_info
};
