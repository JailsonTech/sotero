import { UserGameCategoryDAO } from "../dao/UserGameCategoryDAO.js";

export class UserGameCategoryController {
  static async createUserGameCategory(request, response) {
    try {
      const userGameCategory = request.body;

      await UserGameCategoryDAO.create(userGameCategory);

      return response.status(201).json({
        message: "User game category created succesfully.",
        userGameCategory,
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async updateUserGameCategory(request, response) {
    try {
      const userGameCategory = request.body;
      const userGameCategoryId = request.params.id;

      await UserGameCategoryDAO.update(userGameCategoryId, userGameCategory);

      return response.status(201).json({
        message: "User game category succesfully updated.",
        userGameCategory,
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listUserGamesCategories(request, response) {
    try {
      const userGamesCategories = await UserGameCategoryDAO.findAll();

      return response.json({ userGamesCategories });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async findUserGameCategory(request, response) {
    try {
      const userGameCategoryId = request.params.id;
      const userGameCategory = (
        await UserGameCategoryDAO.find(userGameCategoryId)
      )[0];

      return response.json({ userGameCategory });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async deleteUserGameCategories(request, response) {
    try {
      const userGameId = request.params.id;

      await UserGameCategoryDAO.deleteAllByUserGameId(userGameId);

      return response.json({
        message: "User game categories was succesfully deleted.",
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}
