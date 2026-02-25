import "./Header.css";
import logo from "../../assets/icons/Header/Flowtab_logo.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner container">
                <a className="header__brand" href="#">
                    <img className="header__brandIcon" src={logo} alt="Flowtab" />
                    <span className="header__brandText">Flowtab</span>
                </a>

                <nav className="header__nav">
                    <a href="#about">About</a>
                    <a href="#open-tab">How it work</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#platforms">Solution</a>
                    <a href="#about">Features</a>
                </nav>

                <div className="header__actions">
                    <button className="header__login">Login</button>
                    <button className="header__register">Register</button>
                </div>
            </div>
        </header>
    );
}