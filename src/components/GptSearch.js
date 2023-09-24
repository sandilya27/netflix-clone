import GptMovieSuggetions from "./GptMovieSuggetions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div className="bg-login-bg h-screen">
      <GptSearchBar/>
      <GptMovieSuggetions/>
    </div>
  )
}

export default GptSearch