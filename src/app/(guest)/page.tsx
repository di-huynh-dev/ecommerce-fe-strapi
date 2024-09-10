import CategoryCard from "@/components/card/CategoryCard";
import ProductCard from "@/components/card/ProductCard";
import TopBanner from "@/components/TopBanner";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default async function Home() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return (
    <main>
      <Wrapper>
        {/* Slider */}
        <TopBanner />

        <Wrapper>
          {/* List all categories */}
          <CategoryCard />

          {/* Top Products */}
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
              {products?.data.map((product: Product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                View all products
              </button>
            </div>
          </>
        </Wrapper>
      </Wrapper>
    </main>
  );
}
