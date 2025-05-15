
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import WineProductCard from "@/components/WineProductCard";
import Hero from "@/components/Hero";
import { useState } from "react";

// Типы данных для категорий и продуктов
type Category = {
  id: number;
  name: string;
  icon: string;
};

type Product = {
  id: number;
  name: string;
  type: string;
  country: string;
  year: number;
  price: number;
  rating: number;
  image: string;
};

const Index = () => {
  // Категории вин
  const categories: Category[] = [
    { id: 1, name: "Красное вино", icon: "Wine" },
    { id: 2, name: "Белое вино", icon: "GlassWater" },
    { id: 3, name: "Шампанское", icon: "Sparkles" },
    { id: 4, name: "Аксессуары", icon: "ShoppingBag" }
  ];

  // Популярные продукты
  const popularProducts: Product[] = [
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

  // Состояние для активной категории
  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Верхняя навигация */}
      <header className="border-b border-wine-200 bg-cream">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Wine" className="text-wine-500 h-8 w-8" />
            <h1 className="text-3xl font-cormorant font-bold text-wine-600">ВинныйДом</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-wine-700 hover:text-wine-500 font-medium">Главная</a>
            <a href="#" className="text-wine-700 hover:text-wine-500 font-medium">Каталог</a>
            <a href="#" className="text-wine-700 hover:text-wine-500 font-medium">О нас</a>
            <a href="#" className="text-wine-700 hover:text-wine-500 font-medium">Контакты</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Icon name="Search" className="h-5 w-5 text-wine-500" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" className="h-5 w-5 text-wine-500" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" className="h-5 w-5 text-wine-500" />
            </Button>
            <Button className="hidden md:flex bg-wine-500 hover:bg-wine-600">
              <span>Каталог</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Главный баннер */}
        <Hero />

        {/* Категории */}
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
                  onClick={() => setActiveCategory(category.id)}
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

        {/* Популярные товары */}
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
              {popularProducts.map((product) => (
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

        {/* О нас */}
        <section className="py-16 bg-cream relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Винный погреб" 
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-wine-500 text-white p-4 rounded-lg shadow-lg">
                    <p className="font-cormorant text-2xl">15+ лет</p>
                    <p className="text-sm opacity-80">на рынке</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl text-wine-700 font-cormorant mb-4">О нашем магазине</h2>
                <Separator className="w-24 h-1 bg-gold-400 mb-6" />
                <p className="text-lg mb-6 text-wine-900/80">
                  Мы специализируемся на подборе и продаже элитных вин со всего мира. Наши сомелье имеют многолетний опыт работы 
                  и помогут вам выбрать идеальное вино для любого случая.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-wine-500 h-5 w-5" />
                    <span className="font-medium">Эксклюзивные вина</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-wine-500 h-5 w-5" />
                    <span className="font-medium">Бесплатная доставка</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-wine-500 h-5 w-5" />
                    <span className="font-medium">Гарантия качества</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-wine-500 h-5 w-5" />
                    <span className="font-medium">Консультации сомелье</span>
                  </div>
                </div>
                <Button className="bg-wine-500 hover:bg-wine-600">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Подписка */}
        <section className="py-16 wine-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant mb-4">Подпишитесь на новости и акции</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Получайте информацию о новых поступлениях, эксклюзивных предложениях и винных дегустациях.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-4 py-3 rounded-md text-dark flex-grow focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <Button className="bg-gold-400 hover:bg-gold-500 text-wine-900 px-6">
                Подписаться
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-wine-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wine" className="text-gold-400 h-8 w-8" />
                <h2 className="text-2xl font-cormorant font-bold">ВинныйДом</h2>
              </div>
              <p className="text-white/70 mb-4">
                Магазин элитных вин и аксессуаров с доставкой по всей России.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gold-300 hover:text-gold-400">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gold-300 hover:text-gold-400">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gold-300 hover:text-gold-400">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-cormorant text-xl mb-4 font-semibold">Каталог</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-gold-300">Красные вина</a></li>
                <li><a href="#" className="hover:text-gold-300">Белые вина</a></li>
                <li><a href="#" className="hover:text-gold-300">Шампанское</a></li>
                <li><a href="#" className="hover:text-gold-300">Крепкие напитки</a></li>
                <li><a href="#" className="hover:text-gold-300">Аксессуары</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-cormorant text-xl mb-4 font-semibold">Информация</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-gold-300">О компании</a></li>
                <li><a href="#" className="hover:text-gold-300">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-gold-300">Возврат</a></li>
                <li><a href="#" className="hover:text-gold-300">Блог о вине</a></li>
                <li><a href="#" className="hover:text-gold-300">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-cormorant text-xl mb-4 font-semibold">Контакты</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4 text-gold-400" />
                  г. Москва, ул. Винная, 15
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-gold-400" />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-gold-400" />
                  info@винныйдом.рф
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" className="h-4 w-4 text-gold-400" />
                  Пн-Вс: 10:00 - 22:00
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-wine-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 ВинныйДом. Все права защищены.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img src="https://via.placeholder.com/40x25" alt="Visa" />
              <img src="https://via.placeholder.com/40x25" alt="MasterCard" />
              <img src="https://via.placeholder.com/40x25" alt="MIR" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
