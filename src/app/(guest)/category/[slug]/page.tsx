import { fetchDataFromApi } from "@/utils/api";
import CategoryDetail from "@/components/category/CategoryDetail";
import { notFound } from "next/navigation";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const categoryResponse = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${params.slug}`
  );

  if (!categoryResponse?.data?.[0]?.attributes) {
    return notFound(); // Nếu không tìm thấy dữ liệu category, trả về trang không tìm thấy
  }

  const categoryData = categoryResponse?.data?.[0]?.attributes;

  return (
    <>
      <CategoryDetail categoryData={categoryData} />
    </>
  );
};

export default CategoryPage;
