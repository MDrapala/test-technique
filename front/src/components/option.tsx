import { PropsSortBy } from "../types/default";

type PropsOptions = {
  sortBy: PropsSortBy;
  setSortBy: (sortBy: PropsSortBy) => void;
};

export const Options = ({ sortBy, setSortBy }: PropsOptions) => {
  return (
    <div className="flex justify-end">
      <button
        className="mt-5 mr-5 space-x-1 py-2 px-1 bg-red-500 rounded-md text-white font-bold"
        onClick={() => setSortBy(sortBy === "desc" ? "asc" : "desc")}
      >
        Filtered by {sortBy === "desc" ? "asc" : "desc"}
      </button>
    </div>
  );
};

export default Options;
