import { fetchDataFromApi } from "@/utils/api";
import CategoryDetail from "@/components/category/CategoryDetail";
import { notFound } from "next/navigation";
import Image from "next/image";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const categoryResponse = await fetchDataFromApi(
    `api/categories?filters[slug][$eq]=${params.slug}`
  );

  if (!categoryResponse?.data?.[0]?.attributes) {
    return notFound();
  }

  const categoryData = categoryResponse?.data?.[0]?.attributes;

  return (
    <>
      <CategoryDetail categoryData={categoryData} />
    </>
  );
};

export default CategoryPage;
