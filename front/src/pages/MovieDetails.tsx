import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FindMovieById } from "../services/get";
import Layout from "./Layout";
import { Movie } from "../types/movie";
import { FormatDate } from "../utils/convert";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState<Movie>();

  const loadMovieDetails = async () => {
    const movieDetails = await FindMovieById(params.id as string);
    if (movieDetails) setMovie(movieDetails);
  };

  useEffect(() => {
    loadMovieDetails().catch((error: TypeError) => console.error(error));
  }, []);

  const movieInfo = [
    {
      title: "ID",
      value: movie?.id,
    },
    {
      title: "IMDB ID",
      value: movie?.imdb_id,
    },
    {
      title: "TITLE",
      value: movie?.title,
    },
    {
      title: "LANGUAGE",
      value: movie?.original_language,
    },
    {
      title: "RELEASE DATE",
      value: FormatDate(movie?.release_date),
    },
    {
      title: "POPULARITY",
      value: movie?.popularity,
    },
  ];

  return (
    <Layout>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden md:sticky">
          <img
            className="md:w-96"
            alt="movie poster"
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie?.poster_path}`
                : "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png"
            }
          />
        </div>
        <div className="md:hidden">
          <img
            className="w-full"
            alt="movie poster"
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie?.poster_path}`
                : "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png"
            }
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          {movieInfo.map((info) => (
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                {info.title}
              </p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                  {info?.value}
                </p>
              </div>
            </div>
          ))}

          <a
            href={movie?.homepage}
            target="_blank"
            className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none"
          >
            The Movie Database (TMDB)
          </a>
          <div className="w-full flex ">
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
              {movie?.overview ? movie?.overview : "No description"}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
