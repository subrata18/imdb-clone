const API_KEY = process.env.API_KEY;


export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};



// import axios from 'axios';

// const apiKey = 'a4999a28333d1147dbac0d104526337a';
// const url = 'https://api.themoviedb.org/3';
// const nowPlayingUrl = `${url}/movie/now_playing`;
// const topratedUrl = `${url}/movie/top_rated`;
// const movieUrl = `${url}/movie`;
// const moviesUrl = `${url}/discover/movie`;

// export const fetchMovies = async () => {
//   try {
//     const { data } = await axios.get(nowPlayingUrl, {
//       params: {
//         api_key: apiKey,
//         language: 'en_US',
//         page: 1
//       }
//     })

//     const posterUrl = 'https://image.tmdb.org/t/p/original/';
//     const modifiedData = data['results'].map((m) => ({
//       id: m['id'],
//       backPoster: posterUrl + m['backdrop_path'],
//       popularity: m['popularith'],
//       title: m['title'],
//       poster: posterUrl + m['poster_path'],
//       overview: m['overview'],
//       rating: m['vote_average'],
//     }))

//     return modifiedData;
//   } catch (error) { }
// }


// export const fetchTopratedMovie = async () => {
//   try {
//     const { data } = await axios.get(topratedUrl, {
//       params: {
//         api_key: apiKey,
//         language: 'en_US',
//         page: 1
//       }
//     })
//     const posterUrl = 'https://image.tmdb.org/t/p/original/';
//     const modifiedData = data['results'].map((m) => ({
//       id: m['id'],
//       backPoster: posterUrl + m['backdrop_path'],
//       popularity: m['popularith'],
//       title: m['title'],
//       poster: posterUrl + m['poster_path'],
//       overview: m['overview'],
//       rating: m['vote_average'],
//     }))

//     return modifiedData;
//   } catch (error) {

//   }
// }

