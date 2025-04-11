import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import ThemeToggle from "./ToogleDM";
import Modal from '../components/Modal';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <Link className="navbar-brand" to="/">DianaG9</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main-navbar"
                    aria-controls="main-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                    <Modal/>
                    <ThemeToggle />
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;