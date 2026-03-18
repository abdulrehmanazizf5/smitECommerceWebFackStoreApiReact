import React from "react";

const index = () => {
  return (
    <div
      style={{
        margin: "10px",
        position: "relative",
        width: "300px",
        gap: "10px",
        height: "auto",
        border: "1px solid black",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img
        src="https://www.pictureperfectphoto.co.uk/wp-content/uploads/2020/11/creative-product-shoot.jpg"
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
      <h1
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Product Name
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            color: "gray",
          }}
        >
          price: $100
        </p>
        <button
          style={{
            backgroundColor: "red",
            position: "relative",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            alignSelf: "flex-end",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default index;
