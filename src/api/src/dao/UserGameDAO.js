import { v4 as uuidv4 } from "uuid";

import { db } from "../database/config.js";

export class UserGameDAO {
  static create(userGame) {
    return new Promise((resolve, reject) => {
      const userGameId = uuidv4();

      db.run(
        "INSERT INTO user_game (id, user_id, game_id, grade) VALUES (?, ?, ?, ?)",
        [userGameId, userGame.user_id, userGame.game_id, userGame.grade],
        (error) => {
          if (error) {
            console.error(error);
            reject(new Error("Error on user game creation."));
          } else {
            resolve({ userGameId });
          }
        }
      );
    });
  }

  static update(userGameId, userGame) {
    return new Promise((resolve, reject) => {
      if (userGameId == undefined || typeof userGameId !== "string") {
        reject(new Error("Invalid user game id."));
      }

      let setSQL = "";

      const userGameProperties = Object.entries(userGame);

      if (!userGameProperties.length) {
        reject(
          new Error(
            "The body should have at least one property to update the user game."
          )
        );
        return;
      }

      userGameProperties.map(([key, value], index) => {
        if (value) {
          setSQL = setSQL.concat(`${key} = "${value}"`);

          if (
            userGameProperties.length > 1 &&
            index !== userGameProperties.length - 1
          ) {
            setSQL = setSQL.concat(", ");
          }
        }
      });

      db.run(
        `UPDATE user_game SET ${setSQL} WHERE id = ?`,
        [userGameId],
        (error) => {
          if (error) {
            reject(new Error("Error on user game, creation."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM user_game", [], (error, usersGames) => {
        if (error) {
          reject(new Error("Users games not found."));
        } else {
          resolve(usersGames);
        }
      });
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
        `SELECT * FROM user_game WHERE ${whereString}`,
        [],
        (error, result) => {
          if (error) {
            reject(new Error("User game not found"));
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static deleteById(userGameId) {
    return new Promise((resolve, reject) => {
      if (userGameId == undefined || typeof userGameId !== "string") {
        reject(new Error("Invalid user game id."));
      }

      db.run("DELETE FROM user_game WHERE id = ?", [userGameId], (error) => {
        if (error) {
          reject(new Error("User game not found"));
        } else {
          resolve();
        }
      });
    });
  }
}
