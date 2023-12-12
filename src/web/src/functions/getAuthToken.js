import { TOKEN_NAME } from "../constants";

export function getAuthToken() {
  const token =
    localStorage.getItem(TOKEN_NAME) ?? sessionStorage.getItem(TOKEN_NAME);

  return token;
}
