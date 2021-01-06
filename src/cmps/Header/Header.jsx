import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
    return (
        <header className="app-header flex space-between align-center">
            <div className="brand flex align-center">
                <img src="imgs/app-logo.png" alt="" className="app-logo" />
                <span>Volume</span>
            </div>
            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/station">Stations</NavLink>
            </nav>
        </header>
    );
};

export default Header;
