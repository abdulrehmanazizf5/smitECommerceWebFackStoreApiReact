import Nav from "../../layout/navbar";
import HeroSecCrousel from "./hero-sec-crousel/";
import Products from "./products";
import Footer from "../../layout/footer";

const index = () => {
  return (
    <>
      <header>
        <Nav
          style={{ position: "fixed", width: "100%", top: 0, zIndex: 1000 }}
        />
        <HeroSecCrousel />
      </header>
      <Products />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
