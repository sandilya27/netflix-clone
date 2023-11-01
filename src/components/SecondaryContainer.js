import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie);
  return (
    <div className="bg-black scrollbar-hide">
      <div className="mt-0 md:-mt-56 pl-4 md:pl-12 relative z-20 scrollbar-hide">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
