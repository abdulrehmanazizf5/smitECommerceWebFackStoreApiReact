import { useCart } from "../../../contexts/cart";
import getProduct from "../../../services/get-product-api";

const AddToCartButton = ({ id }: { id: number }) => {
  const { addToCart }: any = useCart();

  return (
    <button
      style={{
        padding: "10px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={() => addToCart(id)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
