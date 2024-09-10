"use client";
import ProductCard from "@/components/card/ProductCard";
import Wrapper from "@/components/Wrapper";
import { Pagination, Select } from "antd";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "@/utils/api";

const { Option } = Select;

const CategoryDetail = ({ categoryData }: { categoryData: any }) => {
  const [productData, setProductData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const pageSize = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      let sortQuery = "";
      if (sortOrder) {
        sortQuery = `&sort=${sortOrder}`;
      }
      const response = await fetchDataFromApi(
        `api/products?populate=*&filters[categories][slug][$eq]=${categoryData.slug}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}${sortQuery}`
      );
      setProductData(response);
    };

    fetchProducts();
  }, [currentPage, sortOrder, categoryData.slug]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset page to 1 when sorting
  };

  return (
    <>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="flex justify-between items-center">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              {categoryData?.name}
            </div>
            <div className="mb-5">
              <Select
                defaultValue="Sort by"
                style={{ width: 200 }}
                onChange={handleSortChange}
              >
                <Option value="">Sort by</Option>
                <Option value="price:asc">Price: Low to High</Option>
                <Option value="price:desc">Price: High to Low</Option>
                <Option value="name:asc">Name: A to Z</Option>
                <Option value="name:desc">Name: Z to A</Option>
              </Select>
            </div>
          </div>
        </div>

        {/* Products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {productData?.data?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Products grid end */}

        {/* Pagination */}
        <div className="flex justify-center my-10">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={productData?.meta?.pagination?.total || 0}
            onChange={handlePageChange}
            showSizeChanger={false} // Nếu bạn muốn cho phép người dùng thay đổi số lượng sản phẩm trên trang, hãy đặt `showSizeChanger` thành `true`
          />
        </div>
      </Wrapper>
    </>
  );
};

export default CategoryDetail;
