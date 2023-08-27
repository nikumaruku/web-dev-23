import React, { useEffect, useState } from "react";
import "./App.css";
import SearchSVG from "./search.svg";
import MovieCard from "./components/MovieCard";

const API_KEY = "http://www.omdbapi.com/?apikey=41565149";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>MovieNest</h1>
      <div className="search">
        <input
          placeholder=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchSVG}
          alt="Search Icon"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
