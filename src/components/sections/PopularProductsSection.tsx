
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import WineProductCard from "@/components/WineProductCard";

// Типы данных для продуктов
export type Product = {
  id: number;
  name: string;
  type: string;
  country: string;
  year: number;
  price: number;
  rating: number;
  image: string;
};

interface PopularProductsSectionProps {
  products: Product[];
}

const PopularProductsSection = ({ products }: PopularProductsSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl text-wine-700 font-cormorant">Популярные товары</h2>
          <Button variant="outline" className="border-wine-300 text-wine-600 hidden md:flex">
            Смотреть все
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <WineProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Button className="bg-wine-500 hover:bg-wine-600">
            Смотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
