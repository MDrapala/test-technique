import { EditMovie, Movie } from "./movie";

export type PropsSortBy = "desc" | "asc";

export interface CardProps {
  data: Movie;
  favorites: EditMovie[];
  setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>;
}
