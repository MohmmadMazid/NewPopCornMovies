import Logo from './Navbar/Logo'
import SearchBox from './Navbar/SearchBox'
import NumberResult from './Navbar/NumberResult'

const Navbar = ({children}) => {
    //   const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
        {children}
      </nav>
  )
}

export default Navbar