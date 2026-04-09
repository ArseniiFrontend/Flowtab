import "./Header.css";
import logo from "../../assets/icons/Header/Flowtab_logo.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner container">
                <a className="header__brand header__reveal header__reveal--1" href="#">
                    <img className="header__brandIcon" src={logo} alt="Flowtab" />
                    <span className="header__brandText">Flowtab</span>
                </a>

                <nav className="header__nav">
                    <a className="header__reveal header__reveal--2" href="#about">About</a>
                    <a className="header__reveal header__reveal--3" href="#open-tab">How it works</a>
                    <a className="header__reveal header__reveal--4" href="#platforms">Solution</a>
                    <a className="header__reveal header__reveal--5" href="#pricing">Pricing</a>
                    <a className="header__reveal header__reveal--6" href="#join">Join us</a>
                </nav>

                <div className="header__actions">
                    <button className="header__login header__reveal header__reveal--7">Login</button>
                    <button className="header__register header__reveal header__reveal--8">Register</button>
                </div>
            </div>
        </header>
    );
}