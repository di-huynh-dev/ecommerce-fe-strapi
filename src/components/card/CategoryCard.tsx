"use client";
import React, { useState, useEffect } from "react";
import { Card, Carousel } from "antd";
import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const contentStyle: React.CSSProperties = {
  height: "560px",
  color: "#fff",
  lineHeight: "560px",
  textAlign: "center",
};

const CategoryCardCarousel = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchDataFromApi(`/api/categories?populate=*`);
        setCategories(data.data || []);
      } catch (err) {
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedCategories = chunkArray(categories, 5);

  return (
    <div className="my-10">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Carousel autoplay>
          {groupedCategories.map((group, index) => (
            <div key={index} style={contentStyle}>
              <div className="grid grid-cols-5 gap-4">
                {group.map((category, idx) => (
                  <>
                    <Link href={`/category/${category.attributes.slug}`}>
                      <Card
                        key={idx}
                        hoverable
                        className="hover:bg-gray-400 hover:bg-opacity-100 hover:text-white"
                      >
                        <div className="flex flex-col items-center">
                          <div className="text-3xl">
                            <Image
                              src={
                                category.attributes.thumbnail.data.attributes
                                  .url
                              }
                              alt="icon"
                              width={80}
                              height={80}
                            />{" "}
                          </div>
                          <p className="mt-2">{category.attributes.name}</p>
                        </div>
                      </Card>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CategoryCardCarousel;
