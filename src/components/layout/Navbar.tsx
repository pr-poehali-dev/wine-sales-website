
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
