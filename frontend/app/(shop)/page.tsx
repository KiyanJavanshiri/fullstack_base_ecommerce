import ProductsSlider from "@/components/home/ProductsSlider";
import Categories from "@/components/home/Categories";
import ProductShowSection from "@/components/home/ProductShowSection";

export default function Home() {
  return (
    <div>
      <ProductsSlider />
      <Categories />
      <ProductShowSection
        title={"Hoodies"}
        path={{ category: "clothing", subCategory: "hoodie" }}
      />
    </div>
  );
}
