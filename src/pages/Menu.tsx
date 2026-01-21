import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все блюда', icon: 'Utensils', count: 156 },
    { id: 'business', name: 'Бизнес-ланч', icon: 'Briefcase', count: 28 },
    { id: 'healthy', name: 'Здоровое питание', icon: 'Heart', count: 42 },
    { id: 'asian', name: 'Азиатская кухня', icon: 'Coffee', count: 35 },
    { id: 'italian', name: 'Итальянская', icon: 'Pizza', count: 24 },
    { id: 'salads', name: 'Салаты', icon: 'Salad', count: 18 },
    { id: 'soups', name: 'Супы', icon: 'Soup', count: 15 },
    { id: 'desserts', name: 'Десерты', icon: 'Cake', count: 22 },
  ];

  const dishes = [
    { id: 1, name: 'Стейк с овощами', category: 'business', price: 850, image: '🥩', rating: 4.9, calories: 520, tags: ['Белок', 'Глютен'] },
    { id: 2, name: 'Салат Цезарь с курицей', category: 'healthy', price: 490, image: '🥗', rating: 4.8, calories: 380, tags: ['ЗОЖ', 'Белок'] },
    { id: 3, name: 'Роллы Филадельфия', category: 'asian', price: 680, image: '🍱', rating: 4.9, calories: 420, tags: ['Рыба'] },
    { id: 4, name: 'Паста Карбонара', category: 'italian', price: 590, image: '🍝', rating: 4.7, calories: 650, tags: ['Глютен'] },
    { id: 5, name: 'Поке с лососем', category: 'healthy', price: 720, image: '🥙', rating: 4.9, calories: 450, tags: ['ЗОЖ', 'Рыба'] },
    { id: 6, name: 'Пицца Маргарита', category: 'italian', price: 650, image: '🍕', rating: 4.8, calories: 780, tags: ['Вегетарианское'] },
    { id: 7, name: 'Том Ям с креветками', category: 'soups', price: 520, image: '🍲', rating: 4.9, calories: 340, tags: ['Острое', 'Морепродукты'] },
    { id: 8, name: 'Греческий салат', category: 'salads', price: 420, image: '🥗', rating: 4.7, calories: 280, tags: ['Вегетарианское', 'ЗОЖ'] },
    { id: 9, name: 'Тирамису', category: 'desserts', price: 380, image: '🍰', rating: 4.9, calories: 450, tags: ['Десерт'] },
    { id: 10, name: 'Боул с курицей терияки', category: 'asian', price: 640, image: '🍜', rating: 4.8, calories: 520, tags: ['Белок'] },
    { id: 11, name: 'Лазанья классическая', category: 'italian', price: 620, image: '🍝', rating: 4.8, calories: 720, tags: ['Глютен'] },
    { id: 12, name: 'Чизкейк Нью-Йорк', category: 'desserts', price: 420, image: '🍰', rating: 4.9, calories: 520, tags: ['Десерт'] },
  ];

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Utensils" size={14} className="mr-1" />
              Полное меню
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-secondary">Наше меню</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 150 блюд на каждый день. Свежие продукты, разнообразие вкусов
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Найти блюдо..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {categories.map((cat) => (
              <Card
                key={cat.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === cat.id ? 'border-primary border-2 shadow-md' : ''
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`text-3xl mb-2 ${selectedCategory === cat.id ? 'animate-scale-in' : ''}`}>
                    <Icon name={cat.icon} size={32} className={selectedCategory === cat.id ? 'text-primary' : 'text-muted-foreground'} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
                  <Badge variant="secondary" className="text-xs">{cat.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground">
              Найдено блюд: <span className="font-bold text-foreground">{filteredDishes.length}</span>
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="SlidersHorizontal" size={16} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ArrowUpDown" size={16} className="mr-2" />
                Сортировка
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDishes.map((dish, i) => (
              <Card
                key={dish.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <Link to={`/dish/${dish.id}`}>
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                    {dish.image}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold line-clamp-2 flex-1">{dish.name}</h3>
                      <Badge variant="secondary" className="gap-1 ml-2">
                        <Icon name="Star" size={12} className="fill-current" />
                        {dish.rating}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Icon name="Flame" size={14} />
                        {dish.calories} ккал
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        30 мин
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {dish.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-2xl font-bold text-primary">{dish.price} ₽</span>
                      <Button size="sm">
                        <Icon name="Plus" size={16} className="mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {filteredDishes.length === 0 && (
            <div className="text-center py-20">
              <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground mb-6">Попробуйте изменить параметры поиска</p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
