import Logo from './Navbar/Logo'
import SearchBox from './Navbar/SearchBox'
import NumberResult from './Navbar/NumberResult'

const Navbar = ({movies}) => {
    //   const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
        <Logo/>
        
        <SearchBox/>
        <NumberResult movies={movies} />
      </nav>
  )
}

export default Navbar