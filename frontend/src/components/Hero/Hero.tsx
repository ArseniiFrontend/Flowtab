import "./Hero.css";
import bg from "../../assets/pictures/Hero/Background.svg";
import arrow from "../../assets/icons/Hero/Arrow.svg";
import Header from "../Header/Header";
import FloatingTabs from "./FloatingTabs";

export default function Hero() {
    return (
        <section className="hero">
            <Header />
            <img src={bg} alt="" className="hero__bg" />

            <div className="hero__content container">
                <h1 className="hero__title">
                    Minimize your tabs.
                    <br />
                    Find the trends!
                </h1>

                <p className="hero__text">
                    Don’t let your computer memories consumes all of those browser tabs.
                    Flowtab gathers all of your favorite website into one place.
                </p>

                <div className="hero__cta">
                    <button className="hero__button" type="button">
                        Get Started 🔥
                    </button>

                    <div className="hero__hint">
                        <span className="hero__hintText">
                            All research
                            <br />
                            start from here
                        </span>

                        <img className="hero__hintArrow" src={arrow} alt="" />
                    </div>
                </div>
            </div>

            <FloatingTabs />
        </section>
    );
}