import { Movie } from "./movie";

export type TheMovieDBResult = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
