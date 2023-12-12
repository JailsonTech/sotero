import { GameDAO } from "../dao/GameDAO.js";
import { GameCategoryDAO } from "../dao/GameCategoryDAO.js";
import { UserGameCategoryDAO } from "../dao/UserGameCategoryDAO.js";
import { UserGameDAO } from "../dao/UserGameDAO.js";

export class UserGameController {
  static async createUserGame(request, response) {
    const userGame = request.body;
    const user_id = request.userId;

    const isGameAlreadyInUserLibrary = await UserGameDAO.find({
      game_id: userGame.game_id,
      user_id,
    });

    try {
      if (isGameAlreadyInUserLibrary?.length) {
        throw new Error("Este jogo já está adicionado na biblioteca.");
      }

      const { userGameId } = await UserGameDAO.create({
        ...userGame,
        user_id,
      });

      return response.status(201).json({
        message: "User game created succesfully.",
        userGame,
        userGameId,
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async updateUserGame(request, response) {
    try {
      const userGame = request.body;
      const userGameId = request.params.id;

      await UserGameDAO.update(userGameId, userGame);

      return response
        .status(201)
        .json({ message: "User game succesfully updated.", userGame });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listAllUserGames(request, response) {
    try {
      const userGames = await UserGameDAO.findAll();

      return response.json({ userGames });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listUserGames(request, response) {
    try {
      const userGames = await UserGameDAO.find({ user_id: request.userId });

      const userGamesSerialized = await Promise.all(
        userGames.map((userGame) => {
          return GameDAO.findById(userGame.game_id).then((r) => ({
            ...userGame,
            game: r,
          }));
        })
      );

      return response.json({ userGames: userGamesSerialized });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async findUserGame(request, response) {
    try {
      const userGameId = request.params.id;
      const userGame = (await UserGameDAO.find({ id: userGameId }))[0];

      const gameData = await GameDAO.findById(userGame.game_id);

      const categories = await UserGameCategoryDAO.find({
        user_game_id: userGameId,
      });

      const categoriesSerialized = await Promise.all(
        categories.map((category) => {
          return GameCategoryDAO.findById(category.game_category_id).then(
            (r) => ({
              ...category,
              ...r,
            })
          );
        })
      );

      return response.json({
        userGame: {
          ...userGame,
          ...gameData,
          categories: categoriesSerialized,
        },
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async deleteUserGame(request, response) {
    try {
      const userGameId = request.params.id;

      await UserGameDAO.deleteById(userGameId);

      return response.json({ message: "User game was succesfully deleted." });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}
