import { fetchDataFromApi } from "@/utils/api";
import ClientProductDetail from "@/components/product/ProductDetail";

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const productData = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${params.slug}`
  );

  const product = productData?.data?.[0]?.attributes;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ClientProductDetail product={product} />
    </>
  );
};

export default ProductDetailPage;
