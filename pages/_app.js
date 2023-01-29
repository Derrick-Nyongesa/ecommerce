import "../styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Router from "next/router";
import React from "react";
import OnBoarding from "../components/OnBoarding";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <StateContext>
      <GoogleOAuthProvider
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
      >
        {loading ? (
          <div class="_container">
            <div class="loader">
              <div class="loader--dot"></div>
              <div class="loader--dot"></div>
              <div class="loader--dot"></div>
              <div class="loader--dot"></div>
              <div class="loader--dot"></div>
              <div class="loader--dot"></div>
              <div class="loader--text"></div>
            </div>
          </div>
        ) : (
          <Layout>
            <Toaster></Toaster>
            <Component {...pageProps} />
          </Layout>
        )}
      </GoogleOAuthProvider>
    </StateContext>
  );
}
