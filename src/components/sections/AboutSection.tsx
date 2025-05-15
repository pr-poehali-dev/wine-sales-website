
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
