import bcrypt from "bcryptjs";

import { UserDAO } from "../dao/UserDAO.js";
import { User } from "../models/User.js";
import generateToken from "../functions/generateToken.js";

export class AuthController {
  static async signUp(request, response) {
    try {
      let { password, ...user } = request.body;

      if (password.length < 8) {
        throw Error("Password must have at least 8 characters.");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const userModel = new User(
        user.first_name,
        user.last_name,
        user.username,
        user.email,
        hashedPassword,
        user.has_accepted_use_terms
      );

      await UserDAO.create(userModel);

      const token = generateToken({ id: userModel.id });

      password = undefined;

      return response.json({ token });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async login(request, response) {
    try {
      let { email, username, password } = request.body;

      let user;

      if (email) {
        user = await UserDAO.find({ email });
      } else if (username) {
        user = await UserDAO.find({ username });
      } else {
        throw new Error("");
      }

      const isPasswordRight = await bcrypt.compare(password, user.password);

      if (!isPasswordRight) {
        throw new Error("Invalid password.");
      }

      const token = generateToken({ id: user.id });

      password = undefined;

      return response.json({ token });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}
