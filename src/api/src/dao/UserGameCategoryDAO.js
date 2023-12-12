import { v4 as uuidv4 } from "uuid";

import { db } from "../database/config.js";

export class UserGameCategoryDAO {
  static create(userGameCategory) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO user_game_categories (id, game_category_id, user_game_id) VALUES (?, ?, ?)",
        [
          uuidv4(),
          userGameCategory.game_category_id,
          userGameCategory.user_game_id,
        ],
        (error) => {
          if (error) {
            reject(new Error("Error on user game category creation."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static update(userGameCategoryId, userGameCategory) {
    return new Promise((resolve, reject) => {
      if (
        userGameCategoryId == undefined ||
        typeof userGameCategoryId !== "string"
      ) {
        reject(new Error("Invalid user game category id."));
      }

      let setSQL = "";

      const userGameCategoryProperties = Object.entries(userGameCategory);

      if (!userGameCategoryProperties.length) {
        reject(
          new Error(
            "The body should have at least one property to update the user game category."
          )
        );
        return;
      }

      userGameCategoryProperties.map(([key, value], index) => {
        if (value) {
          setSQL = setSQL.concat(`${key} = "${value}"`);

          if (
            userGameCategoryProperties.length > 1 &&
            index !== userGameCategoryProperties.length - 1
          ) {
            setSQL = setSQL.concat(", ");
          }
        }
      });

      db.run(
        `UPDATE user_game_categories SET ${setSQL} WHERE id = ?`,
        [userGameCategoryId],
        (error) => {
          if (error) {
            reject(new Error("Error on user game category, creation."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM user_game_categories",
        [],
        (error, userGameCategories) => {
          if (error) {
            reject(new Error("User game categories not found."));
          } else {
            resolve(userGameCategories);
          }
        }
      );
    });
  }

  static find(params = {}) {
    return new Promise((resolve, reject) => {
      const paramsProperties = Object.entries(params);

      if (!params || !paramsProperties.length) {
        reject(new Error("Params invalid"));
      }

      let whereString = "";

      paramsProperties.map(([key, value], index) => {
        if (value) {
          whereString += `${key} = "${value}"`;

          if (
            paramsProperties.length > 1 &&
            index !== paramsProperties.length - 1
          ) {
            whereString = whereString.concat(" AND ");
          }
        }
      });

      db.all(
        `SELECT * FROM user_game_categories WHERE ${whereString}`,
        [],
        (error, result) => {
          if (error) {
            reject(new Error("User game category not found"));
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static deleteAllByUserGameId(userGameCategoryId) {
    return new Promise((resolve, reject) => {
      if (
        userGameCategoryId == undefined ||
        typeof userGameCategoryId !== "string"
      ) {
        reject(new Error("Invalid user game category id."));
      }

      db.run(
        "DELETE FROM user_game_categories WHERE user_game_id = ?",
        [userGameCategoryId],
        (error) => {
          if (error) {
            reject(new Error("User game category not found"));
          } else {
            resolve();
          }
        }
      );
    });
  }
}
