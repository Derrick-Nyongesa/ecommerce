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
          <div style={{ marginTop: "80px" }}>
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
              <div className="  " style={{ margin: "auto", width: "30%" }}>
                <form
                  onSubmit={handleSearch}
                  className=" md:static top-10 -left-20 bg-white"
                >
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="  mb-10 bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0 _searchBar"
                    placeholder="Search products and brands"
                  />
                  <button
                    onClick={handleSearch}
                    className=" md:right-5 right-6 top-4  border-gray-300 pl-4 text-2xl text-gray-400"
                  >
                    <BiSearch className="_searchIcon" />
                  </button>
                </form>
              </div>
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
