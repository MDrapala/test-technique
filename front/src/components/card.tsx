import React, { useEffect, useState } from "react";
import Heart from "../assets/icons/heart";
import { CardProps } from "../types/default";
import Edit from "../assets/icons/edit";
import ModalRender from "./modal";

const Card = ({ data, favorites, setFavorites }: CardProps) => {
  const findFavorite = favorites.find((movie) => movie.id === data?.id);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [describe, setDescribe] = useState(findFavorite?.edits?.describe || "");

  const overview =
    data?.overview.length > 72
      ? data?.overview.slice(0, 72) + "..."
      : data?.overview;

  const handleManageFavoritesMovie = () => {
    if (findFavorite) {
      const newFavorites = favorites.filter((movie) => movie.id !== data?.id);
      setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, data];
      setFavorites(newFavorites);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newFavorites = favorites.map((movie) => {
      if (movie.id === data?.id) {
        return { ...movie, edits: { ...movie.edits, describe: describe } };
      }
      return movie;
    });

    setFavorites(newFavorites);
    setOpenEditModal(false);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
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
          className="fixed top-4 right-12 z-40 transform duration-300 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOpenEditModal(true);
          }}
        >
          {findFavorite &&
            React.cloneElement(<Edit variant="default" size={30} />, {
              color: favorites?.find(
                (movie) => movie.id === data?.id && movie.edits?.describe
              )
                ? "#FF3333"
                : "#FFFFFF",
            })}
        </span>
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
      {openEditModal && (
        <ModalRender
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
          className="animate-in slide-in-from-bottom flex justify-center absolute top-[25%] lg:w-[calc(100%-900px)] md:w-[calc(100%-300px)] sm:w-[calc(100%-200px)] xs:w-full left-[30vw] py-3 max-h-[1000px] bg-white rounded-md shadow-lg"
        >
          <div className="w-[52vw] flex flex-col items-center justify-center">
            <h1 className="uppercase text-2xl flex justify-center items-center my-4">
              Add note ({data?.title})
            </h1>
            <textarea
              className="bg-gray-100 p-2 rounded-md w-96"
              name="describe"
              rows={5}
              placeholder="Your message"
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
            />
            <button
              className="mt-5 bg-green-200 hover:bg-green-300 rounded-lg px-4 py-2 text-green-800 w-96"
              onClick={(e) => handleSubmit(e)}
            >
              Save
            </button>
          </div>
        </ModalRender>
      )}
    </>
  );
};

export default Card;
