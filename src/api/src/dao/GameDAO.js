import { v4 as uuidv4 } from "uuid";

import { db } from "../database/config.js";

export class GameDAO {
  static create(game) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO games (id, name, release_date, abstract, developer, publisher, cover_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          uuidv4(),
          game.name,
          game.release_date,
          game.abstract,
          game.developer,
          game.publisher,
          game.cover_url,
        ],
        (error) => {
          if (error) {
            reject(new Error("Error on game creation."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static update(gameId, game) {
    return new Promise((resolve, reject) => {
      if (gameId == undefined || typeof gameId !== "string") {
        reject(new Error("Invalid game id."));
      }

      let setSQL = "";

      const gameProperties = Object.entries(game);

      if (!gameProperties.length) {
        reject(
          new Error(
            "The body should have at least one property to update the game."
          )
        );
        return;
      }

      gameProperties.map(([key, value], index) => {
        if (value) {
          setSQL = setSQL.concat(`${key} = "${value}"`);

          if (
            gameProperties.length > 1 &&
            index !== gameProperties.length - 1
          ) {
            setSQL = setSQL.concat(", ");
          }
        }
      });

      db.run(`UPDATE games SET ${setSQL} WHERE id = ?`, [gameId], (error) => {
        if (error) {
          reject(new Error("Error on game update."));
        } else {
          resolve();
        }
      });
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM games", [], (error, games) => {
        if (error) {
          reject(new Error("Games not found."));
        } else {
          resolve(games);
        }
      });
    });
  }

  static findById(gameId) {
    return new Promise((resolve, reject) => {
      if (gameId == undefined || typeof gameId !== "string") {
        reject(new Error("Invalid game id."));
      }

      db.get("SELECT * FROM games WHERE id = ?", [gameId], (error, result) => {
        if (error) {
          reject(new Error("Game not found"));
        } else {
          resolve(result);
        }
      });
    });
  }

  static deleteById(gameId) {
    return new Promise((resolve, reject) => {
      if (gameId == undefined || typeof gameId !== "string") {
        reject(new Error("Invalid game id."));
      }

      db.run("DELETE FROM games WHERE id = ?", [gameId], (error, result) => {
        if (error) {
          reject(new Error("Game not found"));
        } else {
          resolve();
        }
      });
    });
  }
}
