import express from "express";

import { GameController } from "../controllers/GameController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const GameRouter = express.Router();

GameRouter.get("/game", authMiddleware, GameController.listGames);

GameRouter.post("/game/create", authMiddleware, GameController.createGame);

GameRouter.put("/game/update/:id", authMiddleware, GameController.updateGame);

GameRouter.delete(
  "/game/delete/:id",
  authMiddleware,
  GameController.deleteGame
);

GameRouter.get("/game/:id", authMiddleware, GameController.findGame);

export default GameRouter;
