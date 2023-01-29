import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import useAuthStore from "../store/authStore";
import { createOrGetUser } from "../utils/index";
import Link from "next/link";

function OnBoarding() {
  const { userProfile, addUser, removeUser } = useAuthStore();
  return (
    <div>
      <main style={{ height: "100vh" }}>
        <div className="  pb-28 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1528304270437-714a2d6fbb6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto" data-aos="fade-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    <span style={{ color: "#f02d34" }}>JSM</span> Headphones
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Sign in to continue
                  </p>
                  <hr></hr>

                  <div
                    href="#"
                    className=" rounded inline-block mt-5 mb-5 cursor-pointer"
                  >
                    <GoogleLogin
                      onSuccess={(response) =>
                        createOrGetUser(response, addUser)
                      }
                      onError={() => console.log("Error")}
                    ></GoogleLogin>
                  </div>
                  <Link href="/">
                    <div className="flex gap-10 flex-wrap items-center justify-center">
                      <div className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white p-4 border border-red-500 hover:border-transparent rounded inline-block mt-5 mb-5 cursor-pointer">
                        HOME
                      </div>
                    </div>
                  </Link>

                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px; transform: translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OnBoarding;
