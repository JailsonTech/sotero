import { GameDAO } from "../dao/GameDAO.js";

export class GameController {
  static async createGame(request, response) {
    try {
      const game = request.body;

      await GameDAO.create(game);

      return response
        .status(201)
        .json({ message: "Game created succesfully.", game });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async updateGame(request, response) {
    try {
      const game = request.body;
      const gameId = request.params.id;

      await GameDAO.update(gameId, game);

      return response
        .status(201)
        .json({ message: "Game succesfully updated.", game });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listGames(request, response) {
    try {
      const games = await GameDAO.findAll();

      return response.json({ games });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
  7;

  static async findGame(request, response) {
    try {
      const gameId = request.params.id;
      const game = await GameDAO.findById(gameId);

      return response.json({ game });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async deleteGame(request, response) {
    try {
      const gameId = request.params.id;

      await GameDAO.deleteById(gameId);

      return response.json({ message: "Game was succesfully deleted." });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}
