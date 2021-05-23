import '../styles/globals.css'
import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
