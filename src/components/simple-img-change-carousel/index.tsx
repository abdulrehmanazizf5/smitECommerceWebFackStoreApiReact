import { useState } from "react";

const index = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };
  return (
    <div style={{ position: "relative", width: "100%", zIndex: 0 }}>
      {/* Sirf current image dikhao */}
      <img src={images[current]} style={{ width: "100%" }} />

      {/* Peeche jaane ka button */}
      <button
        onClick={prevSlide}
        style={{
          paddingRight: "300px",
          position: "absolute",
          left: 0,
          width: "50%",
          height: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "2em",
          color: "white",
          background: "rgba(0, 0, 0, 0)",
          border: "none",
          outline: "none",
          transition: "all 0.5s ease-in-out",
        }}
      >
        ◀
      </button>

      {/* Aage jaane ka button */}
      <button
        onClick={nextSlide}
        style={{
          paddingLeft: "300px",
          width: "50%",
          height: "100%",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "2em",
          color: "white",
          background: "rgba(0, 0, 0, 0)",
          border: "none",
          outline: "none",
          transition: "all 0.5s ease-in-out",
        }}
      >
        ▶
      </button>
    </div>
  );
};

export default index;
