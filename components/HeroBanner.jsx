import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

function HeroBanner({ heroBanner }) {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo"></p>
        <h3 className="animated slideInRight">{heroBanner.midText}</h3>
        <h1 className="fade-in-title">{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image animated bounceInUp"
        />
        <div className="banner-desc">
          <div className="desc">
            <div class="sticker-wrapper">
              <aside className="sticker yellow">
                <p>Featured product</p>
                <span className="fold"></span>
              </aside>
            </div>
            {/* <Link href="/">
              <button type="button">{heroBanner.buttonText}</button>
            </Link> */}
            <br />
            <p style={{ color: "white" }} className=" fade-in-text">
              {heroBanner.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
