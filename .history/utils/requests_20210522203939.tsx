
import React from "react";
//const API_KEY = process.env.API_KEY;

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
























































// import 'isomorphic-unfetch';


// const BASE_URI = 'https://api.themoviedb.org/3/movie';
// const IMAGE_BASE_URI = 'https://image.tmdb.org/t/p';

// const fetchWithErrorHandling = async url => {
//   try {
//     return await (await fetch(url)).json();
//   } catch (err) {
//     return { error: true };
//   }
// };

// export const getMovieDetails = async id =>
//   fetchWithErrorHandling(
//     `${BASE_URI}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`
//   );

// export const getUpcomingMovies = async () =>
//   fetchWithErrorHandling(
//     `${BASE_URI}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
//   );

// export const getImageSrc = (path, size) =>
//   `${IMAGE_BASE_URI}/${size ? `w${size}` : 'original'}${path}`;
