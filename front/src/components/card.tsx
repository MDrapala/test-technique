import React, { useEffect } from "react";
import Heart from "../assets/icons/heart";
import { CardProps } from "../types/default";

const Card = ({ data, favorites, setFavorites }: CardProps) => {
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = favorites.some((movie) => movie.id === data?.id);

  const overview =
    data?.overview.length > 72
      ? data?.overview.slice(0, 72) + "..."
      : data?.overview;

  const handleManageFavoritesMovie = () => {
    if (isFavorite) {
      // Si le film est déjà dans les favoris, le retirer
      const newFavorites = favorites.filter((movie) => movie.id !== data?.id);
      setFavorites(newFavorites);
    } else {
      // Sinon, l'ajouter aux favoris
      const newFavorites = [...favorites, data];
      setFavorites(newFavorites);
    }
  };

  return (
    <article
      className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 w-full transform duration-500 hover:-translate-y-2 cursor-pointer group"
      onClick={() => (window.location.pathname = `/movie/${data?.id}`)}
      style={{
        backgroundImage: `url( ${
          data?.poster_path
            ? `https://image.tmdb.org/t/p/w300${data?.poster_path}`
            : "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png"
        })`,
      }}
    >
      <span
        className="fixed top-4 right-4 z-40 hover:text-red-500 transform duration-300 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleManageFavoritesMovie();
        }}
      >
        {React.cloneElement(<Heart variant="default" size={30} />, {
          color: favorites.find((movie: any) => movie.id === data?.id)
            ? "#FF3333"
            : "#FFFFFF",
        })}
      </span>

      <div className="bg-black bg-opacity-20 h-full min-h-160 w-full px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
        <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
          {data?.title}
        </h1>
        <div className="w-16 h-2  rounded-full mb-12 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
        <p className="flex w-full opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
          {data?.overview ? overview : "No description"}
        </p>
      </div>
    </article>
  );
};

export default Card;
