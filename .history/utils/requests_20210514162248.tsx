// const API_KEY = process.env.API_KEY;

// export default {
//   fetchTrending: {
//     title: "Trending",
//     url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   },
//   fetchTopRated: {
//     title: "Top Rated",
//     url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   },
//   fetchActionMovies: {
//     title: "Action",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   },
//   fetchComedyMovies: {
//     title: "Comedy",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   },
//   fetchHorrorMovies: {
//     title: "Horror",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   },
//   fetchRomanceMovies: {
//     title: "Romance",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   },
//   fetchMystery: {
//     title: "Mystery",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
//   },
//   fetchSciFi: {
//     title: "Sci-Fi",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//   },
//   fetchWestern: {
//     title: "Western",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
//   },
//   fetchAnimation: {
//     title: "Animation",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//   },
//   fetchTV: {
//     title: "TV Movie",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
//   },
// };





import axios from 'axios';

const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1
      }
    })

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) { }
}

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1
      }
    })
    const modifiedData = data['genres'].map((g) => ({
      id: g['id'],
      name: g['name']
    }))
    return modifiedData;
  } catch (error) { }
}

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
        with_genres: genre_id
      }
    })
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) { }
}

export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey
      }
    })
    const modifiedData = data['results'].map((p) => ({
      id: p['id'],
      popularity: p['popularity'],
      name: p['name'],
      profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
      known: p['known_for_department']
    }))
    return modifiedData;
  } catch (error) { }
}

export const fetchTopratedMovie = async () => {
  try {
    const { data } = await axios.get(topratedUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1
      }
    })
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) {

  }
}

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: 'en_US'
      }
    });
    return data;
  } catch (error) { }
}

export const fetchMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      }
    });
    return data['results'][0];
  } catch (error) { }
}

export const fetchCasts = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
      }
    });
    const modifiedData = data['cast'].map((c) => ({
      id: c['cast_id'],
      character: c['character'],
      name: c['name'],
      img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
    }))

    return modifiedData;
  } catch (error) { }
}

export const fetchSimilarMovie = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
      params: {
        api_key: apiKey,
        language: 'en_US'
      }
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) { }
}
