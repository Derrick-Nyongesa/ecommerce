import React, { useState, useEffect } from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

function HeroBanner(props) {
  const SliderProperty = {
    name: "",
    product: "",
    desc: "",
    ImageSrc: "",
  };

  const [sliderProperty, setSliderProperty] = useState(SliderProperty);

  const { name, product, desc, ImageSrc } = sliderProperty;

  const [countAuto, setCountAuto] = useState(0);

  const [animationCls, setAnimationCls] = useState("displayBlock fade");

  const NextClick = () => {
    setAnimationCls(() => "displayNone fade");
    const myTimeout = setTimeout(() => {
      setAnimationCls("displayBlock fade");
    }, 100);

    if (countAuto <= props.ImageData.length - 1) {
      setCountAuto(countAuto + 1);
    }

    if (countAuto === props.ImageData.length - 1) {
      setCountAuto(0);
    }
  };

  useEffect(() => {
    setSliderProperty((previous) => ({
      ...previous,
      name: props.ImageData[countAuto]?.name,
      product: props.ImageData[countAuto]?.product,
      desc: props.ImageData[countAuto]?.desc,
      ImageSrc: props.ImageData[countAuto]?.ImageSrc,
    }));
  }, [countAuto]);

  useEffect(() => {
    const interval = setInterval(() => {
      NextClick();
    }, props.SlideInterValTime);

    return () => clearInterval(interval);
  }, [countAuto]);
  return (
    <>
      <div className="hero-banner-container ">
        <div className={animationCls}>
          <div className="">
            <div>
              <p className="beats-solo"></p>
              <h3>{product}</h3>
              <h1>{name}</h1>
              <img
                src={ImageSrc}
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
                  <p style={{ color: "white" }}>{desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
