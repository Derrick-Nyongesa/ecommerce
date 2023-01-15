import React from "react";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils/index";
import useAuthStore from "../store/authStore";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";

function Navbar() {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container  flex justify-between items-center  border-gray-200 py-2 mb-5">
      <p className=" ">
        <Link href="/">
          <img src="assets/logo.png" alt="" layout="responsive" />
        </Link>
      </p>
      <div>
        {userProfile && (
          <div className="flex gap-5 md:gap-10">
            <div>
              <img
                src={userProfile.image}
                alt=""
                className="_userImage rounded-full"
              />
            </div>
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
