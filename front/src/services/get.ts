import http from "../http-common";

const API_KEY = "?api_key=6a46855662346957d41ea78b3e983221";

export const getLastMovie = () => {
  return http.get("/movie/latest" + API_KEY);
};
