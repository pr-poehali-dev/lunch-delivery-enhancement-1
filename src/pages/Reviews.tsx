import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Reviews = () => {
  const [filter, setFilter] = useState('all');

  const reviews = [
    { name: 'Анна Петрова', company: 'Tech Solutions', text: 'Отличный сервис! Сотрудники довольны разнообразием и качеством. Производительность выросла на 15%.', rating: 5, category: 'business', date: '2 дня назад' },
    { name: 'Игорь Смирнов', company: 'Digital Agency', text: 'Забыли про проблемы с обедами. Всё приходит вовремя, всегда свежее и вкусное.', rating: 5, category: 'delivery', date: '5 дней назад' },
    { name: 'Мария Волкова', company: 'StartUp Inc', text: 'Лучшее решение для офиса! Команда счастлива, а мы экономим время на организацию питания.', rating: 5, category: 'quality', date: '1 неделю назад' },
    { name: 'Дмитрий Козлов', company: 'Finance Corp', text: 'Менеджер всегда на связи, учитывают все пожелания. Очень гибкий подход.', rating: 5, category: 'service', date: '2 недели назад' },
    { name: 'Елена Новикова', company: 'Design Studio', text: 'Меню разнообразное, всегда есть вегетарианские опции. Команда довольна!', rating: 5, category: 'menu', date: '3 недели назад' },
    { name: 'Алексей Морозов', company: 'IT Company', text: 'Цена соответствует качеству. Сотрудники перестали уходить на обед, стали продуктивнее.', rating: 5, category: 'business', date: '1 месяц назад' },
  ];

  const stats = [
    { value: '4.9', label: 'Средний рейтинг', icon: 'Star' },
    { value: '1,200+', label: 'Отзывов', icon: 'MessageCircle' },
    { value: '98%', label: 'Рекомендуют', icon: 'ThumbsUp' },
    { value: '500+', label: 'Довольных компаний', icon: 'Building2' },
  ];

  const categories = [
    { id: 'all', name: 'Все отзывы', icon: 'List' },
    { id: 'quality', name: 'Качество', icon: 'Award' },
    { id: 'delivery', name: 'Доставка', icon: 'Truck' },
    { id: 'service', name: 'Сервис', icon: 'Headphones' },
    { id: 'menu', name: 'Меню', icon: 'Utensils' },
    { id: 'business', name: 'Бизнес-эффект', icon: 'TrendingUp' },
  ];

  const filteredReviews = filter === 'all' ? reviews : reviews.filter(r => r.category === filter);

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="MessageCircle" size={14} className="mr-1" />
            Отзывы клиентов
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary animate-fade-in-up">
            Что говорят наши клиенты
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Более 500 компаний доверяют нам питание своих сотрудников
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <Card key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-6 pb-6">
                  <Icon name={stat.icon} size={32} className="mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? 'default' : 'outline'}
                onClick={() => setFilter(cat.id)}
                className="gap-2"
              >
                <Icon name={cat.icon} size={16} />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, i) => (
              <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={18} className="text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic line-clamp-4">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.company}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-3">{review.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Загрузить ещё отзывы
              <Icon name="ChevronDown" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Поделитесь своим опытом</h2>
          <p className="text-lg opacity-90 mb-8">
            Ваше мнение помогает нам становиться лучше
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            <Icon name="Edit" size={20} className="mr-2" />
            Написать отзыв
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
