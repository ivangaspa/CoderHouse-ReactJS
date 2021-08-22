import "../styles/Index.css";

export default function Footer() {
    return (
        <footer>
            <div className="text-center py-3 navColor">
                © 2021 Copyright: Iván Gasparoni
                <a href="http://linkedin.com/in/ivan-gasparoni-3b997856" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in ms-3"></i></a>
                <a href="https://github.com/ivangaspa/CoderHouse-ReactJS.git" target="_blank" rel="noreferrer"><i className="fab fa-github ms-2"></i></a>
            </div>
        </footer>
    )
}