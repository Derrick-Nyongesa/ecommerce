import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

function Product({ product: { image, name, slug, price } }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{truncate(name, 32)}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
