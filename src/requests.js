const API_KEY = "8789b2e1805f257e5339cb972533b290";
const requests = {
    fetchTrends: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16`, //extra category
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`, //extra category
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}`,
    // fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=213`,
  };
  
  export default requests;
