import '../styles/globals.css'
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = "https://api.themoviedb.org/3"
  return <Component {...pageProps} />
}

export default MyApp
