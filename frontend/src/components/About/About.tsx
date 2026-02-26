import "./About.css";

export default function About() {
    return (
        <section className="about">
            <div className="about__container container">
                <h2 className="about__title">
                    Findtrend helps you to increase your <br />
                    productivity and reduce your computer's <br />
                    memory load,{` `}
                    <span className="about__title--muted">
                        an application that can fulfill your daily browsing needs.
                    </span>
                </h2>
            </div>
        </section>
    );
}