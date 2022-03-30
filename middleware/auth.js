const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config("./config/config.env");

module.exports = (req, res, next) => {
  const secret = process.env.SECRET;
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(403).send("Access denied.");

    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
