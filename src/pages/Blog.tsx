import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '10 преимуществ корпоративного питания для бизнеса',
      excerpt: 'Как качественное питание влияет на продуктивность сотрудников и развитие компании',
      category: 'Бизнес',
      date: '15 января 2024',
      readTime: '5 мин',
      image: '📊',
    },
    {
      id: 2,
      title: 'Сбалансированное питание: руководство для офисных работников',
      excerpt: 'Простые правила здорового питания, которые помогут оставаться энергичным весь день',
      category: 'Здоровье',
      date: '12 января 2024',
      readTime: '7 мин',
      image: '🥗',
    },
    {
      id: 3,
      title: 'Топ-10 блюд для повышения продуктивности',
      excerpt: 'Какие продукты помогают мозгу работать эффективнее и улучшают концентрацию',
      category: 'Питание',
      date: '8 января 2024',
      readTime: '6 мин',
      image: '🧠',
    },
    {
      id: 4,
      title: 'Как организовать питание в офисе: пошаговое руководство',
      excerpt: 'Практические советы HR-менеджерам по внедрению корпоративного питания',
      category: 'HR',
      date: '5 января 2024',
      readTime: '8 мин',
      image: '📋',
    },
    {
      id: 5,
      title: 'Тренды в корпоративном питании 2024',
      excerpt: 'Что будет популярно в этом году: от эко-упаковки до персонализированных меню',
      category: 'Тренды',
      date: '2 января 2024',
      readTime: '5 мин',
      image: '🔮',
    },
    {
      id: 6,
      title: 'Вегетарианское меню в офисе: как угодить всем',
      excerpt: 'Советы по созданию разнообразного меню для сотрудников с разными предпочтениями',
      category: 'Меню',
      date: '28 декабря 2023',
      readTime: '6 мин',
      image: '🌱',
    },
  ];

  const categories = ['Все статьи', 'Бизнес', 'Здоровье', 'Питание', 'HR', 'Тренды', 'Меню'];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="BookOpen" size={14} className="mr-1" />
            Блог
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary animate-fade-in-up">
            Статьи и новости
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Полезные материалы о корпоративном питании, здоровье и продуктивности
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => (
              <Button key={i} variant={i === 0 ? 'default' : 'outline'}>
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                    {post.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {post.readTime} чтения
                      </span>
                      <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Читать
                        <Icon name="ArrowRight" size={16} />
                      </span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Загрузить ещё статьи
              <Icon name="ChevronDown" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
