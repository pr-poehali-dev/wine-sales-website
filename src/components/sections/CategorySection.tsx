
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

// Типы данных для категорий
export type Category = {
  id: number;
  name: string;
  icon: string;
};

interface CategorySectionProps {
  categories: Category[];
  activeCategory: number;
  onCategoryChange: (categoryId: number) => void;
}

const CategorySection = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategorySectionProps) => {
  return (
    <section className="py-12 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-8 text-wine-700 font-cormorant">
          Наши категории
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`relative overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                activeCategory === category.id ? "border-wine-500 ring-1 ring-wine-400" : "border-gold-100"
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Icon 
                  name={category.icon} 
                  className={`h-10 w-10 mb-3 ${
                    activeCategory === category.id ? "text-wine-500" : "text-gold-400"
                  }`}
                />
                <h3 className="font-cormorant text-xl font-semibold">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
