import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";
import { GoogleLogin } from "@react-oauth/google";
import { createOrGetUser } from "../utils/index";
import useAuthStore from "../store/authStore";
import Discover from "../components/Discover";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import OnBoarding from "../components/OnBoarding";

export default function Home({ products, bannerData }) {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const [searchValue, setSearchValue] = useState("");
  const [postNum, setPostNum] = useState(4);
  const router = useRouter();

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 4); // 3 is the number of posts you want to load per click
  }

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };
  return (
    <div>
      <div>
        {userProfile ? (
          <div style={{ marginTop: "110px" }}>
            <div>
              <HeroBanner
                heroBanner={bannerData.length && bannerData[0]}
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
              <div className="h-[2vh] overflow-hidden xl:hover:overflow-auto"></div>
              <div className=" overflow-auto h-[88vh] w-[95vw] ">
                <div className="products-container ">
                  {products.slice(0, postNum).map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
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
