import { useEffect, useState } from "react";
import { getLastMovie } from "./services/get";
import Menu from "./components/menu";
import ListCard from "./components/List";

type TheMovieDBResult = {
  page: number;
  results: Array<any>;
  total_pages: number;
  total_results: number;
};

const App = () => {
  const [movieList, setMovieList] = useState<TheMovieDBResult>();

  const loadLastMovie = async () => {
    const res = await getLastMovie();
    setMovieList(res);
  };

  useEffect(() => {
    loadLastMovie().catch((error) => console.error(error));
  }, []);

  console.log(movieList);
  return (
    <div className="bg-gray-100">
      <Menu />
      {movieList?.results && <ListCard movieLists={movieList?.results} />}
    </div>
  );
};

export default App;
