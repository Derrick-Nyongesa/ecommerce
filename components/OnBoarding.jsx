import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import useAuthStore from "../store/authStore";
import { createOrGetUser } from "../utils/index";

function OnBoarding() {
  const { userProfile, addUser, removeUser } = useAuthStore();
  return (
    <div>
      <main style={{ marginLeft: "0px", marginTop: "80px" }}>
        <div className="relative pt-1 pb-28 flex content-center items-center justify-center">
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
                    Welcome to JSM Headphones online store. We are known mostly
                    for a reputation of providing original headphones at the
                    most affordable prices any other dealer offers in the
                    market, with a promise of durability, quality and
                    authenticity.
                  </p>
                  <hr></hr>
                  <p style={{ marginTop: "10px", color: "white" }}>
                    Sign in to continue
                  </p>
                  <a
                    href="#"
                    className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white p-4 border border-red-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
                  >
                    <GoogleLogin
                      onSuccess={(response) =>
                        createOrGetUser(response, addUser)
                      }
                      onError={() => console.log("Error")}
                    ></GoogleLogin>
                  </a>
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

        <section className="relative py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div
                className="w-full md:w-4/12 ml-auto mr-auto px-4"
                data-aos="fade-right"
              >
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1602489053809-4d912f6c8b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                />
              </div>
              <div
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
                data-aos="fade-left"
              >
                <div className="md:pr-12">
                  <small className="text-red-500">Why Us</small>
                  <p className="mt-4 text-lg leading-relaxed">
                    JSM Headphones was established to participate in the growing
                    demand for e-commerce and with the aim of redefining online
                    shopping.
                  </p>
                  <br></br>
                  <small className="text-red-500">
                    What can we do for you ?
                  </small>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <h4 className="text-xl">Excellence</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <h4 className="text-xl">Interity</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <h4 className="text-xl">Customer Focus</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <h4 className="text-xl">Authenticity</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OnBoarding;
