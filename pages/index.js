import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";
import useAuthStore from "../store/authStore";
import Discover from "../components/Discover";
import { useRouter } from "next/router";
import { useState } from "react";
import OnBoarding from "../components/OnBoarding";
import { ImageData } from "../json/JsonData";
import React from "react";

export default function Home({ products, bannerData }) {
  const { userProfile } = useAuthStore();
  const [postNum, setPostNum] = useState(4);

  const [objectsToShow, setToShow] = React.useState(products);

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  };

  const handleChange = (value) => {
    if (value == "none") {
      setToShow([...products]);
    } else {
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
      }
      let current = [...products];
      current.sort((a, b) =>
        toType
          ? compare(a.name, b.name, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      setToShow([...current]);
    }
  };

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 4); // 3 is the number of posts you want to load per click
  }

  return (
    <div>
      <div>
        {userProfile ? (
          <div style={{ marginTop: "60px" }}>
            <div>
              <HeroBanner
                ImageData={ImageData}
                SlideInterValTime={3000}
              ></HeroBanner>
            </div>

            <div className="products-heading">
              <h2>Best Seller Products</h2>
              <p>
                Online Shopping with JSM Heaphones - Africa's No 1 Online Store
              </p>
            </div>
            <div>
              <div>
                <Discover></Discover>
              </div>
              <div
                className="flex"
                style={{ width: "25%", margin: "auto", marginTop: "30px" }}
              >
                <p className="mr-5 mt-3">Filter Products</p>
                <select
                  onChange={(e) => handleChange(e.target.value)}
                  className="box"
                >
                  <option value="none">Default</option>
                  <option value="ascending">Alphabetically: A-Z</option>
                  <option value="descending">Alphabetically: Z-A</option>
                  <option value="high">Price: Low to high</option>
                  <option value="low">Price: High to low</option>
                </select>
              </div>

              <div className="h-[2vh] overflow-hidden xl:hover:overflow-auto"></div>
              <div className=" overflow-auto h-[88vh] w-[95vw] ">
                <div className="products-container ">
                  {objectsToShow.slice(0, postNum).map((product) => (
                    <p key={product.name}>
                      <Product key={product._id} product={product} />
                    </p>
                  ))}
                  {/* {products.slice(0, postNum).map((product) => (
                    <Product key={product._id} product={product} />
                  ))} */}
                </div>
                <div className="flex gap-10 flex-wrap items-center justify-center">
                  <button onClick={handleClick} className="_load">
                    Load More...
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <OnBoarding></OnBoarding>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query: { category } }) => {
  const prod = `*[_type == "product"]`;
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const cate = `*[_type == "product"  && category match '${category}*']`;

  let products = null;
  if (category) {
    products = await client.fetch(cate);
  } else {
    products = await client.fetch(prod);
  }

  return {
    props: { bannerData, products },
  };
};
