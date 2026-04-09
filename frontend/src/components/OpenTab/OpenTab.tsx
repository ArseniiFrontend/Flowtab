import { useEffect, useRef, useState } from "react";
import "./OpenTab.css";
import arrow2 from "../../assets/icons/OpenTab/Arrow_2.svg";
import photo1 from "../../assets/pictures/OpenTab/Photo_1.svg";

export default function OpenTab() {
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
            className={`openTab ${isVisible ? "openTab--visible" : ""}`}
            id="open-tab"
        >
            <div className="openTab__container container">
                <div className="openTab__titleMask">
                    <h2 className="openTab__title">Open new tabs is sh*t</h2>
                </div>

                <div className="openTab__cardWrap">
                    <div className="openTab__hint openTab__hint--left openTab__hintReveal openTab__hintReveal--left">
                        <img className="openTab__arrow openTab__arrow--left" src={arrow2} alt="" />
                        <span className="openTab__hintText">solution for discover a trend</span>
                    </div>

                    <div className="openTab__card openTab__cardReveal">
                        <img className="openTab__photo" src={photo1} alt="" />
                    </div>

                    <div className="openTab__hint openTab__hint--right openTab__hintReveal openTab__hintReveal--right">
                        <span className="openTab__hintText">You just need one tab now</span>
                        <img className="openTab__arrow openTab__arrow--right" src={arrow2} alt="" />
                    </div>
                </div>

                <div className="openTab__textMask">
                    <p className="openTab__text">
                        A solution for your browser tabs and don’t make your device get slower over time.
                        Get ease and faster to discover a trend with just one tab.
                    </p>
                </div>
            </div>
        </section>
    );
}