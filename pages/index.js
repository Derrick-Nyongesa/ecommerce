import Product from "../components/Product";
import HeroBanner from "../components/HeroBanner";
import FooterBanner from "../components/FooterBanner";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Product></Product>
      <FooterBanner></FooterBanner>
    </div>
  );
}
