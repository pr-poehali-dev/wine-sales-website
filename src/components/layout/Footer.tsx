
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
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
  );
};

export default Footer;
