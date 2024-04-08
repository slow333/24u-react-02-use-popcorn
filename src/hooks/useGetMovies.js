import {useEffect, useState} from "react";

function useGetMovies(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=7c0d2be6&s=${query}`);
        const moviesData = await res.json();
        if (!res.ok) throw new Error('데이터 수신 실패 💥💥💥');
        setMovies(moviesData.Search);
        setTotal(moviesData.totalResults)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        console.log(err.message)
        setLoading(false);
      }
    }

    if(query.length < 3) return;
    else fetchMovies();
  }, [query])

  return {movies, error,loading, total}

}

export default useGetMovies;