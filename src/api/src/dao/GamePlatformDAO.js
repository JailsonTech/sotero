import { v4 as uuidv4 } from "uuid";

import { db } from "../database/config.js";

export class GamePlatformDAO {
  static create(gamePlatform) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO games_platforms (id, name, iconURL) VALUES (?, ?, ?)",
        [uuidv4(), gamePlatform.name, gamePlatform.iconURL],
        (error) => {
          if (error) {
            reject(new Error("Error on game platform creation."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static update(gamePlatformId, gamePlatform) {
    return new Promise((resolve, reject) => {
      if (gamePlatformId == undefined || typeof gamePlatformId !== "string") {
        reject(new Error("Invalid game platform id."));
      }

      let setSQL = "";

      const gamePlatformProperties = Object.entries(gamePlatform);

      if (!gamePlatformProperties.length) {
        reject(
          new Error(
            "The body should have at least one property to update the game platform."
          )
        );
        return;
      }

      gamePlatformProperties.map(([key, value], index) => {
        if (value) {
          setSQL = setSQL.concat(`${key} = "${value}"`);

          if (
            gamePlatformProperties.length > 1 &&
            index !== gamePlatformProperties.length - 1
          ) {
            setSQL = setSQL.concat(", ");
          }
        }
      });

      db.run(
        `UPDATE games_platforms SET ${setSQL} WHERE id = ?`,
        [gamePlatformId],
        (error) => {
          if (error) {
            reject(new Error("Error on game platform update."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM games_platforms", [], (error, gamesPlatforms) => {
        if (error) {
          reject(new Error("Games platforms not found."));
        } else {
          resolve(gamesPlatforms);
        }
      });
    });
  }

  static findById(gamePlatformId) {
    return new Promise((resolve, reject) => {
      if (gamePlatformId == undefined || typeof gamePlatformId !== "string") {
        reject(new Error("Invalid game platform id."));
      }

      db.get(
        "SELECT * FROM games_platforms WHERE id = ?",
        [gamePlatformId],
        (error, result) => {
          if (error) {
            reject(new Error("Game platform not found"));
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static deleteById(gamePlatformId) {
    return new Promise((resolve, reject) => {
      if (gamePlatformId == undefined || typeof gamePlatformId !== "string") {
        reject(new Error("Invalid game platform id."));
      }

      db.run(
        "DELETE FROM games_platforms WHERE id = ?",
        [gamePlatformId],
        (error) => {
          if (error) {
            reject(new Error("Game platform not found"));
          } else {
            resolve();
          }
        }
      );
    });
  }
}
