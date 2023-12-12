import { v4 as uuidv4 } from "uuid";

export class User {
  constructor(
    first_name,
    last_name,
    username,
    email,
    password,
    has_accepted_use_terms
  ) {
    this.id = uuidv4();
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.has_accepted_use_terms = has_accepted_use_terms;
  }
}
