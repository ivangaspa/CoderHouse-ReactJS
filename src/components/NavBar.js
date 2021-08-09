import logo from "../img/coffee.png";
import "../styles/Index.css";
import CartWidget from "../components/CartWidget";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navColor sticky-top">
                <div className="container-fluid">
                    <a className="nav-link link-dark" aria-current="page" href="#a"><img className="logo me-3" src={logo} alt="Logo Brewed Beans" />Brewed Beans</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown me-3">
                                <a className="nav-link dropdown-toggle" href="#d" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Variedades
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#e">XXXXXXX</a></li>
                                <li><a className="dropdown-item" href="#f">XXXXXXXXXX</a></li>
                                <li><a className="dropdown-item" href="#g">XXXXXXXXXXXXXX</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3" href="#b">Home Roasters</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3" href="#b">Cafeteras y Molinos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#h">Contacto</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link ms-3" href="#c"><CartWidget /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}