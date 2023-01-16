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
    <div className="  flex justify-between items-center  border-gray-200 py-2  _navbar">
      <p className=" ">
        <Link href="/">
          <img src="assets/logo.png" alt="" layout="responsive" />
        </Link>
      </p>
      <div>
        {userProfile && (
          <div className="flex gap-5 md:gap-10">
            <div className="relative hidden md:block">
              <div className="relative  lg:max-w-sm">
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-red-500">
                  <option>Help Center</option>
                  <option>Shipping & Delivery Information</option>
                  <option>Returns & Refunds</option>
                  <option>Warranty Policy</option>
                  <option>Order Tracking</option>
                  <option>Wishlist</option>
                  <option>Customer Support</option>
                </select>
              </div>
            </div>

            <div>
              <img
                src={userProfile.image}
                alt={userProfile.userName}
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
