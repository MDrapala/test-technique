interface CardProps {
  data: any;
}

const Card = ({ data }: CardProps) => {
  return (
    <div>
      <div className="flex max-w-sm w-full rounded-lg overflow-hidden mx-auto">
        <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card">
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
          <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
            <div className="poster__info align-self-end w-full">
              <div className="h-32" />
              <div className="space-y-6 detail_info">
                <div className="flex flex-col space-y-2 inner">
                  <h3
                    className="text-2xl font-bold text-white"
                    data-unsp-sanitized="clean"
                  >
                    {data.original_title}
                  </h3>
                  <div className="mb-0 text-lg text-gray-400"></div>
                </div>
                <div className="flex flex-row justify-between datos">
                  <div className="flex flex-col datos_col">
                    <div className="popularity">{data.original_language}</div>
                    <div className="text-sm text-gray-400">Language:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release">{data.runtime} min</div>
                    <div className="text-sm text-gray-400">Runtime:</div>
                  </div>
                </div>
                <div className="flex flex-col overview">
                  <div className="flex flex-col"></div>
                  <div className="text-xs text-gray-400 mb-2">Overview:</div>
                  <p className="text-xs text-gray-100 mb-6">{data.overview}</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute inset-0 transform w-full -translate-y-4"
            src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
          />
          <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
            <a
              className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
              href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
              target="_blank"
              data-unsp-sanitized="clean"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="text-sm text-white ml-2">Set reminder</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
