import React from "react";
import Link from "next/link";

function NoResults() {
  return (
    <div className="success-wrapper">
      <div className="success">
        <h2>No Products Found!</h2>

        <p className="description">
          If you have any questions, please email
          <a className="email" href="nyongesaderrick@gmail.com">
            nyongesaderrick@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoResults;
