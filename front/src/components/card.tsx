import { formatDate } from "../utils/convert";

interface CardProps {
  data: any;
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="">
      <div className=" bg-gray-100 flex flex-col sm:py-12">
        <div className="py-3 sm:max-w-xl sm:mx-auto h-full">
          <div className="bg-white shadow-lg border-gray-100 min-h-66 border sm:rounded-3xl p-8 flex space-x-8">
            <div className="h-full overflow-visible w-1/2">
              <img
                className="rounded-3xl shadow-lg h-72"
                src={
                  data?.poster_path
                    ? `https://image.tmdb.org/t/p/w300${data?.poster_path}`
                    : "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png"
                }
                alt=""
              />
            </div>
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold">{data?.title}</h2>
                <div className="bg-yellow-400 font-bold rounded-xl p-2">
                  {data?.vote_count.toFixed(1)}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Movie</div>
                <div className="text-lg text-gray-800">
                  {formatDate(data?.release_date)}
                </div>
              </div>
              <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                {data?.overview
                  ? data?.overview.substring(0, 64) + "..."
                  : "No description"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
