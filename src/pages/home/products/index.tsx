import ProductCard from "../../../components/product-card";
import getProducts from "../../../services/product-api";
import { useEffect, useState } from "react";

const index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <div
      style={{
        position: "relative",
        columnCount: window.innerWidth < 600 ? 3 : "auto",
        columnWidth: window.innerWidth < 600 ? "100px" : "150px",
        columnGap: "10px",
        padding: "10px",
        maxWidth: window.innerWidth < 900 ? "100%" : "1200px",
        margin: "0 auto",
      }}
    >
      {products.map((product: any, idx: number) => (
        <div key={idx} style={{ breakInside: "avoid", marginBottom: "10px" }}>
          <ProductCard
            title={product.title}
            rating={product.rating}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
};

export default index;
