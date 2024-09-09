"use client";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/heloer";
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Card,
  Grid,
  message,
  InputNumber,
} from "antd";
import Markdown from "react-markdown";
import ProductImagesCarousel from "@/components/ProductImagesCarousel";
import { BiChevronUp, BiHeartCircle } from "react-icons/bi";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [showError, setShowError] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(1);
  const screens = useBreakpoint();

  useEffect(() => {
    const getProduct = async () => {
      const productData = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${params.slug}`
      );
      setProduct(productData?.data?.[0]?.attributes);
    };

    getProduct();
  }, [params.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const p = product;

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
    setShowError(false);
    message.success(`Selected size: ${size}`);
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <Row gutter={50}>
          <Col xs={24} lg={12}>
            <Card bordered={false} className="w-full">
              <ProductImagesCarousel images={p.images.data} />
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <div className="py-3">
              {/* PRODUCT SUBTITLE */}
              <Text type="secondary">{p.subtitle}</Text>

              {/* PRODUCT TITLE */}
              <Title level={2} className="my-2">
                {p.name}
              </Title>

              {/* PRODUCT PRICE */}
              <div className="flex items-center mb-4">
                <Title level={3} type="danger" className="mr-2">
                  ${p.price}
                </Title>
                {p.original_price && (
                  <>
                    <Text delete>${p.original_price}</Text>
                    <Text type="success" className="ml-auto">
                      {getDiscountedPricePercentage(p.original_price, p.price)}%
                      off
                    </Text>
                  </>
                )}
              </div>

              {/* PRODUCT SIZE SELECTION */}
              <div className="mb-5">
                <div className="flex justify-between mb-2">
                  <Text strong>Select Size</Text>
                  <Text type="secondary" className="cursor-pointer">
                    Size Guide
                  </Text>
                </div>

                <Row gutter={16}>
                  {p.size.data.map((item: any, i: any) => (
                    <Col span={8} key={i}>
                      <Button
                        type={
                          selectedSize === item.size ? "primary" : "default"
                        }
                        block
                        onClick={() => handleSizeSelection(item.size)}
                        disabled={!item.enabled}
                      >
                        {item.size}
                      </Button>
                    </Col>
                  ))}
                </Row>

                {showError && (
                  <Text type="danger" className="mt-2">
                    Size selection is required
                  </Text>
                )}
              </div>

              {/* PRODUCT QUANTITY SELECTION */}
              <div className="mb-5">
                <div className="flex justify-between mb-2">
                  <Text strong>Quantity</Text>
                  <Text type="secondary" className="cursor-pointer">
                    Size Guide
                  </Text>
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={1}
                      onChange={(value) => setNumberOfItems(value || 1)}
                      style={{ width: "100%" }}
                    />
                  </Col>
                </Row>
              </div>

              {/* ADD TO CART AND WISHLIST */}
              <Row gutter={16} className="mt-5">
                <Col span={12}>
                  <Button block type="primary">
                    Add to Cart
                  </Button>
                </Col>
                <Col span={12}>
                  <Button block type="default">
                    <BiHeartCircle />
                    Add to Wishlist
                  </Button>
                </Col>
              </Row>
              {/* PRODUCT DESCRIPTION */}
              <div className="mt-10">
                <Title level={4}>Description</Title>
                <Markdown>{p.description}</Markdown>
              </div>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default ProductDetail;
