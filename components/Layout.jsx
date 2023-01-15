import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
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
          href="/android-chrome-256x256.png"
        ></link>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
