import express from "express";

import { GamePlatformController } from "../controllers/GamePlatformController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const GamePlatformRouter = express.Router();

GamePlatformRouter.get(
  "/game-platform",
  authMiddleware,
  GamePlatformController.listGamesPlatforms
);

GamePlatformRouter.post(
  "/game-platform/create",
  authMiddleware,
  GamePlatformController.createGamePlatform
);

GamePlatformRouter.put(
  "/game-platform/update/:id",
  authMiddleware,
  GamePlatformController.updateGamePlatform
);

GamePlatformRouter.delete(
  "/game-platform/delete/:id",
  authMiddleware,
  GamePlatformController.deleteGamePlatform
);

GamePlatformRouter.get(
  "/game-platform/:id",
  authMiddleware,
  GamePlatformController.findGamePlatform
);

export default GamePlatformRouter;
