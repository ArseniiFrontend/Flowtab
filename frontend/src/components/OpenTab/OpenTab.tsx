import "./OpenTab.css";
import arrow2 from "../../assets/icons/OpenTab/Arrow_2.svg";
import photo1 from "../../assets/pictures/OpenTab/Photo_1.svg";

export default function OpenTab() {
    return (
        <section className="openTab" id="open-tab">
            <div className="openTab__container container">
                <h2 className="openTab__title">Open new tabs is sh*t</h2>

                <div className="openTab__cardWrap">
                    <div className="openTab__hint openTab__hint--left">
                        <img className="openTab__arrow openTab__arrow--left" src={arrow2} alt="" />
                        <span className="openTab__hintText">solution for discover a trend</span>
                    </div>

                    <div className="openTab__card">
                        <img className="openTab__photo" src={photo1} alt="" />
                    </div>

                    <div className="openTab__hint openTab__hint--right">
                        <span className="openTab__hintText">You just need one tab now</span>
                        <img className="openTab__arrow openTab__arrow--right" src={arrow2} alt="" />
                    </div>
                </div>

                <p className="openTab__text">
                    A solution for your browser tabs and don’t make your device get slower over time.
                    Get ease and faster to discover a trend with just one tab.
                </p>
            </div>
        </section>
    );
}