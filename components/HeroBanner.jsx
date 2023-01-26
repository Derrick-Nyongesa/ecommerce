import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

function HeroBanner({ heroBanner }) {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image animated bounceInUp"
        />
        <div className="banner-desc">
          <div className="desc">
            {/* <Link href="/">
              <button type="button">{heroBanner.buttonText}</button>
            </Link> */}
            <br />
            <p style={{ color: "white" }} className="fade-in-text">
              {heroBanner.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
