import React from "react";
import { Card, Carousel } from "antd";
import {
  BiPhone,
  BiCamera,
  BiDesktop,
  BiHeadphone,
  BiGame,
} from "react-icons/bi";

const categories = [
  { name: "Phones", icon: <BiPhone /> },
  { name: "Computers", icon: <BiDesktop /> },
  { name: "SmartWatch", icon: <BiPhone /> },
  { name: "Camera", icon: <BiCamera />, highlight: true },
  { name: "HeadPhones", icon: <BiHeadphone /> },
  { name: "Gaming", icon: <BiGame /> },
  { name: "Phones", icon: <BiPhone /> },
  { name: "Computers", icon: <BiDesktop /> },
  { name: "SmartWatch", icon: <BiPhone /> },
  { name: "Camera", icon: <BiCamera />, highlight: true },
  { name: "HeadPhones", icon: <BiHeadphone /> },
  { name: "Gaming", icon: <BiGame /> },
];

const chunkArray = (arr: any[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const contentStyle: React.CSSProperties = {
  height: "560px",
  color: "#fff",
  lineHeight: "560px",
  textAlign: "center",
};
const CategoryCardCarousel = () => {
  const groupedCategories = chunkArray(categories, 5);

  return (
    <div className="my-10">
      <Carousel autoplay>
        {groupedCategories.map((group, index) => (
          <div key={index} style={contentStyle}>
            <div className="grid grid-cols-5 gap-4">
              {group.map((category, idx) => (
                <Card
                  key={idx}
                  hoverable
                  className="hover:bg-red-500 hover:bg-opacity-100 hover:text-white"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-3xl">{category.icon}</div>
                    <p className="mt-2">{category.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCardCarousel;
