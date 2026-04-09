import { useMemo, useState } from "react";
import "./Pricing.css";

import pointIcon from "../../assets/icons/Pricing/Point_icon.svg";
import arrow3 from "../../assets/icons/Pricing/Arrow_3.svg";

type BillingMode = "monthly" | "yearly";

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "personal",
    name: "Personal",
    subtitle: "Special first packet for all",
    monthlyPrice: 8,
    yearlyPrice: 7,
    features: [
      "Up to 5 page each group",
      "Up to 10 group page",
      "5 Days group page saved",
    ],
  },
  {
    id: "regular",
    name: "Regular",
    subtitle: "Recommended for personal pro",
    monthlyPrice: 20,
    yearlyPrice: 18,
    features: [
      "Up to 15 page each group",
      "Download page up to 20 page",
      "Up to 10 group page",
      "15 Days group page saved",
    ],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Packet for Startup & Company",
    monthlyPrice: 48,
    yearlyPrice: 43,
    features: [
      "Unlimited group pages",
      "Unlimited download page",
      "Unlimited page each group",
      "Customize sorting group pages",
      "Customize group page name",
      "30 Days group page saved",
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<BillingMode>("monthly");

  const priceSuffix = useMemo(() => {
    return billing === "monthly" ? "/Month" : "/Month";
  }, [billing]);

  return (
    <section className="pricing" id="pricing">
      <div className="pricing__container container">
        <h2 className="pricing__title">Get your best deal</h2>

        <div className="pricing__switchWrap">
          <span
            className={`pricing__switchLabel ${
              billing === "monthly" ? "pricing__switchLabel--active" : ""
            }`}
          >
            Monthly
          </span>

          <button
            className={`pricing__switch ${
              billing === "yearly" ? "pricing__switch--yearly" : ""
            }`}
            type="button"
            aria-label="Toggle billing period"
            onClick={() =>
              setBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"))
            }
          >
            <span className="pricing__switchThumb" />
          </button>

          <span
            className={`pricing__switchLabel ${
              billing === "yearly" ? "pricing__switchLabel--active" : ""
            }`}
          >
            Yearly
          </span>

          <div className="pricing__hint">
            <span className="pricing__hintText">
              Save 10%
              <br />
              per month
            </span>
            <img className="pricing__hintArrow" src={arrow3} alt="" />
          </div>
        </div>

        <div className="pricing__cards">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <article
                key={plan.id}
                className={`pricing__card ${
                  plan.featured ? "pricing__card--featured" : ""
                }`}
              >
                <div className="pricing__cardTop">
                  <h3 className="pricing__cardTitle">{plan.name}</h3>
                  <p className="pricing__cardSubtitle">{plan.subtitle}</p>
                </div>

                <div className="pricing__divider" />

                <div className="pricing__priceRow">
                  <span className="pricing__price">${price}</span>
                  <span className="pricing__priceSuffix">{priceSuffix}</span>
                </div>

                <ul className="pricing__features">
                  {plan.features.map((feature) => (
                    <li key={feature} className="pricing__feature">
                      <img
                        className="pricing__featureIcon"
                        src={pointIcon}
                        alt=""
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`pricing__button ${
                    plan.featured ? "pricing__button--dark" : ""
                  }`}
                  type="button"
                >
                  Start Free Trial
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}