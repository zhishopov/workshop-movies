import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    let result = Movie.find({});

    // if (filter.search) {
    //   result = result.filter((movie) =>
    //     movie.title.toLowerCase().includes(filter.search.toLowerCase())
    //   );
    // }

    // if (result.genre) {
    //   result = result.filter(
    //     (movie) => movie.genre.toLowerCase() === filter.genre
    //   );
    // }

    // if (filter.year) {
    //   result = result.filter((movie) => movie.year === filter.year);
    // }

    return result;
  },
  findMovie(movieId) {
    // TODO: if movie is missing?

    const result = movies.find((movie) => movie.id === movieId);

    return result;
  },
  create(movieData) {
    const newId = uuid();

    movies.push({
      id: newId,
      ...movieData,
      rating: Number(movieData.rating),
    });

    return newId;
  },
};
