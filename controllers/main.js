require("dotenv").config();
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("User must provide username and password", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JSON_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const getDashboard = async (req, res) => {
  const { id, username } = req.user;
  const randnum = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `${username}`, secret: `Authorized data ${randnum}` });
};
module.exports = { getDashboard, register };
