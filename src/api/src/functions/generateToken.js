import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function generateToken(params = {}) {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
}

export default generateToken;
