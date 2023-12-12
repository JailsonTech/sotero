import { v4 as uuidv4 } from "uuid";

import { db } from "../database/config.js";

export class GameCategoryDAO {
  static create(gameCategory) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO games_categories (id, name) VALUES (?, ?)",
        [uuidv4(), gameCategory.name],
        (error) => {
          if (error) {
            reject(new Error("Error on game category creation."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static update(gameCategoryId, gameCategory) {
    return new Promise((resolve, reject) => {
      if (gameCategoryId == undefined || typeof gameCategoryId !== "string") {
        reject(new Error("Invalid game category id."));
      }

      let setSQL = "";

      const gameCategoryProperties = Object.entries(gameCategory);

      if (!gameCategoryProperties.length) {
        reject(
          new Error(
            "The body should have at least one property to update the game category."
          )
        );
        return;
      }

      gameCategoryProperties.map(([key, value], index) => {
        if (value) {
          setSQL = setSQL.concat(`${key} = "${value}"`);

          if (
            gameCategoryProperties.length > 1 &&
            index !== gameCategoryProperties.length - 1
          ) {
            setSQL = setSQL.concat(", ");
          }
        }
      });

      db.run(
        `UPDATE games_categories SET ${setSQL} WHERE id = ?`,
        [gameCategoryId],
        (error) => {
          if (error) {
            reject(new Error("Error on game category update."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM games_categories", [], (error, gamesCategories) => {
        if (error) {
          reject(new Error("Games categories not found."));
        } else {
          resolve(gamesCategories);
        }
      });
    });
  }

  static findById(gameCategoryId) {
    return new Promise((resolve, reject) => {
      if (gameCategoryId == undefined || typeof gameCategoryId !== "string") {
        reject(new Error("Invalid game category id."));
      }

      db.get(
        "SELECT * FROM games_categories WHERE id = ?",
        [gameCategoryId],
        (error, result) => {
          if (error) {
            reject(new Error("Game category not found"));
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static deleteById(gameCategoryId) {
    return new Promise((resolve, reject) => {
      if (gameCategoryId == undefined || typeof gameCategoryId !== "string") {
        reject(new Error("Invalid game category id."));
      }

      db.run(
        "DELETE FROM games_categories WHERE id = ?",
        [gameCategoryId],
        (error) => {
          if (error) {
            reject(new Error("Game category not found"));
          } else {
            resolve();
          }
        }
      );
    });
  }
}
