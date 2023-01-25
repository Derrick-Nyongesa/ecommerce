import React, { useState, useEffect } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
  AiOutlineLeft,
} from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import axios from "axios";
import { BASE_URL } from "../../utils";
import useAuthStore from "../../store/authStore";
import { useRouter } from "next/router";
import Comment from "../../components/Comment";

function ProductDetails({ product, products }) {
  const { image, name, details, price, comments } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [comment, setComment] = useState("");
  const [isPostingComment, setIsPostingComment] = useState(false);
  const [post, setPost] = useState(product);
  const { userProfile } = useAuthStore();
  const router = useRouter();

  const addComment = async (e) => {
    e.preventDefault();
    if (comment && userProfile) {
      setIsPostingComment(true);
      const res = await axios.put(`${BASE_URL}/api/product/${product._id}`, {
        comment,
        userId: userProfile._id,
      });

      setPost({ ...post, comments: res.data.comments });
      setComment("");
      setIsPostingComment(false);
    }
  };

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };
  return (
    <div style={{ marginTop: "80px" }}>
      <button
        type="button"
        className="cart-heading"
        onClick={() => router.back()}
      >
        <AiOutlineLeft />
        <span className="heading">Go Back</span>
      </button>
      <div className="product-detail-container ">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            className="fade-in-text"
          >
            {name}
          </h1>
          <div className="reviews ">
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiFillStar />
            </div>

            <div>
              <AiOutlineStar />
            </div>
            <p>(20 verified ratings)</p>
          </div>

          <p className="price">${price}</p>
          <p style={{ color: "gray", fontSize: "12px" }}>Few Units left</p>
          <div className="">
            <h3>Quantity:</h3>
            <div className="quantity flex justify-between items-center">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "1.6rem", textAlign: "center" }}>Product Details</p>
      <p style={{ color: "#324d67", marginLeft: "20px", marginRight: "20px" }}>
        {details}
      </p>
      <div style={{ marginTop: "40px" }}>
        <Comment
          comment={comment}
          setComment={setComment}
          addComment={addComment}
          comments={post.comments}
          isPostingComment={isPostingComment}
        />
      </div>

      {/* <div style={{ marginTop: "50px" }}>
        {post.comments?.length ? (
          comments?.map((item) => (
            <>
              <div className=" p-2 items-center">
                <div>
                  <p className="-mt-5 ml-16 text-[16px] mr-8">{item.comment}</p>
                </div>
              </div>
            </>
          ))
        ) : (
          <div>no comments</div>
        )}
      </div>
      <form onSubmit={addComment} className="flex gap-4">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg _searchBar"
          placeholder="Add comment.."
        />
        <button className="text-md text-gray-400" onClick={addComment}>
          {isPostingComment ? "Commenting..." : "Comment"}
        </button>
      </form> */}

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  //   console.log(product);

  return {
    props: { products, product },
    revalidate: 2,
  };
};

export default ProductDetails;
