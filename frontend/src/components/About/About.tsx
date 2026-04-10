import { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            {
                root: null,
                rootMargin: "-30% 0px -30% 0px",
                threshold: 0,
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`about ${isVisible ? "about--visible" : ""}`}
            id="about"
        >
            <div className="about__container container">
                <h2 className="about__title">
                    <span className="about__line about__line--1">
                        Findtrend helps you to increase
                    </span>
                    <span className="about__line about__line--2">
                        your productivity and reduce
                    </span>
                    <span className="about__line about__line--3">
                        your computer&apos;s memory load,
                    </span>
                    <span className="about__line about__line--4 about__line--muted">
                        an application that can fulfill
                    </span>
                    <span className="about__line about__line--5 about__line--muted">
                        your daily browsing needs.
                    </span>
                </h2>
            </div>
        </section>
    );
}