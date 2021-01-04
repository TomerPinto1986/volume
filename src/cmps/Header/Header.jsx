import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
    return (
        <header className="flex space-between">
            <h1>LOGO</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/stations">|Stations</NavLink>
            </nav>
        </header>
    );
};

export default Header;
