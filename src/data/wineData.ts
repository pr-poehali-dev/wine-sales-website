
import { Category } from "@/components/sections/CategorySection";
import { Product } from "@/components/sections/PopularProductsSection";

// Данные категорий
export const categories: Category[] = [
  { id: 1, name: "Красное вино", icon: "Wine" },
  { id: 2, name: "Белое вино", icon: "GlassWater" },
  { id: 3, name: "Шампанское", icon: "Sparkles" },
  { id: 4, name: "Аксессуары", icon: "ShoppingBag" }
];

// Данные популярных продуктов
export const popularProducts: Product[] = [
  {
    id: 1,
    name: "Шато Марго",
    type: "Красное сухое",
    country: "Франция",
    year: 2015,
    price: 12500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Шардоне Резерв",
    type: "Белое сухое",
    country: "Италия",
    year: 2018,
    price: 3200,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556442281-77c89dde9788?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Дом Периньон",
    type: "Шампанское брют",
    country: "Франция",
    year: 2010,
    price: 18900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594372254635-9529e0c54e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    name: "Бордо Супериор",
    type: "Красное полусухое",
    country: "Франция",
    year: 2017,
    price: 4800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];
