import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const MenuCategory = () => {
  const { category } = useParams();

  const categoryData: Record<string, { name: string; description: string; icon: string }> = {
    business: { name: 'Бизнес-ланч', description: 'Полноценные обеды для деловых людей', icon: 'Briefcase' },
    healthy: { name: 'Здоровое питание', description: 'Сбалансированные блюда для ЗОЖ', icon: 'Heart' },
    asian: { name: 'Азиатская кухня', description: 'Аутентичные блюда Азии', icon: 'Coffee' },
    italian: { name: 'Итальянская кухня', description: 'Классика итальянской кухни', icon: 'Pizza' },
  };

  const currentCategory = categoryData[category || 'business'] || categoryData.business;

  const dishes = [
    { id: 1, name: 'Стейк с овощами гриль', price: 850, image: '🥩', rating: 4.9, calories: 520, protein: 45, carbs: 25, fats: 18 },
    { id: 2, name: 'Куриная грудка с киноа', price: 620, image: '🍗', rating: 4.8, calories: 480, protein: 42, carbs: 35, fats: 12 },
    { id: 3, name: 'Говядина по-строгановски', price: 720, image: '🍖', rating: 4.9, calories: 580, protein: 38, carbs: 28, fats: 22 },
    { id: 4, name: 'Филе лосося с овощами', price: 890, image: '🐟', rating: 4.9, calories: 520, protein: 40, carbs: 20, fats: 25 },
  ];

  return (
    <Layout>
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto">
          <Link to="/menu" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <Icon name="ArrowLeft" size={20} />
            Назад к меню
          </Link>
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon name={currentCategory.icon} size={32} className="text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">{currentCategory.name}</h1>
              <p className="text-muted-foreground text-lg">{currentCategory.description}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Badge variant="secondary" className="gap-2">
              <Icon name="Package" size={14} />
              24 блюда
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Icon name="Star" size={14} />
              Средний рейтинг 4.8
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Популярные блюда категории</h2>
            <div className="flex gap-3 flex-wrap">
              <Button variant="default" size="sm">Все</Button>
              <Button variant="outline" size="sm">До 500 ккал</Button>
              <Button variant="outline" size="sm">Высокобелковые</Button>
              <Button variant="outline" size="sm">Без глютена</Button>
              <Button variant="outline" size="sm">Вегетарианские</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish, i) => (
              <Card
                key={dish.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Link to={`/dish/${dish.id}`}>
                  <div className="h-56 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl">
                    {dish.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{dish.name}</h3>
                      <Badge variant="secondary" className="gap-1">
                        <Icon name="Star" size={14} className="fill-current" />
                        {dish.rating}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Калории</div>
                        <div className="font-bold text-sm">{dish.calories}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Белки</div>
                        <div className="font-bold text-sm">{dish.protein}г</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Углев</div>
                        <div className="font-bold text-sm">{dish.carbs}г</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Жиры</div>
                        <div className="font-bold text-sm">{dish.fats}г</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{dish.price} ₽</span>
                      <Button>
                        <Icon name="Plus" size={18} className="mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuCategory;
