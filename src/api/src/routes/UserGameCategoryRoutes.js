import express from "express";

import { UserGameCategoryController } from "../controllers/UserGameCategoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const UserGameCategoryRouter = express.Router();

UserGameCategoryRouter.get(
  "/user-game-category",
  authMiddleware,
  UserGameCategoryController.listUserGamesCategories
);

UserGameCategoryRouter.post(
  "/user-game-category/create",
  authMiddleware,
  UserGameCategoryController.createUserGameCategory
);

UserGameCategoryRouter.put(
  "/user-game-category/update/:id",
  authMiddleware,
  UserGameCategoryController.updateUserGameCategory
);

UserGameCategoryRouter.delete(
  "/user-game-category/delete/:id",
  authMiddleware,
  UserGameCategoryController.deleteUserGameCategories
);

UserGameCategoryRouter.get(
  "/user-game-category/:id",
  authMiddleware,
  UserGameCategoryController.findUserGameCategory
);

export default UserGameCategoryRouter;
