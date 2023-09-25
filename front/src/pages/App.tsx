import { useEffect, useState } from "react";
import { FilterMovieByOrder } from "../services/get";
import Menu from "../components/menu";
import ListCard from "../components/List";
import type { PropsSortBy } from "../types/default";
import type { TheMovieDBResult } from "../types/themoviedb";
import Options from "../components/option";

const App = () => {
  const [movieList, setMovieList] = useState<TheMovieDBResult>();
  const [sortBy, setSortBy] = useState<PropsSortBy>("desc");

  const loadMovie = async () => {
    const res = await FilterMovieByOrder(sortBy);
    setMovieList(res);
  };

  useEffect(() => {
    loadMovie().catch((error) => console.error(error));
  }, [sortBy]);

  return (
    <div className="bg-gray-100">
      <Menu />
      <Options sortBy={sortBy} setSortBy={setSortBy} />
      {movieList?.results && <ListCard movieLists={movieList?.results} />}
    </div>
  );
};

export default App;
