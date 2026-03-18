import Crousel from "../../../components/simple-img-change-carousel";

const index = () => {
  const images = [
    "https://picsum.photos/500/300?groceries",
    "https://picsum.photos/500/300?books",
    "https://picsum.photos/500/300?cars",
    "https://picsum.photos/500/300?furniture",
    "https://picsum.photos/500/300?electronics",
    "https://picsum.photos/500/300?jewellery",
    "https://picsum.photos/500/300?shoes",
    "https://picsum.photos/500/300?bags",
    "https://picsum.photos/500/300?watches",
    "https://picsum.photos/500/300?glasses",
  ];
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Crousel images={images} />
    </div>
  );
};

export default index;
