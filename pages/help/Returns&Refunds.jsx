import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

function ReturnsandRefunds() {
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
          Returns & Refunds
        </h1>
        <h2 style={{ fontWeight: "bold" }}>Returns & Refunds Policy</h2>
        <p>
          Goods sold are not refundable, returnable or exchangeable. If the
          return is a result of our error or defective product, please read
          below on our policy for Defective Product and Returns Due to Our
          Error.
        </p>
        <br />
        <h2 style={{ fontWeight: "bold" }}>
          Defective Product and Returns Due to Our Error
        </h2>
        <p>
          {" "}
          Defective items, items damaged at the time of receipt, and incorrect
          items received may be returned. Your shipping charges will be waived.
          When we receive your return, we will inspect the item and replace it,
          or issue you a refund of the order if no longer in stock. If the
          product is not found to be defective, shipping fees will apply and the
          order will be delivered back to you in the state it was returned.
        </p>
        <br />
        <p>
          To initiate a return on a Defective Product and Returns Due to Our
          Error order, you must contact us within 2 days from the date your
          package arrives at your doorstep to create a Return Authorization.
        </p>
      </div>
    </div>
  );
}

export default ReturnsandRefunds;
