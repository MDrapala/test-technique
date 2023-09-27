import { CardProps } from "../types/default";

const Card = ({ data }: CardProps) => {
  const overview =
    data?.overview.length > 72
      ? data?.overview.slice(0, 72) + "..."
      : data?.overview;

  return (
    <article
      className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 w-full transform duration-500 hover:-translate-y-2 cursor-pointer group"
      onClick={() => window.open(`/movie/${data?.id}`)}
      style={{
        backgroundImage: `url( ${
          data?.poster_path
            ? `https://image.tmdb.org/t/p/w300${data?.poster_path}`
            : "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png"
        })`,
      }}
    >
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
