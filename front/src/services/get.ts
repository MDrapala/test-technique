import { PropsSortBy } from "../types/default";

const WEB_SITE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=6a46855662346957d41ea78b3e983221&";

export const FilterMovieByOrder = async (sortBy: PropsSortBy) => {
  const get = await fetch(
    `${WEB_SITE_URL}/discover/movie${API_KEY}page=1&sort_by=primary_release_date.${sortBy}`
  );
  const data = await get.json();
  return data;
};
