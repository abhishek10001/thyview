// import React from "react";
// import { Link } from "react-router-dom";
// import "./Movie.css";

// const Movie = ({ movie }) => {
//   return (
//     <>
//       <div className="movie">
//         <article className="card">
//           <img
//             className="card__background"
//             src={movie.image_url}
//             alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
//             width="1920"
//             height="2193"
//           />
//           <div className="card__content | flow">
//             <div className="card__content--container | flow">
//               <h3 className="card__title">{movie.name}</h3>
//               <p className="card__description">{movie.description}</p>
//             </div>
//             <button className="card__button">
//               <Link className="link" to={`/movie/${movie._id}`}>
//                 Review
//               </Link>
//             </button>
//           </div>
//         </article>
//       </div>
//     </>
//   );
// };

// export default Movie;


import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ movie }) => {
  console.log("Rendering movie:", movie); // Debugging log

  return (
    <div className="movie">
      <article className="card">
        <img
          className="card__background"
          src={movie.image_url || "default-placeholder.jpg"}
          alt={movie.name || "Movie Image"}
          width="1920"
          height="2193"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h3 className="card__title">{movie.name}</h3>
            <p className="card__description">{movie.description}</p>
          </div>
          <button className="card__button">
            <Link className="link" to={`/movie/${movie._id}`}>
              Review
            </Link>
          </button>
        </div>
      </article>
    </div>
  );
};

export default Movie;

