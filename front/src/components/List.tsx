import { Fragment } from "react";
import Card from "./card";

const ListCard = ({ movieLists }: any) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 container">
        {movieLists.map((movie: any, index: number) => (
          <Fragment key={index}>
            <Card data={movie} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default ListCard;
