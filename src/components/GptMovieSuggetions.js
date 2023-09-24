import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggetions = () => {

  const { gptMovieName, gptMovieResult } = useSelector((store) => store.gpt);
  if (!gptMovieName) return null;

  return (
    <div className="p-4 m-4 bg-opacity-90 bg-black">
      <div>
        {gptMovieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggetions;
