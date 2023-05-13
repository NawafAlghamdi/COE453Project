import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Productive Families Platform</h1>
            <div className="links">
                <Link to="/">Sell</Link>
                <Link to="/buy">Buy</Link>
            </div>
        </nav>
    );
}

export default Navbar;