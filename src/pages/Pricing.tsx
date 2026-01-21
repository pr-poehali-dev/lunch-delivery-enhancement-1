import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Стартап',
      price: isAnnual ? '12 000' : '15 000',
      priceAnnual: '144 000',
      description: 'Для небольших команд до 10 человек',
      features: [
        'До 10 человек',
        'Базовое меню (50+ блюд)',
        'Доставка 1 раз в день',
        'Email поддержка',
        'Онлайн заказ',
        'Гибкая отмена',
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Бизнес',
      price: isAnnual ? '28 000' : '35 000',
      priceAnnual: '336 000',
      description: 'Для растущих компаний до 50 человек',
      features: [
        'До 50 человек',
        'Расширенное меню (150+ блюд)',
        'Доставка 2 раза в день',
        'Персональный менеджер',
        'Индивидуальное меню',
        'Приоритетная поддержка',
        'Аналитика заказов',
        'Корпоративная скидка 10%',
      ],
      popular: true,
      color: 'from-primary to-accent',
    },
    {
      name: 'Корпорация',
      price: 'По запросу',
      description: 'Для крупного бизнеса от 50 человек',
      features: [
        'Неограниченное количество',
        'Premium меню (200+ блюд)',
        'Доставка по запросу',
        'Выделенная команда',
        'Кастомные решения',
        'Аналитика питания',
        'Корпоративная скидка 20%',
        'Индивидуальные условия',
        'Диетолог в штате',
        'API интеграция',
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const addons = [
    { name: 'Завтраки', price: '5 000', icon: 'Sunrise' },
    { name: 'Ужины', price: '7 000', icon: 'Moon' },
    { name: 'Кофе-брейк', price: '3 000', icon: 'Coffee' },
    { name: 'Фрукты и снеки', price: '4 000', icon: 'Apple' },
    { name: 'Праздничное меню', price: 'От 15 000', icon: 'PartyPopper' },
    { name: 'Диетолог', price: '10 000', icon: 'Stethoscope' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="DollarSign" size={14} className="mr-1" />
            Тарифы
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary animate-fade-in-up">
            Выберите свой план
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Гибкие тарифы для компаний любого размера. Экономьте до 20% при годовой оплате
          </p>
          
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <span className={`text-lg ${!isAnnual ? 'font-bold' : 'text-muted-foreground'}`}>
              Ежемесячно
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-lg ${isAnnual ? 'font-bold' : 'text-muted-foreground'}`}>
              Ежегодно
              <Badge variant="secondary" className="ml-2">-20%</Badge>
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`relative overflow-hidden animate-fade-in-up ${
                  plan.popular ? 'border-primary border-2 shadow-2xl scale-105' : ''
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.popular && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.color}`} />
                )}
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${plan.color} border-0`}>
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardContent className="pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6 min-h-[48px]">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.price === 'По запросу' ? (
                      <div className="text-4xl font-bold text-secondary">По запросу</div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-secondary">
                          {plan.price} ₽
                          <span className="text-lg text-muted-foreground font-normal">/мес</span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-muted-foreground mt-1">
                            {plan.priceAnnual} ₽ в год
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-6 ${
                      plan.popular ? `bg-gradient-to-r ${plan.color}` : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.popular ? 'Начать сейчас' : plan.price === 'По запросу' ? 'Связаться' : 'Выбрать план'}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Icon
                          name="CheckCircle2"
                          size={20}
                          className={`flex-shrink-0 mt-0.5 ${
                            plan.popular ? 'text-primary' : 'text-muted-foreground'
                          }`}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Дополнительные услуги</h2>
            <p className="text-muted-foreground text-lg">
              Расширьте возможности вашего тарифа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition-all animate-scale-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={addon.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{addon.name}</h3>
                      <p className="text-sm text-primary font-bold">{addon.price} ₽/мес</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-secondary">Нужна помощь с выбором?</h2>
                <p className="text-muted-foreground text-lg">
                  Наши специалисты подберут оптимальный тариф для вашей компании
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Звонок</h3>
                    <p className="text-sm text-muted-foreground mb-3">+7 (495) 123-45-67</p>
                    <Button size="sm" variant="outline" className="w-full">Позвонить</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-3">hello@officelunch.ru</p>
                    <Button size="sm" variant="outline" className="w-full">Написать</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Чат</h3>
                    <p className="text-sm text-muted-foreground mb-3">Онлайн поддержка</p>
                    <Button size="sm" variant="outline" className="w-full">Открыть чат</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
