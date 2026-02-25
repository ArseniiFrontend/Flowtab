import twitter from "../../assets/icons/Socials/Twitter_icon.png";
import facebook from "../../assets/icons/Socials/Facebook_icon.png";
import pinterest from "../../assets/icons/Socials/Pinterest_icon.png";
import reddit from "../../assets/icons/Socials/Reddit_icon.png";
import vk from "../../assets/icons/Socials/Vk_icon.png";
import linkedin from "../../assets/icons/Socials/LinkedIn_icon.png";
import dribbble from "../../assets/icons/Socials/Dribbble_icon.png";
import medium from "../../assets/icons/Socials/Medium_icon.png";

export type TabItem = {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
};

export const TAB_POOL: TabItem[] = [
    { id: "tw-crypto", icon: twitter, title: "Cryptopunk", subtitle: "Search" },
    { id: "fb-product", icon: facebook, title: "Product Design", subtitle: "Search" },
    { id: "pt-popular", icon: pinterest, title: "Popular Design", subtitle: "Search" },
    { id: "rd-growth", icon: reddit, title: "Startup Growth", subtitle: "Search" },
    { id: "vk-dev", icon: vk, title: "Frontend Tips", subtitle: "Search" },
    { id: "in-saas", icon: linkedin, title: "SaaS Landing", subtitle: "Search" },
    { id: "db-ui", icon: dribbble, title: "UI Inspiration", subtitle: "Search" },
    { id: "md-research", icon: medium, title: "UX Research", subtitle: "Search" }
];