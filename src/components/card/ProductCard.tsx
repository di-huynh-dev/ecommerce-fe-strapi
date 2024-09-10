import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Rating } from "./Rating";

// Define the props interface for ProductCard
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, original_price, slug, subtitle, thumbnail, rating } =
    product.attributes;

  const thumbnailUrl = thumbnail?.data?.attributes?.url;

  return (
    <Link href={`/product/${slug}`}>
      <Card
        className="cursor-pointer duration-300 hover:scale-105 transform overflow-hidden"
        cover={
          <div className="relative w-full h-64">
            <Image
              src={thumbnailUrl}
              alt={name}
              fill // This makes the image fill the parent div
              style={{ objectFit: "cover" }} // Use style prop to handle objectFit
              className="aspect-square"
            />
          </div>
        }
      >
        <div>
          <h2 className="font-medium text-lg">{name}</h2>
          <p className="text-gray-500">{subtitle}</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="text-red-500">${price}</p>
              {original_price && (
                <p className="text-gray-400 line-through">${original_price}</p>
              )}
            </div>
            {original_price && price < original_price && (
              <p className="text-green-500">
                {Math.round(((original_price - price) / original_price) * 100)}%
                off
              </p>
            )}
          </div>
          <Rating rating={rating} />
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
