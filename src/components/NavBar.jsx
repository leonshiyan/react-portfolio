import { Link } from "react-router-dom"

const NavBar = (props) => {
  return (
    <nav>
        <Link 
            to='/'
        >
            Yan Shi
        </Link>

        <ul>
            <li>
                <Link
                    to='/about'
                >
                    About
                </Link>
            </li>

            <li>
                <Link
                    to='/contact'
                >
                    Contact
                </Link>
            </li>
            <li>
                <Link
                    to='/Resume'
                >
                    Resume
                </Link>
            </li>
            <li>
                <Link
                    to='/Projects'
                >
                    Projects
                </Link>
            </li>
        </ul>
    </nav>
)
}
export default NavBar