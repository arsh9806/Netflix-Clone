import React, { useState, useEffect } from 'react'
import axios from "../axios";
import "../assets/Row.css";
import YouTube from 'react-youtube';


const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);


    function fetchVideoLink(videoId) {
      const url = `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=8789b2e1805f257e5339cb972533b290`;
      axios.get(url).then(res => {
        if(res.data.results.length != 0)
        console.log(res.data.results[0]?.key);
        setTrailerUrl(res.data.results[0]?.key);
      })
      .then(movieKey => movieKey);
    }

    const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      fetchVideoLink(movie.id);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
    return (
        <div className="row">

            <h2>{title}</h2>

            <div className="row__posters">
                {
                    movies.map(movie => (
                        <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt="" />
                    ))
                }

            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row; 
