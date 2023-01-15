import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils/index";
import useAuthStore from "../store/authStore";

export default function Home({ products, bannerData }) {
  const { userProfile, addUser, removeUser } = useAuthStore();
  return (
    <div>
      <div>
        {userProfile ? (
          <div>
            <HeroBanner
              heroBanner={bannerData.length && bannerData[0]}
            ></HeroBanner>
            <div className="products-heading">
              <h2>Best Seller Products</h2>
              <p>speaker There are many variations passages</p>
            </div>
            <div className="products-container">
              {products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>

            <FooterBanner
              footerBanner={bannerData && bannerData[0]}
            ></FooterBanner>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
          ></GoogleLogin>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
