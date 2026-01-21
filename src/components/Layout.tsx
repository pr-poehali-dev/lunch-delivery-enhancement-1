import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🍽️</span>
            <span className="text-2xl font-cormorant font-bold text-secondary">OfficeLunch</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/menu" className="text-foreground hover:text-primary transition-colors">Меню</Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">Как работает</Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">Тарифы</Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Блог</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={22} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">0</span>
              </Button>
            </Link>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      <footer className="bg-secondary text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍽️</span>
                <span className="text-2xl font-cormorant font-bold">OfficeLunch</span>
              </div>
              <p className="text-white/70">
                Премиум доставка обедов в офисы с 2020 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Блог</Link></li>
                <li><Link to="/career" className="hover:text-white transition-colors">Карьера</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Партнёры</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/for-business" className="hover:text-white transition-colors">Корпоративное питание</Link></li>
                <li><Link to="/catering" className="hover:text-white transition-colors">Кейтеринг</Link></li>
                <li><Link to="/nutrition" className="hover:text-white transition-colors">Программы питания</Link></li>
                <li><Link to="/menu" className="hover:text-white transition-colors">Меню</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>hello@officelunch.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 OfficeLunch. Все права защищены. 
              <Link to="/privacy" className="ml-3 hover:text-white">Политика конфиденциальности</Link>
              <Link to="/terms" className="ml-3 hover:text-white">Условия использования</Link>
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
