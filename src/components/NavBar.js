import logo from "../img/coffee.png";
import "../styles/Index.css";
import CartWidget from "../components/CartWidget";

export default function NavBar () {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <img className="logo" src={logo} alt="Logo Brewed Beans" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active me-3" aria-current="page" href="#a">Brewed Beans</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="#b">Home Roasters</a>
                    </li>
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
                        <a className="nav-link" href="#h">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-3" href="#c"><CartWidget /></a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}