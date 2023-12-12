import { db } from "../database/config.js";

export class UserDAO {
  static create(user) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (id, first_name, last_name, username, email, password, has_accepted_use_terms) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          user.id,
          user.first_name,
          user.last_name,
          user.username,
          user.email,
          user.password,
          user.has_accepted_use_terms,
        ],
        (error) => {
          if (error) {
            console.error(error);
            reject(new Error("Error on user creation."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static update(userId, user) {
    return new Promise((resolve, reject) => {
      if (userId == undefined || typeof userId !== "string") {
        reject(new Error("Invalid user id."));
      }

      let setSQL = "";

      const userProperties = Object.entries(user);

      if (!userProperties.length) {
        reject(
          new Error(
            "The body should have at least one property to update the user."
          )
        );
        return;
      }

      userProperties.map(([key, value], index) => {
        if (value) {
          setSQL = setSQL.concat(`${key} = "${value}"`);

          if (
            userProperties.length > 1 &&
            index !== userProperties.length - 1
          ) {
            setSQL = setSQL.concat(", ");
          }
        }
      });

      db.run(`UPDATE users SET ${setSQL} WHERE id = ?`, [userId], (error) => {
        if (error) {
          reject(new Error("Error on user creation."));
        } else {
          resolve();
        }
      });
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM users", [], (error, users) => {
        if (error) {
          console.error(error);
          reject(new Error("Users not found."));
        } else {
          resolve(users);
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

      db.get(
        `SELECT * FROM users WHERE ${whereString}`,
        [],
        (error, result) => {
          if (error || !result) {
            reject(new Error("User not found"));
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static deleteById(userId) {
    return new Promise((resolve, reject) => {
      if (userId == undefined || typeof userId !== "string") {
        reject(new Error("Invalid user id."));
      }

      db.run("DELETE FROM users WHERE id = ?", [userId], (error, result) => {
        if (error) {
          console.error(error);
          reject(new Error("User not found"));
        } else {
          resolve();
        }
      });
    });
  }
}
