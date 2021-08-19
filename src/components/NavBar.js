import logo from "../img/coffee.png";
import "../styles/Index.css";
import CartWidget from "../components/CartWidget";

import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navColor sticky-top">
                <div className="container-fluid">
                    <Link to={`/`} className="nav-link link-dark"><img className="logo me-3" src={logo} alt="Logo Brewed Beans" />Brewed Beans</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown me-3">
                                <Link className="nav-link me-3" to={`/coffee`}>Café</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" to={`/home-roasters`}>Home Roasters</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" to={`/coffee-machines&grinders`}>Cafeteras y Molinos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/contact`}>Contacto</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link ms-3" to={`/cart`}><CartWidget /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}