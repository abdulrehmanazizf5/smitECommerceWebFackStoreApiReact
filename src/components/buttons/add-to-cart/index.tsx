import { useCart } from "../../../contexts/cart";

const AddToCartButton = ({
  id,
  width,
  height,
  size,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  color,
  backgroundColor,
  border,
  borderRadius,
  padding,
}: {
  id: number;
  width?: string;
  height?: string;
  size?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
}) => {
  const { addToCart }: any = useCart();

  return (
    <button
      style={{
        width: width || "100%",
        height: height || "100%",
        fontSize: size || "100%",
        padding: padding || "10px",
        backgroundColor: backgroundColor || "green",
        color: color || "white",
        border: border || "none",
        borderRadius: borderRadius || "5px",
        cursor: "pointer",
        margin:
          margin ||
          `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}` ||
          "0",
      }}
      onClick={(e) => {
        addToCart(id);
        e.stopPropagation();
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
