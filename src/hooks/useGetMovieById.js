import {useEffect, useState} from "react";

function useGetMovieById(id) {
  const [movieDetail, setMovieDetail] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=7c0d2be6&i=${id}`);
        const movieData = await res.json();
        if (!res.ok) throw new Error('데이터 수신 실패 💥💥💥');
        setMovieDetail(movieData);
        setLoading(false)
      } catch (err) {
        setError(err.message)
        console.log(err.message)
        setLoading(false);
      }
    }
    fetchMovies();
  }, [id])

  return {movieDetail, error,loading}

}

export default useGetMovieById;