import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'
import { useDebounce } from 'react-use'

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application.json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
const [searchTerm, setSearchTerm] = useState(''); // Used for search field
const [errorMessage, setErrorMessage] = useState(''); // Error message
const [movieList, setMovieList] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [debouncedSearchTerm, setDeouncedSearchTerm] = useState('');

useDebounce(() => setDeouncedSearchTerm(searchTerm), 500, [searchTerm]);

// Fetching Movies from TMDB API
const fetchMovies = async (query = '') => {
  setIsLoading(true);
  setErrorMessage('');

  try {
    
    const endpoint = query 
    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, API_OPTIONS);

    if(!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    console.log(data);
    
    if (data.Response = false) {
      setErrorMessage(data.Error || 'Failed to fetch movies');
      setMovieList([]);
      return;
    }

    setMovieList(data.results || []);

  } catch (error) {

    console.error(`Error fetching movies ${error}`);
    setErrorMessage('Error loading movies. Please try again later.');

  } finally {
    setIsLoading(false);
  }
}

useEffect(() => {
  fetchMovies(debouncedSearchTerm);
}, [debouncedSearchTerm]);

  // HTML to be rendered
  return (
    <main>
      <div className='wapper' />
      <div>
        <header>
          <img src="public/hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>

        {isLoading ? (
          <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
          <ul>
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        )}
        </section>
      </div>
    </main>
  )
}

export default App

