import { TOKEN_NAME } from "../constants";

export function setAuthToken(token, rememberMe) {
  const newAuthToken = `Bearer ${token}`;

  if (!rememberMe) {
    localStorage.setItem(TOKEN_NAME, newAuthToken);
    return;
  }
  sessionStorage.setItem(TOKEN_NAME, newAuthToken);
}
