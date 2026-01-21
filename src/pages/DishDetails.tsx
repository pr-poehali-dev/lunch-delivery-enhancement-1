import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const DishDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const dish = {
    id: 1,
    name: 'Стейк с овощами гриль',
    price: 850,
    image: '🥩',
    rating: 4.9,
    reviews: 127,
    calories: 520,
    protein: 45,
    carbs: 25,
    fats: 18,
    weight: 350,
    cookTime: 30,
    category: 'Бизнес-ланч',
    description: 'Сочный говяжий стейк средней прожарки, приготовленный на гриле с ароматными травами. Подается с овощами гриль: цукини, баклажаны, томаты черри и болгарский перец.',
    ingredients: [
      'Говяжий стейк (200г)',
      'Цукини (50г)',
      'Баклажаны (50г)',
      'Томаты черри (30г)',
      'Болгарский перец (40г)',
      'Оливковое масло (10мл)',
      'Розмарин, тимьян',
      'Чеснок, специи',
    ],
    allergens: ['Может содержать следы глютена'],
    tags: ['Белок', 'ЗОЖ', 'Без глютена'],
  };

  const relatedDishes = [
    { id: 2, name: 'Куриная грудка с киноа', price: 620, image: '🍗', rating: 4.8 },
    { id: 3, name: 'Говядина по-строгановски', price: 720, image: '🍖', rating: 4.9 },
    { id: 4, name: 'Филе лосося с овощами', price: 890, image: '🐟', rating: 4.9 },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Link to="/menu" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <Icon name="ArrowLeft" size={20} />
            Назад к меню
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <div className="h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-[200px] mb-6 sticky top-24">
                {dish.image}
              </div>
            </div>

            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{dish.category}</Badge>
                {dish.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline">{tag}</Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">{dish.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-current" />
                    ))}
                  </div>
                  <span className="font-bold">{dish.rating}</span>
                  <span className="text-muted-foreground">({dish.reviews} отзывов)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">{dish.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icon name="Flame" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-bold text-lg">{dish.calories}</div>
                    <div className="text-xs text-muted-foreground">Калорий</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icon name="Weight" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-bold text-lg">{dish.weight}г</div>
                    <div className="text-xs text-muted-foreground">Вес</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-bold text-lg">{dish.cookTime}</div>
                    <div className="text-xs text-muted-foreground">Минут</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icon name="Beef" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-bold text-lg">{dish.protein}г</div>
                    <div className="text-xs text-muted-foreground">Белка</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8 border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Цена за порцию</div>
                      <div className="text-4xl font-bold text-primary">{dish.price} ₽</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Icon name="Minus" size={18} />
                      </Button>
                      <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Icon name="Plus" size={18} />
                      </Button>
                    </div>
                  </div>
                  <Button size="lg" className="w-full">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Добавить в корзину — {dish.price * quantity} ₽
                  </Button>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Icon name="Heart" size={18} className="mr-2" />
                  В избранное
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="Share2" size={18} className="mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="nutrition" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl">
              <TabsTrigger value="nutrition">Пищевая ценность</TabsTrigger>
              <TabsTrigger value="ingredients">Состав</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы ({dish.reviews})</TabsTrigger>
            </TabsList>
            <TabsContent value="nutrition" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Пищевая ценность на 100г</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-muted-foreground">Энергетическая ценность</span>
                          <span className="font-bold">{Math.round(dish.calories / (dish.weight / 100))} ккал</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-muted-foreground">Белки</span>
                          <span className="font-bold">{Math.round(dish.protein / (dish.weight / 100))}г</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-muted-foreground">Жиры</span>
                          <span className="font-bold">{Math.round(dish.fats / (dish.weight / 100))}г</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-muted-foreground">Углеводы</span>
                          <span className="font-bold">{Math.round(dish.carbs / (dish.weight / 100))}г</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-bold mb-4">Процент от суточной нормы</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Белки</span>
                            <span>{Math.round((dish.protein / 75) * 100)}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${Math.round((dish.protein / 75) * 100)}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Жиры</span>
                            <span>{Math.round((dish.fats / 70) * 100)}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-accent" style={{ width: `${Math.round((dish.fats / 70) * 100)}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Углеводы</span>
                            <span>{Math.round((dish.carbs / 310) * 100)}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary" style={{ width: `${Math.round((dish.carbs / 310) * 100)}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Состав блюда</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Icon name="Package" size={20} className="text-primary" />
                        Ингредиенты
                      </h4>
                      <ul className="space-y-3">
                        {dish.ingredients.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Icon name="AlertCircle" size={20} className="text-accent" />
                        Аллергены
                      </h4>
                      <ul className="space-y-3">
                        {dish.allergens.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <Icon name="Info" size={18} className="mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                            А
                          </div>
                          <div>
                            <div className="font-semibold">Анна Петрова</div>
                            <div className="text-sm text-muted-foreground">2 дня назад</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, j) => (
                            <Icon key={j} name="Star" size={16} className="text-accent fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Отличное блюдо! Стейк прожарен идеально, овощи свежие и ароматные. Порция большая, наелась. Буду заказывать ещё!
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <section>
            <h2 className="text-3xl font-bold mb-8">Похожие блюда</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedDishes.map((item, i) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Link to={`/dish/${item.id}`}>
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-7xl">
                      {item.image}
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{item.price} ₽</span>
                        <Badge variant="secondary" className="gap-1">
                          <Icon name="Star" size={12} className="fill-current" />
                          {item.rating}
                        </Badge>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default DishDetails;
