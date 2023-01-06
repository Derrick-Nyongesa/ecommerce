import Product from "../components/Product";
import HeroBanner from "../components/HeroBanner";
import FooterBanner from "../components/FooterBanner";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>
      <Product></Product>
      <FooterBanner></FooterBanner>
    </div>
  );
}
