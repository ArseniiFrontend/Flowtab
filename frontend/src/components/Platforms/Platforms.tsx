import "./Platforms.css";

import facebookIcon from "../../assets/icons/Socials/Facebook_icon.png";
import twitterIcon from "../../assets/icons/Socials/Twitter_icon.png";
import dribbbleIcon from "../../assets/icons/Socials/Dribbble_icon.png";
import pinterestIcon from "../../assets/icons/Socials/Pinterest_icon.png";
import mediumIcon from "../../assets/icons/Socials/Medium_icon.png";
import redditIcon from "../../assets/icons/Socials/Reddit_icon.png";
import vkIcon from "../../assets/icons/Socials/Vk_icon.png";
import linkedinIcon from "../../assets/icons/Socials/LinkedIn_icon.png";

import tweet1 from "../../assets/pictures/Platforms/Tweet_1.png";
import tweet2 from "../../assets/pictures/Platforms/Tweet_2.png";
import tweet3 from "../../assets/pictures/Platforms/Tweet_3.png";

const socials = [
    { id: "facebook", icon: facebookIcon, alt: "Facebook" },
    { id: "twitter", icon: twitterIcon, alt: "Twitter", active: true },
    { id: "dribbble", icon: dribbbleIcon, alt: "Dribbble" },
    { id: "pinterest", icon: pinterestIcon, alt: "Pinterest" },
    { id: "medium", icon: mediumIcon, alt: "Medium" },
    { id: "reddit", icon: redditIcon, alt: "Reddit" },
    { id: "vk", icon: vkIcon, alt: "VK" },
    { id: "linkedin", icon: linkedinIcon, alt: "LinkedIn" },
];

export default function Platforms() {
    return (
        <section className="platforms" id="platforms">
            <div className="platforms__container container">
                <h2 className="platforms__title">All platform connect to Findtrend</h2>

                <div className="platforms__socials">
                    {socials.map((social) => (
                    <button key={social.id} className={`platforms__socialButton${social.active
                        ? " platforms__socialButton--active" : "" }`} type="button" aria-label={social.alt}>
                        <img src={social.icon} alt="" className="platforms__socialIcon" />
                    </button>
                    ))}
                </div>

                <div className="platforms__tweets">
                    <img className="platforms__tweet platforms__tweet--small" src={tweet1} alt="Tweet 1" />
                    <img className="platforms__tweet platforms__tweet--large" src={tweet2} alt="Tweet 2" />
                    <img className="platforms__tweet platforms__tweet--small" src={tweet3} alt="Tweet 3" />
                </div>

                <button className="platforms__button" type="button">
                    View More Trend
                </button>
            </div>
        </section>
    );
}