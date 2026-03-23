import { useCart } from "../../../contexts/cart";
import { FaCartPlus } from "react-icons/fa6";

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
  sizeOnHover,
  fontWeight,
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
  sizeOnHover?: string;
  fontWeight?: string;
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
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        fontWeight: fontWeight || "normal",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.scale = sizeOnHover || "1.1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.scale = "1";
      }}
      onClick={(e) => {
        addToCart(id);
        e.stopPropagation();
      }}
    >
      Add To <FaCartPlus size={size} />
    </button>
  );
};

export default AddToCartButton;
