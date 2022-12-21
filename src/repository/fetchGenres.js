import axios from "../axios/axios";
import requests from "../axios/requests";
import filterGenres from "./filterGenres";

const fetchGenres = async (query) => {
  try {
    const netflixOriginals = await axios.get(
      requests.fetchNetflixOriginalsMovies
    );
    const horrors = await axios.get(requests.fetchHorrorMovies);
    const actions = await axios.get(requests.fetchActionMovies);
    const comedies = await axios.get(requests.fetchComedyMovies);
    const documentaries = await axios.get(requests.fetchDocumentaries);
    return {
      netflixOriginals: filterGenres(netflixOriginals.data.results, query),
      horrors: filterGenres(horrors.data.results, query),
      actions: filterGenres(actions.data.results, query),
      comedies: filterGenres(comedies.data.results, query),
      documentaries: filterGenres(documentaries.data.results, query),
    };
  } catch (err) {
    console.log(err);
  }
};

export default fetchGenres;
