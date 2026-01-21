import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      icon: 'ClipboardList',
      title: 'Выбор меню',
      desc: 'Выберите блюда из каталога или доверьтесь нашим рекомендациям на основе предпочтений вашей команды',
      details: ['Более 200 блюд', 'Еженедельное обновление', 'Фильтры по диете', 'Персональные рекомендации'],
    },
    {
      step: '02',
      icon: 'Calendar',
      title: 'Оформление заказа',
      desc: 'Укажите количество порций, время доставки и адрес офиса. Можно настроить регулярную доставку',
      details: ['Гибкий график', 'Онлайн-оплата', 'Индивидуальный подход', 'Корпоративные скидки'],
    },
    {
      step: '03',
      icon: 'ChefHat',
      title: 'Приготовление',
      desc: 'Наши повара готовят ваш заказ из свежих продуктов с соблюдением всех стандартов качества',
      details: ['Свежие продукты', 'Контроль качества', 'Сертификация HACCP', 'Профессиональные повара'],
    },
    {
      step: '04',
      icon: 'Package',
      title: 'Упаковка',
      desc: 'Блюда упаковываются в экологичные контейнеры, сохраняющие температуру и свежесть',
      details: ['Термоконтейнеры', 'Экоупаковка', 'Раздельная упаковка', 'Индивидуальные порции'],
    },
    {
      step: '05',
      icon: 'Truck',
      title: 'Доставка',
      desc: 'Курьер доставляет заказ точно в указанное время прямо в ваш офис',
      details: ['Точность доставки', 'Отслеживание заказа', 'Помощь с разгрузкой', 'Бесконтактная доставка'],
    },
    {
      step: '06',
      icon: 'ThumbsUp',
      title: 'Наслаждайтесь',
      desc: 'Ваша команда получает вкусные и полезные обеды, а вы экономите время и деньги',
      details: ['Довольная команда', 'Экономия времени', 'Повышение продуктивности', 'Забота о здоровье'],
    },
  ];

  const features = [
    { icon: 'Clock', title: 'Экономия времени', desc: 'Никаких очередей и поисков обедов' },
    { icon: 'Shield', title: 'Гарантия качества', desc: 'Все блюда проходят контроль' },
    { icon: 'Wallet', title: 'Прозрачные цены', desc: 'Никаких скрытых платежей' },
    { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи для вас' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="Zap" size={14} className="mr-1" />
            Процесс работы
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary animate-fade-in-up">
            Как это работает
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Простой и понятный процесс от выбора блюд до доставки в ваш офис
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-16">
            {steps.map((item, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <div className="text-8xl font-bold text-primary/5 absolute -top-8 -left-4">
                      {item.step}
                    </div>
                    <Badge variant="secondary" className="mb-4 relative z-10">
                      Шаг {item.step}
                    </Badge>
                  </div>
                  <h2 className="text-4xl font-bold mb-4 text-secondary flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    {item.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">{item.desc}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Card className="h-80 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
                    <CardContent className="h-full flex items-center justify-center text-9xl">
                      <Icon name={item.icon} size={120} className="text-primary/30" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Преимущества сервиса</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="text-center hover:shadow-lg transition-all animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к 500+ компаниям, которые уже доверяют нам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Utensils" size={20} className="mr-2" />
                Посмотреть меню
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
