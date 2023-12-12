import { UserDAO } from "../dao/UserDAO.js";

export class UserController {
  static async updateUser(request, response) {
    try {
      const user = request.body;
      const userId = request.params.id;

      await UserDAO.update(userId, user);

      return response
        .status(201)
        .json({ message: "User succesfully updated", user });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listUsers(request, response) {
    try {
      const users = await UserDAO.findAll();

      return response.json({ users });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
  7;

  static async findUser(request, response) {
    try {
      const userId = request.params.id;

      const user = await UserDAO.findById(userId);

      return response.json({ user });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async deleteUser(request, response) {
    try {
      const userId = request.params.id;

      await UserDAO.deleteById(userId);

      return response.json({ message: "User was succesfully deleted." });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}
