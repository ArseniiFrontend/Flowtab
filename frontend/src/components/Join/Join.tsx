import { useEffect, useRef, useState } from "react";
import "./Join.css";

export default function Join() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonReady, setButtonReady] = useState(false);

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
      className={`join ${isVisible ? "join--visible" : ""}`}
      id="join"
    >
      <div className="join__container container">
        <h2 className="join__title">
          <span className="join__line join__line--1">
            Join us on email for
          </span>
          <span className="join__line join__line--2 join__titleAccent">
            more trending topics
          </span>
        </h2>

        <button
          className={`join__button${buttonReady ? " join__button--ready" : ""}`}
          type="button"
          onAnimationEnd={() => setButtonReady(true)}
        >
          Join Now
        </button>
      </div>
    </section>
  );
}