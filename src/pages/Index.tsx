import { useState } from "react";

// Импорт отдельных компонентов
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import CategorySection from "@/components/sections/CategorySection";
import PopularProductsSection from "@/components/sections/PopularProductsSection";
import AboutSection from "@/components/sections/AboutSection";
import SubscribeSection from "@/components/sections/SubscribeSection";

// Импорт данных
import { categories, popularProducts } from "@/data/wineData";

const Index = () => {
  // Состояние для активной категории
  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Верхняя навигация */}
      <Navbar />

      <main>
        {/* Главный баннер */}
        <Hero />

        {/* Категории */}
        <CategorySection
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Популярные товары */}
        <PopularProductsSection products={popularProducts} />

        {/* О нас */}
        <AboutSection />

        {/* Подписка */}
        <SubscribeSection />
      </main>

      {/* Подвал */}
      <Footer />
    </div>
  );
};

export default Index;
