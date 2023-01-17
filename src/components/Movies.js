import React from "react";
import { movies } from "../data";

function Movies() {

  const displaymovies = movies.map(movie => {
    return <div key={movie.title}>
             <h2> title :{movie.title}</h2>
                <h3>time :{movie.time}</h3>
                 genres:<ul>
                           {movie.genres.map((genre)=>(
                           <li key={genre}>{genre}</li>
                          ))}
                        </ul>
          </div>
  })
  return <div>
    <h1>Movies Page</h1>
    <div>
      {displaymovies}
    </div>
  </div>;
}

export default Movies;
