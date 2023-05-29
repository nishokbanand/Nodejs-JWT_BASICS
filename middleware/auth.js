const { UnAuthorizedError } = require("../errors");
const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthorizedError("No token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JSON_SECRET);
    const { id, username } = decode;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnAuthorizedError("Not authorized to access");
  }
};
module.exports = authMiddleware;
