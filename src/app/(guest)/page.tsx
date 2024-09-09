import CategoryCard from "@/components/card/CategoryCard";
import ProductCard from "@/components/card/ProductCard";
import TopBanner from "@/components/TopBanner";
import Wrapper from "@/components/Wrapper";
import { API_URL, STRAPI_API_TOKEN } from "@/utils/urls";

async function getProducts() {
  const res = await fetch(`${API_URL}/api/products?populate=*`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Wrapper>
        {/* Slider */}
        <TopBanner />

        <Wrapper>
          {/* Top Products */}
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

          {/* List all categories */}
          <CategoryCard />
        </Wrapper>
      </Wrapper>
    </main>
  );
}
