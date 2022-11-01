const api_key = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `trending/all/week?api_key=${api_key}`,
  fetchHorror: `discover/movie?api_key=${api_key}&with_genres=27`,
};

export default requests;
