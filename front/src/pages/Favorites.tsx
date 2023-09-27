import ListCard from "../components/List";
import Layout from "./Layout";

const Favorites = () => {
  const favoriteList = localStorage.getItem("favorites") || "[]";
  const favorites = JSON.parse(favoriteList);

  return (
    <Layout>
      <ListCard movieLists={favorites} />
    </Layout>
  );
};

export default Favorites;
