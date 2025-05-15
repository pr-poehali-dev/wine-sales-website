
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-wine-900 text-white">
      {/* Фоновое изображение с наложением */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt="Винный фон"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-900 via-wine-900/90 to-wine-800/70"></div>
      </div>

      {/* Содержимое баннера */}
      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-bold mb-4 leading-tight animate-fade-in">
            Изысканные вина <br />
            для особых моментов
          </h1>
          
          <div className="h-1 w-24 golden-accent rounded mb-6"></div>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            Коллекция премиальных вин со всего мира. Доставка в день заказа, 
            экспертные консультации от профессиональных сомелье.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button size="lg" className="bg-wine-500 hover:bg-wine-600 text-white">
              Смотреть каталог
              <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gold-400 text-gold-300 hover:bg-gold-400/10">
              Подобрать вино
            </Button>
          </div>
          
          {/* Преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <div className="flex items-center gap-3">
              <div className="bg-gold-400/20 p-2 rounded-full">
                <Icon name="Truck" className="h-6 w-6 text-gold-300" />
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold">Быстрая доставка</h3>
                <p className="text-sm opacity-75">По всей России</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-gold-400/20 p-2 rounded-full">
                <Icon name="Shield" className="h-6 w-6 text-gold-300" />
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold">Гарантия качества</h3>
                <p className="text-sm opacity-75">Только оригиналы</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-gold-400/20 p-2 rounded-full">
                <Icon name="BadgePercent" className="h-6 w-6 text-gold-300" />
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold">Бонусы и скидки</h3>
                <p className="text-sm opacity-75">Для постоянных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративный элемент */}
      <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-1/3 z-0">
        <svg className="h-full w-full text-wine-500/10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100 L100,0 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
