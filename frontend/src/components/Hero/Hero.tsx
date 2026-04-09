import "./Hero.css";
import bg from "../../assets/pictures/Hero/Background.svg";
import arrow from "../../assets/icons/Hero/Arrow.svg";
import fireIcon from "../../assets/icons/Hero/Fire_icon.svg";
import Header from "../Header/Header";
import FloatingTabs from "./FloatingTabs";

export default function Hero() {
    return (
        <section className="hero">
            <Header />
            <img src={bg} alt="" className="hero__bg" />

            <div className="hero__content container">
                <div className="hero__titleBlock">
                    <div className="hero__lineMask hero__lineMask--1">
                        <h1 className="hero__title hero__titleLine">Minimize your tabs.</h1>
                    </div>

                    <div className="hero__lineMask hero__lineMask--2">
                        <h1 className="hero__title hero__titleLine">Find the trends!</h1>
                    </div>
                </div>

                <div className="hero__textMask hero__textMask--1">
                    <p className="hero__text">
                        Don’t let your computer memories consumes all of those browser tabs.
                        Flowtab gathers all of your favorite website into one place.
                    </p>
                </div>

                <div className="hero__ctaMask hero__ctaMask--1">
                    <div className="hero__cta">
                        <button className="hero__button" type="button">
                            Get Started
                            <img src={fireIcon} alt="" className="hero__buttonIcon" />
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
            </div>

            <FloatingTabs />
        </section>
    );
}