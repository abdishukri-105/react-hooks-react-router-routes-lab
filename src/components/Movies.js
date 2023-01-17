import React from "react";
import { movies } from "../data";

function Movies() {

  const displaymovies = movies.map(movie => {
    return <div><h1> title :{movie.title}</h1>
                <p>time :{movie.time}</p>
                 genres:<ul>
                           <li>{movie.genres[0]}</li>
                           <li>{movie.genres[1]}</li>
                           <li>{movie.genres[2]}</li>
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
