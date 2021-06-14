const APIKEY = "360a9b5e0dea438bac3f653b0e73af47";

const requests = {
  fetchTrending:
    "/trending/all/week?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US",
  fetchNetflixOriginals:
    "/discover/tv?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=213",
  fetchTopRated:
    "/movie/top_rated?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US",
  fetchActionMovies:
    "/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=28",
  fetchComedyMovies:
    "/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=35",
  fetchHorrorMovies:
    "/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=27",
  fetchRomanceMovies:
    "/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=10749",
  fetchDocumentaries:
    "/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=99"
};
export default requests;
