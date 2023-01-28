import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

function WarrantyPolicy() {
  const router = useRouter();
  return (
    <div style={{ marginTop: "80px" }} className="fade-in-text">
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
          Warranty Policy
        </h1>
        <p>
          Warranty becomes null and void from power surges, electrical or power
          related issues, user mishandling and damage. The warranty policy is
          linked to the packaging of the product box. Any claims made MUST be
          accompanied by the original packaging including all its contents and
          original receipt.
        </p>
        <br />
        <p>
          {" "}
          We strongly advice to safely store the packaging and original receipt
          until the warranty period expires.
        </p>
      </div>
    </div>
  );
}

export default WarrantyPolicy;
