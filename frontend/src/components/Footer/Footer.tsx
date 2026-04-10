import { useEffect, useRef, useState } from "react";
import "./Footer.css";
import logo from "../../assets/icons/Footer/Flowtab_logo.svg";

export default function Footer() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className={`footer ${isVisible ? "footer--visible" : ""}`}
    >
      <div className="footer__container">
        <a className="footer__logo footer__reveal footer__reveal--1" href="#">
          <img src={logo} alt="Flowtab" />
          <span className="footer__brand">Flowtab</span>
        </a>

        <nav className="footer__nav">
          <a className="footer__reveal footer__reveal--2" href="#">
            Privacy Policy
          </a>
          <a className="footer__reveal footer__reveal--3" href="#">
            Terms and Conditions
          </a>
          <a className="footer__reveal footer__reveal--4" href="#">
            Contact Us
          </a>
          <a className="footer__reveal footer__reveal--5" href="#">
            Careers
          </a>
        </nav>
      </div>
    </footer>
  );
}