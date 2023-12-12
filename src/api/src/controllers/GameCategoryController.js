import { GameCategoryDAO } from "../dao/GameCategoryDAO.js";

export class GameCategoryController {
  static async createGameCategory(request, response) {
    try {
      const gameCategory = request.body;

      await GameCategoryDAO.create(gameCategory);

      return response
        .status(201)
        .json({ message: "Game category created succesfully.", gameCategory });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async updateGameCategory(request, response) {
    try {
      const gameCategory = request.body;
      const gameCategoryId = request.params.id;

      await GameCategoryDAO.update(gameCategoryId, gameCategory);

      return response
        .status(201)
        .json({ message: "Game category succesfully updated.", gameCategory });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listGamesCategories(request, response) {
    try {
      const gamesCategories = await GameCategoryDAO.findAll();

      return response.json({ gamesCategories });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
  7;

  static async findGameCategory(request, response) {
    try {
      const gameCategoryId = request.params.id;
      const gameCategory = await GameCategoryDAO.findById(gameCategoryId);

      return response.json({ gameCategory });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async deleteGameCategory(request, response) {
    try {
      const gameCategoryId = request.params.id;

      await GameCategoryDAO.deleteById(gameCategoryId);

      return response.json({
        message: "Game category was succesfully deleted.",
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}
