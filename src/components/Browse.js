import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import usePopularMovies from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovie";
import useUpcomingMovies from "../hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearchView);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="scrollbar-hide">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
