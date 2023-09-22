import { useEffect, useState } from "react";
import { getLastMovie } from "./services/get";
import Card from "./components/card";

const App = () => {
  const [lastMovie, setLastMovie] = useState([]);

  useEffect(() => {
    getLastMovie().then((res: any) => setLastMovie(res.data));
  }, []);

  console.log(lastMovie);
  return (
    <div>
      <h1 className="text-xl text-gray-600 justify-center flex items-center my-12">
        Pitchboy test-technique
      </h1>

      <Card data={lastMovie} />
    </div>
  );
};

export default App;
