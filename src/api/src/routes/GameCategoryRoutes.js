import express from "express";

import { GameCategoryController } from "../controllers/GameCategoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const GameCategoryRouter = express.Router();

GameCategoryRouter.get(
  "/game-category",
  authMiddleware,
  GameCategoryController.listGamesCategories
);

GameCategoryRouter.post(
  "/game-category/create",
  authMiddleware,
  GameCategoryController.createGameCategory
);

GameCategoryRouter.put(
  "/game-category/update/:id",
  authMiddleware,
  GameCategoryController.updateGameCategory
);

GameCategoryRouter.delete(
  "/game-category/delete/:id",
  authMiddleware,
  GameCategoryController.deleteGameCategory
);

GameCategoryRouter.get(
  "/game-category/:id",
  authMiddleware,
  GameCategoryController.findGameCategory
);

export default GameCategoryRouter;
