
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

// Определяем тип для винного продукта
type WineProduct = {
  id: number;
  name: string;
  type: string;
  country: string;
  year: number;
  price: number;
  rating: number;
  image: string;
};

// Принимаем свойства компонента
interface WineProductCardProps {
  product: WineProduct;
}

const WineProductCard = ({ product }: WineProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Функция для форматирования цены
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card 
      className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-wine-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Скидка или бейдж (если нужен) */}
      {product.id === 3 && (
        <div className="absolute top-3 left-3 z-10 bg-wine-500 text-white text-xs px-2 py-1 rounded-md">
          Хит продаж
        </div>
      )}

      {/* Иконка избранного */}
      <button className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white p-1.5 rounded-full transition-all">
        <Icon name="Heart" className="h-4 w-4 text-wine-400 hover:text-wine-500" />
      </button>

      {/* Изображение продукта */}
      <div className="relative overflow-hidden h-[200px]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Оверлей при наведении */}
        <div className={`absolute inset-0 bg-wine-900/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button variant="outline" className="bg-white/90 border-wine-300 text-wine-700 hover:bg-white">
            Быстрый просмотр
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Информация о стране и годе */}
        <div className="flex justify-between items-center mb-2 text-sm text-wine-600">
          <div className="flex items-center gap-1">
            <Icon name="Globe" className="h-3.5 w-3.5" />
            <span>{product.country}</span>
          </div>
          <span>{product.year} г.</span>
        </div>
        
        {/* Название вина */}
        <h3 className="font-cormorant text-xl font-semibold mb-1 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        
        {/* Тип вина */}
        <p className="text-sm text-wine-500 mb-3">{product.type}</p>
        
        <Separator className="mb-3 bg-wine-100" />
        
        {/* Рейтинг */}
        <div className="flex items-center mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Icon 
                key={star}
                name={star <= Math.floor(product.rating) ? "Star" : star <= product.rating ? "StarHalf" : "Star"} 
                className={`h-4 w-4 ${star <= product.rating ? "text-gold-400" : "text-gray-300"}`}
                fallback="Star"
              />
            ))}
          </div>
          <span className="text-sm text-wine-600 ml-2">{product.rating}</span>
        </div>
        
        {/* Цена и кнопка */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-wine-700">{formatPrice(product.price)}</p>
            {product.id === 2 && (
              <p className="text-xs text-wine-400 line-through">{formatPrice(product.price * 1.2)}</p>
            )}
          </div>
          
          <Button size="sm" className="bg-wine-500 hover:bg-wine-600">
            <Icon name="ShoppingCart" className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WineProductCard;
