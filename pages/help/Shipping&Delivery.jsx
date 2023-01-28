import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

function ShippingandDelivery() {
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
          Shipping & Delivery Information
        </h1>
        <p>
          Upon delivery, It is your responsibility to check for any defects,
          damages or missing items. We will not tolerate any returns for
          defects, damaged products and missing items once delivered and
          accepted by you. In case any order has a defect, damaged or items
          missing, you may return the order immediately to our delivery crew and
          get in touch with our customer support team on (+254) 703906982 or
          email us on nyongesaderrick@gmail.com within 12 hours. This applies to
          orders shipped within Nairobi.
        </p>
        <br />
        <p>
          {" "}
          If any order has a defect, damaged or items missing, you can
          temporarily hold on to the order and get in touch with our customer
          support team on (+254) 703906982 or email us on
          nyongesaderrick@gmail.com within 12 hours. Our support staff will get
          in touch with you with instructions on how to send the order back to
          us.
        </p>
      </div>
    </div>
  );
}

export default ShippingandDelivery;
