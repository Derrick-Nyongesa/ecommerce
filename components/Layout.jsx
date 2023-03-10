import React from "react";
import Head from "next/head";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>JSM-Headphones</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon_.jpg"
        ></link>
      </Head>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
