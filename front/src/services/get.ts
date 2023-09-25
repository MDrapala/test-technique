const API_KEY = "?api_key=6a46855662346957d41ea78b3e983221&";

export const getLastMovie = async () => {
  const get = await fetch(
    "https://api.themoviedb.org/3/discover/movie" +
      API_KEY +
      "page=1&sort_by=primary_release_date.desc"
  );
  const data = await get.json();

  return data;
};
