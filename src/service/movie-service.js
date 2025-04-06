import movies from "../movies.js";

export default {
  findMovie(movieId) {
    // TODO: if movie is missing?

    const result = movies.find((movie) => movie.id === movieId);

    return result;
  },
};
