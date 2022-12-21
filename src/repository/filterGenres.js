const filterGenres = (movies, query) => {
  return movies?.filter((movie) => {
    if (!query) {
      return true;
    }
    return (
      movie.title?.toLowerCase().includes(query?.toLowerCase()) ||
      movie.name?.toLowerCase().includes(query?.toLowerCase()) ||
      movie.original_title?.toLowerCase().includes(query?.toLowerCase())
    );
  });
};

export default filterGenres;
