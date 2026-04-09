import "./Footer.css";
import logo from "../../assets/icons/Footer/Flowtab_logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__logo">
          <img src={logo} alt="Flowtab" />
          <span className="footer__brand">Flowtab</span>
        </div>

        <nav className="footer__nav">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
        </nav>

      </div>
    </footer>
  );
}