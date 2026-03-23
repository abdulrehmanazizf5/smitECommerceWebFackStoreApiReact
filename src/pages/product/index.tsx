import Nav from "../../layout/navbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import getProduct from "../../services/get-product-api";
import "./index.css";
import AddToCartButton from "../../components/buttons/add-to-cart";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct({ id: Number(id) });
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Nav />
      <main>
        <div className="product-container">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div className="product-details">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-rating">
              Rating: {product.rating.rate} (
              <span className="product-raters-count">
                {product.rating.count} reviews
              </span>
              )
            </p>
            <p className="product-price">Price: {product.price}$</p>
            <AddToCartButton
              id={product.id}
              sizeOnHover="1.02"
              width="100%"
              height="100%"
              backgroundColor="#ff8800ff"
            />
            <p className="product-description">
              <b>Description: </b>
              {product.description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
