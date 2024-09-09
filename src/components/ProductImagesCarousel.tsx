import React, { useState } from "react";
import { Carousel, Image, Row, Col } from "antd";

const ProductImagesCarousel = ({ images }: { images: string[] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <Row gutter={16}>
      {/* Thumbnail list on the left */}
      <Col span={4}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {images.map((img: any, index) => (
            <Image
              key={index}
              src={img.attributes.url}
              width={80}
              height={80}
              style={{
                cursor: "pointer",
                border: selectedImageIndex === index ? "2px solid #1890ff" : "",
                borderRadius: "4px",
              }}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </Col>

      {/* Main image carousel */}
      <Col span={20}>
        <Carousel dotPosition="right" afterChange={setSelectedImageIndex}>
          {images.map((img: any, index) => (
            <div key={index}>
              <Image
                src={img.attributes.url}
                alt={`Product Image ${index}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default ProductImagesCarousel;
