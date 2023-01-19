import React from "react";
import { client } from "../../lib/client";
import { Product } from "../../components";
import NoResults from "../../components/NoResults";

function SearchTerm({ products }) {
  console.log(products);
  return (
    <div style={{ marginTop: "80px" }}>
      {products?.length && (
        <div className="text-center text-2xl">
          <span
            style={{ color: "#f02d34", marginRight: "5px", fontWeight: "bold" }}
          >
            {products.length || 0}
          </span>
          Products found
        </div>
      )}
      <div className="products-container ">
        {products?.length ? (
          products?.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <div>
            <NoResults />
          </div>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params: { searchTerm } }) => {
  const prod = `*[_type == "product" && name match '${searchTerm}*' || category match '${searchTerm}*']`;
  const products = await client.fetch(prod);

  return {
    props: { products },
  };
};

export default SearchTerm;
