import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils/index";
import useAuthStore from "../store/authStore";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../public/assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue) {
      setIsSearching(true);
      router.push(`/search/${searchValue}`);
    }
  };
  return (
    <div className="flex justify-between items-center  border-gray-200 py-2  _navbar">
      <div className="_menu">
        <HiOutlineMenu className="_menuBtn" />
        <div class="dropdown-content">
          <a href="#">Help Center</a>
          <a href="#">Shipping & Delivery Information</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">Warranty Policy</a>
          <a href="#">Order Tracking</a>
          <a href="#">Wishlist</a>
          <a href="#">Customer Support</a>
        </div>
      </div>

      <Link href="/">
        {/* <img src="assets/logo.png" alt="Logo" layout="responsive" /> */}
        <Image
          className="cursor-pointer"
          src={Logo}
          alt="logo"
          width={321}
          height={46}
        ></Image>
      </Link>

      <div>
        {userProfile && (
          <div className="flex gap-5 md:gap-10 ">
            <div className=" ">
              <form className="flex gap-4" onSubmit={handleSearch}>
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="bg-primary px-6 py-2 mt-2 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg _searchBar"
                  placeholder="Search products and brands.."
                />
                <button
                  onClick={handleSearch}
                  className="text-md text-gray-400 mt-2"
                >
                  {isSearching ? "Searching..." : "Search"}
                </button>
              </form>
            </div>
            <div className="dropdown">
              <input type="checkbox" id="dropdown" />

              <label className="dropdown__face mt-2" for="dropdown">
                <div className="dropdown__text">Account</div>

                <div className="dropdown__arrow"></div>
              </label>

              <ul className="dropdown__items">
                <li
                  className="flex items-center gap-2"
                  style={{
                    marginBottom: "5px",
                    color: "#f02d34",
                    fontWeight: "bold",
                  }}
                >
                  <FaUserAlt />
                  <span>{userProfile.userName}</span>
                </li>
                <li>
                  <button className="text-white px-2 md:px-4 text-md font-semibold flex items-center gap-2 _button">
                    Saved Items
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      googleLogout();
                      removeUser();
                    }}
                    className=" text-white px-2 md:px-4 text-md font-semibold flex items-center gap-2 _button"
                  >
                    <AiOutlineLogout className="_logout_" />
                    <span className="hidden md:block ">Sign Out </span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="svg">
              <svg>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </svg>
            </div>
          </div>
        )}
      </div>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <HiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
}

export default Navbar;
