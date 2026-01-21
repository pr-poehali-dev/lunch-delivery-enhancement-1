import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Стейк с овощами', price: 850, quantity: 2, image: '🥩' },
    { id: 2, name: 'Салат Цезарь', price: 490, quantity: 3, image: '🥗' },
    { id: 3, name: 'Роллы Филадельфия', price: 680, quantity: 1, image: '🍱' },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 0;
  const discount = 0;
  const total = subtotal + delivery - discount;

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Корзина</h1>
            <p className="text-muted-foreground">
              {cartItems.length} {cartItems.length === 1 ? 'товар' : 'товара'} в корзине
            </p>
          </div>

          {cartItems.length === 0 ? (
            <Card className="text-center py-20">
              <CardContent>
                <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-bold mb-4">Корзина пуста</h2>
                <p className="text-muted-foreground mb-6">Добавьте блюда из меню</p>
                <Link to="/menu">
                  <Button size="lg">
                    <Icon name="Utensils" size={20} className="mr-2" />
                    Перейти в меню
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl flex-shrink-0">
                          {item.image}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                              <p className="text-2xl font-bold text-primary">{item.price} ₽</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Icon name="Trash2" size={20} />
                            </Button>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Icon name="Minus" size={16} />
                            </Button>
                            <span className="text-xl font-semibold w-12 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Icon name="Plus" size={16} />
                            </Button>
                            <span className="ml-auto text-xl font-bold">
                              {item.price * item.quantity} ₽
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Итого</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Стоимость блюд</span>
                        <span className="font-semibold">{subtotal} ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Доставка</span>
                        <span className="font-semibold text-green-600">Бесплатно</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Скидка</span>
                          <span className="font-semibold">-{discount} ₽</span>
                        </div>
                      )}
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between mb-6">
                      <span className="text-xl font-bold">Всего</span>
                      <span className="text-2xl font-bold text-primary">{total} ₽</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Промокод"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button variant="outline">
                          Применить
                        </Button>
                      </div>
                    </div>

                    <Button size="lg" className="w-full mb-3">
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Оформить заказ
                    </Button>

                    <Link to="/menu">
                      <Button variant="outline" size="lg" className="w-full">
                        <Icon name="ArrowLeft" size={20} className="mr-2" />
                        Продолжить покупки
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="mt-6 bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Truck" size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Бесплатная доставка</h4>
                        <p className="text-sm text-muted-foreground">
                          При заказе от 10 порций доставка бесплатная
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Рекомендуем добавить</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { id: 4, name: 'Том Ям', price: 520, image: '🍲' },
              { id: 5, name: 'Поке с лососем', price: 720, image: '🥙' },
              { id: 6, name: 'Тирамису', price: 380, image: '🍰' },
              { id: 7, name: 'Лимонад', price: 150, image: '🍋' },
            ].map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-5xl mb-3">
                    {item.image}
                  </div>
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{item.price} ₽</span>
                    <Button size="sm">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
