import Head from "next/head";
import Header from "../components/Header";
//import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import Navbar from '../components/Navbar';
import React from "react";
import Show from "../components/Show"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Imdb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <Results results={results} /> */}
      {/* <Show /> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
