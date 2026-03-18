import Navbar from "../../layout/navbar";
import HeroSecCrousel from "./hero-sec-crousel/";
import ProductCard from "../../components/product-card";
import Footer from "../../layout/footer";

const index = () => {
  return (
    <>
      <Navbar
        style={{ position: "fixed", width: "100%", top: 0, zIndex: 1000 }}
      />
      <HeroSecCrousel />
      <ProductCard />
      <Footer />
    </>
  );
};

export default index;
