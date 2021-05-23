import Navbar from "components/Navbar";
import React from "react";
import Head from "next/head";
import Results from "components/Results";
import 
export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        ImDb
      </Head>
      <Navbar />
      <Results />

    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: requests.results,
    },
  }


}