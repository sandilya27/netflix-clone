import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

   if(!movies) return;

  const random = Math.floor(Math.random() * 20);
  const mainMovie = movies[random];
 

  const {original_title,overview,id} = mainMovie;

  return (
    <div className="pt-[30%] sm:pt-[18%] md:pt-0 bg-black scrollbar-hide">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground trailerId={id} />
    </div>
  );
};

export default MainContainer;
