import Card from "./card";

const ListCard = ({ movieLists }: any) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 container">
        {movieLists.map((movie: any) => (
          <Card data={movie} />
        ))}
      </div>
    </div>
  );
};
export default ListCard;
