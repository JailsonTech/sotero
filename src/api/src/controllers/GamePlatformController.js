import { GamePlatformDAO } from "../dao/GamePlatformDAO.js";

export class GamePlatformController {
  static async createGamePlatform(request, response) {
    try {
      const gamePlatform = request.body;

      await GamePlatformDAO.create(gamePlatform);

      return response
        .status(201)
        .json({ message: "Game platform created succesfully.", gamePlatform });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async updateGamePlatform(request, response) {
    try {
      const gamePlatform = request.body;
      const gamePlatformId = request.params.id;

      await GamePlatformDAO.update(gamePlatformId, gamePlatform);

      return response
        .status(201)
        .json({ message: "Game platform succesfully updated.", gamePlatform });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listGamesPlatforms(request, response) {
    try {
      const gamesPlatforms = await GamePlatformDAO.findAll();

      return response.json({ gamesPlatforms });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
  7;

  static async findGamePlatform(request, response) {
    try {
      const gamePlatformId = request.params.id;
      const gamePlatform = await GamePlatformDAO.findById(gamePlatformId);

      return response.json({ gamePlatform });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async deleteGamePlatform(request, response) {
    try {
      const gamePlatformId = request.params.id;

      await GamePlatformDAO.deleteById(gamePlatformId);

      return response.json({
        message: "Game platform was succesfully deleted.",
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}
