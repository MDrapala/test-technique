import { Movie } from "./movie";

export type PropsSortBy = "desc" | "asc";

export interface CardProps {
  data: Movie;
  favorites: Movie[];
  setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>;
}
