import express from "express";

import { AuthController } from "../controllers/AuthController.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", AuthController.signUp);

AuthRouter.post("/login", AuthController.login);

export default AuthRouter;
