import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
const contentStyle: React.CSSProperties = {
  height: "560px",
  color: "#fff",
  lineHeight: "560px",
  textAlign: "center",
};
const TopBanner = () => {
  return (
    <Carousel autoplay>
      <div style={contentStyle} className="w-full h-[560px] object-contain">
        <Image
          src="https://kwstplfqvczwxxmchwbo.supabase.co/storage/v1/object/sign/images-bucket/663999_v3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtYnVja2V0LzY2Mzk5OV92My53ZWJwIiwiaWF0IjoxNzI1ODY2NDgwLCJleHAiOjE3NTc0MDI0ODB9.aPMIc3ICy5gZYAZ69fvTdnCwz_B-1YFKN61TI6My_Kk&t=2024-09-09T07%3A21%3A08.803Z"
          className="w-full h-full"
          alt="First image"
          width={2048}
          height={560}
        />
      </div>
      <div style={contentStyle} className="w-full  h-[560px] object-contain">
        <Image
          src="https://kwstplfqvczwxxmchwbo.supabase.co/storage/v1/object/sign/images-bucket/AJ4MilitaryBlue_Primary_Desktop-2048x623.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtYnVja2V0L0FKNE1pbGl0YXJ5Qmx1ZV9QcmltYXJ5X0Rlc2t0b3AtMjA0OHg2MjMud2VicCIsImlhdCI6MTcyNTg2Njk3OSwiZXhwIjoxNzU3NDAyOTc5fQ.pX8HMC9Tazjuy6McQVOY8gbG3JfqJ7ibS2Ja5CpQyEA&t=2024-09-09T07%3A29%3A27.735Z"
          alt="First image"
          className="w-full h-full"
          width={2048}
          height={623}
        />
      </div>
    </Carousel>
  );
};

export default TopBanner;
