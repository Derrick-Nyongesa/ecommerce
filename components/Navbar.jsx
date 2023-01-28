import React, { useState, useEffect } from "react";
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
import { FaUserAlt, FaSave } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
    <div className="w-full flex justify-between items-center  border-gray-200 py-2  _navbar">
      <div className="_menu">
        <HiOutlineMenu className="_menuBtn" />
        <div className="dropdown-content">
          <a>
            {" "}
            <Link href="/help/CustomerSupport">Customer Support</Link>{" "}
          </a>
          <a>
            {" "}
            <Link href="/help/Shipping&Delivery">
              Shipping & Delivery Information
            </Link>{" "}
          </a>
          <a>
            {" "}
            <Link href="/help/Returns&Refunds">Returns & Refunds</Link>{" "}
          </a>
          <a href="#">Warranty Policy</a>
          <a href="#">Order Tracking</a>
          <a href="#">Wishlist</a>
          <a href="#">Customer Support</a>
        </div>
      </div>

      <Link href="/">
        {/* <img src="assets/logo.png" alt="Logo" layout="responsive" /> */}
        <div className="w-[221px] md:w-[321px] md:h-[46px] h-[46px]  __logo">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="logo"
            width={321}
            height={46}
          ></Image>
        </div>
      </Link>

      <div>
        {userProfile && (
          <div className="flex gap-5 md:gap-10 ">
            <div className="relative hidden md:block ">
              <form className="flex gap-4 __search" onSubmit={handleSearch}>
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
            <div className="_dropdown">
              <input
                className="dark-light"
                type="checkbox"
                id="dark-light"
                name="dark-light"
              />

              <div className="sec-center mt-2">
                <input
                  className="dropdown"
                  type="checkbox"
                  id="dropdown"
                  name="dropdown"
                />
                <label className="for-dropdown" for="dropdown">
                  Account{" "}
                  <i className="uil uil-arrow-down">
                    <MdOutlineKeyboardArrowDown />
                  </i>
                </label>
                <div className="section-dropdown">
                  <a href="#">
                    {" "}
                    <FaUserAlt />
                    {userProfile.userName}{" "}
                    <i className="uil uil-arrow-right"></i>
                  </a>

                  <a>
                    <Link href={`/profile/${userProfile._id}`}>
                      <div className="flex">
                        <span className="mt-3">
                          <FaSave />
                        </span>

                        <span className="ml-7 mb-3">
                          Saved Items <i className="uil uil-arrow-right"></i>
                        </span>
                      </div>
                    </Link>
                  </a>
                  <a
                    href="#"
                    onClick={() => {
                      googleLogout();
                      removeUser();
                    }}
                  >
                    {" "}
                    <AiOutlineLogout />
                    Sign Out <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>
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
