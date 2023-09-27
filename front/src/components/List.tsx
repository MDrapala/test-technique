import { Fragment } from "react";
import Card from "./card";
import { Movie } from "../types/movie";

type PropsListCard = {
  movieLists: Movie[];
};

const ListCard = ({ movieLists }: PropsListCard) => {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
      <section className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-12">
        {movieLists.map((movie, index: number) => (
          <Fragment key={index}>
            <Card data={movie} />
          </Fragment>
        ))}
      </section>
    </section>
  );
};
export default ListCard;
