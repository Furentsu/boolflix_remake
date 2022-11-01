const api_key = process.env.REACT_APP_API_KEY;

const requests = {
  fetchNetflixOriginals: `trending/all/week?api_key=${api_key}`,
};

export default requests;
