import React from "react";
import { client } from "../../lib/client";
import { Navbar, Product } from "../../components";
import NoResults from "../../components/NoResults";
import { useRouter } from "next/router";
import { AiOutlineLeft } from "react-icons/ai";

function SearchTerm({ products }) {
  const router = useRouter();
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ marginTop: "60px" }}>
        <div>
          <div>
            <button
              type="button"
              className="cart-heading"
              onClick={() => router.back()}
            >
              <AiOutlineLeft />
              <span className="heading">Go Back</span>
            </button>
            {products?.length && (
              <div className="text-center text-2xl">
                <span
                  style={{
                    color: "#f02d34",
                    marginRight: "5px",
                    fontWeight: "bold",
                  }}
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
        </div>
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
