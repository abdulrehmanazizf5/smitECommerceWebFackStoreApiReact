import Nav from "../../layout/navbar";
import Footer from "../../layout/footer";
import Products from "../../layout/sections/products";

const index = () => {
  return (
    <>
      <Nav />
      <main>
        <Products />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
