import Head from "next/head";
import Header from "../src/components/Header";
// import Nav from "../src/components/Nav";
import Results from "../src/components/Results";
import Navbar from '../src/components/Navbar';
import Show from '../src/components/Show';
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Imdb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Navbar />
     // {/* <Nav /> */}
      {/* <Show /> */}
      {/* <Results results={results} /> */}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const genre = context.query.genre;
//   const request = await fetch(
//     `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then((res) => res.json());

//   return {
//     props: {
//       results: request.results,
//     },
//   };
// }
