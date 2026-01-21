import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BlogPost = () => {
  const relatedPosts = [
    { id: 2, title: 'Сбалансированное питание в офисе', image: '🥗' },
    { id: 3, title: 'Топ-10 блюд для продуктивности', image: '🧠' },
    { id: 4, title: 'Как организовать питание', image: '📋' },
  ];

  return (
    <Layout>
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <Icon name="ArrowLeft" size={20} />
            Назад к блогу
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">Бизнес</Badge>
              <span className="text-muted-foreground">15 января 2024</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <Icon name="Clock" size={14} />
                5 мин чтения
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              10 преимуществ корпоративного питания для бизнеса
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                А
              </div>
              <div>
                <div className="font-semibold">Анна Иванова</div>
                <div className="text-sm text-muted-foreground">Эксперт по корпоративному питанию</div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-9xl mb-12">
            📊
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Корпоративное питание — это не просто обеды для сотрудников. Это стратегическая инвестиция в развитие бизнеса, которая приносит измеримые результаты. Рассмотрим ключевые преимущества.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-secondary mt-12">1. Повышение продуктивности</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Сотрудники, получающие качественное питание, работают эффективнее. Исследования показывают рост продуктивности на 15-20% благодаря сбалансированному рациону.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-secondary mt-12">2. Экономия времени</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Вместо часового перерыва на поиск обеда сотрудники тратят 20-30 минут. Это дополнительные 2-3 часа рабочего времени в неделю на каждого человека.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-secondary mt-12">3. Забота о здоровье</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Сбалансированное питание снижает количество больничных на 30%. Здоровые сотрудники — это меньше расходов на замену и больше стабильности в работе.
            </p>

            <Card className="my-8 border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Lightbulb" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Факт</h3>
                    <p className="text-muted-foreground">
                      Компании с корпоративным питанием показывают на 25% меньшую текучесть кадров по сравнению с конкурентами.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-4 text-secondary mt-12">4. Привлечение талантов</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Корпоративное питание — важный бенефит при выборе работодателя. 67% кандидатов учитывают наличие питания при принятии решения о трудоустройстве.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-secondary mt-12">Выводы</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Инвестиции в корпоративное питание окупаются в течение 3-6 месяцев через повышение продуктивности, снижение текучести и улучшение атмосферы в коллективе.
            </p>
          </div>

          <div className="flex items-center gap-4 py-8 border-y">
            <Button variant="outline" className="gap-2">
              <Icon name="Heart" size={18} />
              124
            </Button>
            <Button variant="outline" className="gap-2">
              <Icon name="MessageCircle" size={18} />
              18
            </Button>
            <Button variant="outline" className="gap-2">
              <Icon name="Share2" size={18} />
              Поделиться
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Читайте также</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all">
                  <Link to={`/blog/${post.id}`}>
                    <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
                      {post.image}
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold line-clamp-2">{post.title}</h4>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
