import express from "express";

import { UserGameController } from "../controllers/UserGameController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const UserGameRouter = express.Router();

UserGameRouter.get(
  "/user-game",
  authMiddleware,
  UserGameController.listAllUserGames
);

UserGameRouter.get(
  "/user-game/user",
  authMiddleware,
  UserGameController.listUserGames
);

UserGameRouter.post(
  "/user-game/create",
  authMiddleware,
  UserGameController.createUserGame
);

UserGameRouter.put(
  "/user-game/update/:id",
  authMiddleware,
  UserGameController.updateUserGame
);

UserGameRouter.delete(
  "/user-game/delete/:id",
  authMiddleware,
  UserGameController.deleteUserGame
);

UserGameRouter.get(
  "/user-game/:id",
  authMiddleware,
  UserGameController.findUserGame
);

export default UserGameRouter;
