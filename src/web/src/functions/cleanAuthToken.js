import { TOKEN_NAME } from "../constants";

export const cleanAuthToken = () => {
  localStorage.removeItem(TOKEN_NAME);
  sessionStorage.removeItem(TOKEN_NAME);
};
