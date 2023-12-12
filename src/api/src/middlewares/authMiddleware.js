import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // checks if a authorization token exists on req headers
  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  // spliting authorization header in two parts
  const parts = authHeader.split(" ");

  // checks if the authorization follows the patern schema + token , 2 parts
  if (!parts.length === 2) {
    return res.status(401).send({ error: "Token error" });
  }

  // destructuring parts array
  const [scheme, token] = parts;

  // checks the format of the scheme
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token malformatted" });
  }

  // jwt verify
  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) return res.status(401).send({ error: "Token invalid" });

    req.userId = decoded.id;
    return next();
  });
}

export default authMiddleware;
