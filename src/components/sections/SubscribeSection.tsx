
import { Button } from "@/components/ui/button";

const SubscribeSection = () => {
  return (
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
  );
};

export default SubscribeSection;
