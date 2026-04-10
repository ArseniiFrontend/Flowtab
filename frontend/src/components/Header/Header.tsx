import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/Header/Flowtab_logo.svg";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <header className={`header ${menuOpen ? "header--menuOpen" : ""}`}>
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

                <button
                    className={`header__burger header__reveal header__reveal--2 ${menuOpen ? "header__burger--active" : ""}`}
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span />
                    <span />
                </button>
            </div>

            <div className={`header__mobileMenu ${menuOpen ? "header__mobileMenu--open" : ""}`}>
                <div className="header__mobileTop">
                    <img src={logo} alt="Flowtab" className="header__mobileLogo" />
                </div>

                <div className="header__mobileInner">
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#open-tab" onClick={() => setMenuOpen(false)}>How it work</a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                    <a href="#platforms" onClick={() => setMenuOpen(false)}>Solution</a>
                    <a href="#join" onClick={() => setMenuOpen(false)}>Features</a>
                    <button className="header__mobileLogin">Login</button>
                    <button className="header__mobileRegister">Register</button>
                </div>
            </div>
        </header>
    );
}