import "./Startups.css";

import microsoftLogo from "../../assets/pictures/Startups/Microsoft_Logo.png";
import allianzLogo from "../../assets/pictures/Startups/Allianz_Logo.png";
import upworkLogo from "../../assets/pictures/Startups/UpWork_Logo.png";
import volvoLogo from "../../assets/pictures/Startups/Volvo_Logo.png";

import grabLogo from "../../assets/pictures/Startups/Grab_Logo.png";
import verizonLogo from "../../assets/pictures/Startups/Verizon_Logo.png";
import coinbaseLogo from "../../assets/pictures/Startups/Coinbase_Logo.png";
import expediaLogo from "../../assets/pictures/Startups/Expedia_Logo.png";

import airtableLogo from "../../assets/pictures/Startups/Airtable_Logo.png";
import magentoLogo from "../../assets/pictures/Startups/Magento_Logo.png";
import carreraLogo from "../../assets/pictures/Startups/Carrera_Logo.png";
import bonanzaLogo from "../../assets/pictures/Startups/Bonanza_Logo.png";

import weTransferLogo from "../../assets/pictures/Startups/WeTransfer_Logo.png";
import suzukiLogo from "../../assets/pictures/Startups/Suzuki_Logo.png";
import algoliaLogo from "../../assets/pictures/Startups/Algolia_Logo.png";
import heinekenLogo from "../../assets/pictures/Startups/Heineken_Logo.png";

const brands = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Allianz", logo: allianzLogo },
  { name: "UpWork", logo: upworkLogo },
  { name: "Volvo", logo: volvoLogo },

  { name: "Grab", logo: grabLogo },
  { name: "Verizon", logo: verizonLogo },
  { name: "Coinbase", logo: coinbaseLogo },
  { name: "Expedia", logo: expediaLogo },

  { name: "Airtable", logo: airtableLogo },
  { name: "Magento", logo: magentoLogo },
  { name: "Carrera", logo: carreraLogo },
  { name: "Bonanza", logo: bonanzaLogo },

  { name: "WeTransfer", logo: weTransferLogo },
  { name: "Suzuki", logo: suzukiLogo },
  { name: "Algolia", logo: algoliaLogo },
  { name: "Heineken", logo: heinekenLogo },
];

export default function Startups() {
  return (
    <section className="startups" id="startups">
      <div className="startups__container container">
        <h2 className="startups__title">Findtrend make +1000 Startup grow</h2>

        <div className="startups__grid">
          {brands.map((brand) => (
            <div className="startups__card" key={brand.name}>
              <img
                className="startups__logo"
                src={brand.logo}
                alt={brand.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}