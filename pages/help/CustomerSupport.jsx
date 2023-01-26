import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

function CustomerSupport() {
  const router = useRouter();
  return (
    <div
      style={{
        marginTop: "80px",
      }}
    >
      <button
        type="button"
        className="cart-heading"
        onClick={() => router.back()}
      >
        <AiOutlineLeft />
        <span className="heading">Go Back</span>
      </button>
      <div style={{ width: "50%", margin: "auto", marginBottom: "40px" }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
          Customer Support
        </h1>
        <p style={{ fontStyle: "italic" }}>
          At this time, we only offer support in English.
        </p>
        <br />
        <div>
          <h2 style={{ fontWeight: "bold" }}>Email Support</h2>
          <p>
            You can send an email anytime with your questions and/or comments to
            our Customer Care Team.
          </p>
          <p style={{ color: "#f02d34" }}>nyongesaderrick@gmail.com</p>
        </div>
        <br />
        <div>
          <h2 style={{ fontWeight: "bold" }}>Phone Support</h2>
          <p style={{ color: "#f02d34" }}>+254 703906982</p>
          <p style={{ fontStyle: "italic" }}>
            *Local, national, and international telephone rates may apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerSupport;
