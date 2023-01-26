import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Product } from "../../components";
import { BASE_URL } from "../../utils";
import { useRouter } from "next/router";
import { AiOutlineLeft } from "react-icons/ai";
import NoResults from "../../components/NoResults";

function Profile({ data }) {
  const { user, userLikedProducts } = data;
  const router = useRouter();

  return (
    <div style={{ marginTop: "60px" }}>
      <button
        type="button"
        className="cart-heading"
        onClick={() => router.back()}
      >
        <AiOutlineLeft />
        <span className="heading">Go Back</span>
      </button>
      <div className="w-full">
        <div className="flex gap-6 md:gap-10 mb-4 bg-white w-full items-center justify-center">
          <div className="w-16 h-16 md:w-32 md:h-32">
            <Image
              width={120}
              height={120}
              layout="responsive"
              className="rounded-full"
              src={user.image}
              alt="user-profile"
            />
          </div>

          <div>
            <p className="text-sm font-medium capitalize _name ">
              {" "}
              {user.userName}
            </p>
          </div>
        </div>
        <div className=" mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
          <p
            className="text-xl font-semibold cursor-pointer border-b-2  mt-2 "
            style={{
              textAlign: "center",
              borderBottom: "#f02d34 solid 2px",
              color: "#f02d34",
            }}
          >
            Saved Products
          </p>
        </div>
        <div className="products-container " style={{ marginBottom: "60px" }}>
          {userLikedProducts?.length ? (
            userLikedProducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <div>
              <NoResults />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params: { userId } }) => {
  const res = await axios.get(`${BASE_URL}/api/profile/${userId}`);

  return {
    props: { data: res.data },
  };
};

export default Profile;
