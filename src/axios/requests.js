const api_key = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `trending/all/week?api_key=${api_key}`,
  fetchNetflixOriginalsMovies: `discover/movie?api_key=${api_key}&with_networks=213`,
  fetchHorrorMovies: `discover/movie?api_key=${api_key}&with_genres=27`,
  fetchActionMovies: `discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${api_key}&with_genres=35`,
  fetchDocumentaries: `discover/movie?api_key=${api_key}&with_genres=99`,
  fetchPopularMovies: `discover/movie?api_key=${api_key}&sort_by=popularity.desc`,
  fetchPopularTvSeries: `discover/tv?api_key=${api_key}&sort_by=popularity.desc`,
};

export default requests;
