import AddToCartButton from "../buttons/add-to-cart";
const index = ({ title, rating, price, image, id }: any) => {
  return (
    // ProductCard Component ke andar
    <div
      style={{
        border: "1px solid #ddd",
        overflow: "hidden",
        backgroundColor: "#fff",
        marginBottom: "15px",
      }}
    >
      {/* Image Styling */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%", // Card ki poori width le legi
          height: "auto", // Height image ke apne size ke mutabiq hogi (Pinterest style)
          display: "block",
        }}
      />

      {/* Content Styling */}
      <div style={{ padding: "12px" }}>
        <h3 style={{ fontSize: "14px", margin: "5px 0", fontWeight: "bold" }}>
          {title}
        </h3>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Rating: {rating.rate} ⭐
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth < 600 ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>${price}</span>
          <AddToCartButton
            id={id}
            width="100%"
            height="25px"
            border="none"
            borderRadius="5px"
            padding="0px 5px"
            backgroundColor="#ff8800ff"
            color="white"
            size="15px"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
