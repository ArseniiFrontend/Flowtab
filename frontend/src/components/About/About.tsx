import "./About.css";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about__container container">
                <h2 className="about__title">
                    Findtrend helps you to increase <br /> 
                    your productivity and reduce <br />
                    your computer's memory load,<br />{` `}
                    <span className="about__title--muted">
                        an application that can fulfill <br />your daily browsing needs.
                    </span>
                </h2>
            </div>
        </section>
    );
}