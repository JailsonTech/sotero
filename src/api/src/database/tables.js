import { db } from "./config.js";

export const createTables = () => {
  db.serialize(() => {
    db.run(
      `
			  CREATE TABLE IF NOT EXISTS users (
				id varchar(40) PRIMARY KEY NOT NUll,
				first_name varchar(60) NOT NULL,
				last_name varchar(60),
				username varchar(60) UNIQUE NOT NULL,
				email varchar(60) UNIQUE NOT NULL,
				password varchar(60) NOT NULL,   
				has_accepted_use_terms varchar(60) NOT NULL
			  );
			`
    );

    db.run(
      `
			  CREATE TABLE IF NOT EXISTS games_platforms (
				id varchar(40) PRIMARY KEY NOT NUll,
				name varchar(60) UNIQUE NOT NULL,
				iconURL varchar(255)
			  );
			`
    );

    db.run(
      `
			  CREATE TABLE IF NOT EXISTS games (
				id varchar(40) PRIMARY KEY NOT NUll,
				name varchar(60) UNIQUE NOT NULL,
				cover_url varchar(255),
				release_date varchar(255),
				abstract varchar(255),
				developer varchar(60),
				publisher varchar(60)
			  );
			`
    );

    db.run(
      `
			  CREATE TABLE IF NOT EXISTS games_categories (
				id varchar(40) PRIMARY KEY NOT NUll,
				name varchar(60) UNIQUE NOT NULL
			  );
			`
    );

    db.run(
      `
			  CREATE TABLE IF NOT EXISTS game_games_plataforms (
				id varchar(40) PRIMARY KEY NOT NULL,
				game_id varchar(40) NOT NULL REFERENCES games(id),
				game_platform_id varchar(40) NOT NULL REFERENCES games_platforms(id)
			  );
			`
    );

    db.run(
      `
			  CREATE TABLE IF NOT EXISTS user_game (
				id varchar(40) PRIMARY KEY NOT NULL,
				user_id varchar(40) NOT NULL REFERENCES users(id),
				game_id varchar(40) NOT NULL REFERENCES games(id),
				grade float
			  );
			`
    );

    db.run(
      `
			  CREATE TABLE IF NOT EXISTS user_game_categories (
				id varchar(40) PRIMARY KEY NOT NULL,
				game_category_id varchar(40) NOT NULL REFERENCES games_categories(id),
				user_game_id varchar(40) NOT NULL REFERENCES user_game(id)
			  );
			`
    );
  });
};
