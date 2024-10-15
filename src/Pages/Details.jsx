import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from 'react-youtube';
import './Details.css'; // Import the new CSS file

const Details = () => {
  const movieid = useLocation();
  let specific = movieid.state.card;
  let [trailer, setTrailers] = useState(null);

  async function getTrailers(id) {
    try {
      const response = await fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=3ccc226ae18a08e9ac2dfa31c2e0de39`);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setTrailers(data.results[0].key);
      } else {
        console.log("No trailers available");
      }
    } catch (error) {
      console.error("Error fetching trailers:", error);
    }
  }


  return (
    <div className="details-container">
      <div className="image-container">
        <img
          id="img"
          src={`https://image.tmdb.org/t/p/original/${specific.backdrop_path}`}
          alt={specific.title || "Movie Image"}
          onError={(e) => { e.target.src = 'path/to/placeholder/image.jpg'; }}
        />
      </div>
      <div className="details-card">
        <div className="legend">
          <h4 >{specific.title}</h4>
          <p>{specific.overview}</p>
          <h2>Rating: {specific.vote_average}</h2>
          <button className="playtrailer" onClick={() => {
            getTrailers(specific.id);
            console.log('Trailer:', trailer);
          }}>Play Trailer</button>

        </div>
        {trailer && (
          <div className="trailer">
            <YouTube videoId={trailer} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
