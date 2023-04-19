import { Link } from "react-router-dom"


const NavBar = () =>{
    return(
        <nav className="nav">
            <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/list">Task-Manager</Link>
            </li>
        </ul>
        </nav>
    );
}


export default NavBar;