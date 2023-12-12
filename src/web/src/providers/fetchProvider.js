import axios from "axios";

export function fetchProvider(baseURL) {
  return axios.create({
    baseURL,
  });
}
