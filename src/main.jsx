import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StarRating from './StarRattingComponent/StarRating.jsx'
import MovieRating from './StarRattingComponent/MovieRating.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StarRating  length={5} message={["terrible","bad","okay","good","amazing"]} />
    <StarRating  size={30} color='green' className='test' />
    <MovieRating  /> */}
  </StrictMode>,
)
