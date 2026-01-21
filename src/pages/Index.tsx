import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все категории', icon: 'Utensils' },
    { id: 'business', name: 'Бизнес-ланч', icon: 'Briefcase' },
    { id: 'healthy', name: 'Здоровое питание', icon: 'Heart' },
    { id: 'asian', name: 'Азиатская кухня', icon: 'Coffee' },
    { id: 'italian', name: 'Итальянская', icon: 'Pizza' },
  ];

  const dishes = [
    { id: 1, name: 'Стейк с овощами', category: 'business', price: 850, image: '🥩', rating: 4.9, calories: 520 },
    { id: 2, name: 'Салат Цезарь с курицей', category: 'healthy', price: 490, image: '🥗', rating: 4.8, calories: 380 },
    { id: 3, name: 'Роллы Филадельфия', category: 'asian', price: 680, image: '🍱', rating: 4.9, calories: 420 },
    { id: 4, name: 'Паста Карбонара', category: 'italian', price: 590, image: '🍝', rating: 4.7, calories: 650 },
    { id: 5, name: 'Поке с лососем', category: 'healthy', price: 720, image: '🥙', rating: 4.9, calories: 450 },
    { id: 6, name: 'Пицца Маргарита', category: 'italian', price: 650, image: '🍕', rating: 4.8, calories: 780 },
  ];

  const plans = [
    {
      name: 'Стартап',
      price: '15 000',
      description: 'Для небольших команд',
      features: ['До 10 человек', 'Базовое меню', 'Доставка 1 раз в день', 'Email поддержка'],
      popular: false,
    },
    {
      name: 'Бизнес',
      price: '35 000',
      description: 'Для растущих компаний',
      features: ['До 50 человек', 'Расширенное меню', 'Доставка 2 раза в день', 'Персональный менеджер', 'Индивидуальное меню'],
      popular: true,
    },
    {
      name: 'Корпорация',
      price: 'По запросу',
      description: 'Для крупного бизнеса',
      features: ['Неограниченно', 'Premium меню', 'Доставка по запросу', 'Выделенная команда', 'Кастомные решения', 'Аналитика питания'],
      popular: false,
    },
  ];

  const testimonials = [
    { name: 'Анна Петрова', company: 'Tech Solutions', text: 'Отличный сервис! Сотрудники довольны разнообразием и качеством. Производительность выросла на 15%.', rating: 5 },
    { name: 'Игорь Смирнов', company: 'Digital Agency', text: 'Забыли про проблемы с обедами. Всё приходит вовремя, всегда свежее и вкусное.', rating: 5 },
    { name: 'Мария Волкова', company: 'StartUp Inc', text: 'Лучшее решение для офиса! Команда счастлива, а мы экономим время на организацию питания.', rating: 5 },
  ];

  const faqs = [
    { q: 'Как оформить заказ?', a: 'Выберите подходящий тарифный план, заполните форму заявки, и наш менеджер свяжется с вами в течение часа для уточнения деталей и запуска доставки.' },
    { q: 'Какой минимальный заказ?', a: 'Минимальный заказ начинается от 10 человек. Для офисов с меньшим количеством сотрудников мы можем предложить индивидуальные условия.' },
    { q: 'Можно ли учесть диетические предпочтения?', a: 'Да, мы учитываем любые диетические ограничения: вегетарианство, веганство, аллергии, религиозные предпочтения. Просто укажите это при оформлении.' },
    { q: 'Как происходит доставка?', a: 'Доставка осуществляется в термоконтейнерах к указанному времени. Курьер привозит заказ прямо в офис и помогает с разгрузкой.' },
    { q: 'Можно ли изменить заказ?', a: 'Да, изменения можно внести до 18:00 предыдущего дня. Свяжитесь с вашим персональным менеджером или используйте личный кабинет.' },
    { q: 'Есть ли пробный период?', a: 'Да, мы предоставляем бесплатную пробную неделю для первых 10 заказов. Это позволит вашей команде оценить качество и сделать выбор.' },
  ];

  const filteredDishes = selectedCategory === 'all' 
    ? dishes 
    : dishes.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🍽️</span>
            <span className="text-2xl font-cormorant font-bold text-secondary">OfficeLunch</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#how" className="text-foreground hover:text-primary transition-colors">Как работает</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Премиум доставка обедов
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-secondary">
            Вкусные обеды<br />для вашей команды
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Забудьте о заботах с питанием сотрудников. Мы доставим свежие, полезные и вкусные обеды прямо в ваш офис.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="text-lg px-8">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Оформить заказ
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Компаний доверяют</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Обедов ежедневно</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Средний рейтинг</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Award" size={14} className="mr-1" />
              Преимущества
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы создали идеальное решение для корпоративного питания
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Timer', title: 'Экономия времени', desc: 'Сотрудники больше не тратят время на поиск обеда и очереди в кафе', color: 'text-primary' },
              { icon: 'ChefHat', title: 'Премиум качество', desc: 'Работаем только с проверенными поставщиками и используем свежие продукты', color: 'text-accent' },
              { icon: 'Leaf', title: 'Здоровое питание', desc: 'Сбалансированные блюда с подсчётом калорий и БЖУ для каждого сотрудника', color: 'text-primary' },
              { icon: 'Truck', title: 'Точная доставка', desc: 'Гарантируем доставку точно в срок в специальных термоконтейнерах', color: 'text-accent' },
              { icon: 'Sparkles', title: 'Разнообразие', desc: 'Более 200 блюд в меню, которое обновляется еженедельно', color: 'text-primary' },
              { icon: 'Shield', title: 'Контроль качества', desc: 'Все блюда проходят многоступенчатую проверку перед отправкой', color: 'text-accent' },
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon name={item.icon} size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Utensils" size={14} className="mr-1" />
              Меню
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Популярные блюда</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выбирайте из широкого ассортимента вкусных и полезных блюд
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="gap-2"
              >
                <Icon name={cat.icon} size={18} />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish, i) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl">
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
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Flame" size={16} />
                      {dish.calories} ккал
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      30 мин
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{dish.price} ₽</span>
                    <Button>
                      <Icon name="Plus" size={18} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Показать всё меню
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Zap" size={14} className="mr-1" />
              Процесс
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Как это работает</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Простой и понятный процесс заказа обедов для вашего офиса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', icon: 'ClipboardList', title: 'Выбор меню', desc: 'Выберите блюда из каталога или доверьтесь нашим рекомендациям' },
              { step: '02', icon: 'Calendar', title: 'Оформление', desc: 'Укажите количество порций и время доставки удобным способом' },
              { step: '03', icon: 'Truck', title: 'Доставка', desc: 'Получите свежие обеды точно к указанному времени в офис' },
              { step: '04', icon: 'ThumbsUp', title: 'Наслаждайтесь', desc: 'Команда довольна, а вы экономите время и деньги' },
            ].map((item, i) => (
              <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto relative z-10">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -z-0" />
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/5">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="DollarSign" size={14} className="mr-1" />
              Тарифы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Выберите свой план</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Гибкие тарифы для компаний любого размера
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <Card 
                key={i} 
                className={`relative overflow-hidden animate-fade-in-up ${plan.popular ? 'border-primary border-2 shadow-xl' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    {plan.price !== 'По запросу' && <span className="text-muted-foreground"> ₽/мес</span>}
                  </div>
                  <Button className="w-full mb-6" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.popular ? 'Начать сейчас' : 'Выбрать план'}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5" />
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

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="MessageCircle" size={14} className="mr-1" />
              Отзывы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Что говорят клиенты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 500 компаний доверяют нам питание своих сотрудников
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <Card key={i} className="animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={18} className="text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="HelpCircle" size={14} className="mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Частые вопросы</h2>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы о нашем сервисе
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-lg opacity-90">
              Оставьте заявку, и наш менеджер свяжется с вами в течение часа
            </p>
          </div>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Название компании" 
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div>
                  <Textarea 
                    placeholder="Комментарий (необязательно)" 
                    className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground min-h-[100px]"
                  />
                </div>
                <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

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
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнёры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Корпоративное питание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейтеринг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мероприятия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Индивидуальные меню</a></li>
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

export default Index;
