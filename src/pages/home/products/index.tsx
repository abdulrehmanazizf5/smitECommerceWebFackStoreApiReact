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
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {products.map((product: any, index: number) => (
        <ProductCard
          key={index}
          title={product.title}
          rating={product.rating}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default index;
