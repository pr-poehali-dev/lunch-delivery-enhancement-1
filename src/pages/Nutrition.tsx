import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Nutrition = () => {
  const programs = [
    { name: 'Похудение', calories: '1200-1500', icon: 'TrendingDown', color: 'text-blue-500' },
    { name: 'Набор массы', calories: '2500-3000', icon: 'TrendingUp', color: 'text-green-500' },
    { name: 'Поддержание', calories: '1800-2200', icon: 'Activity', color: 'text-purple-500' },
    { name: 'Вегетарианство', calories: '1600-2000', icon: 'Leaf', color: 'text-emerald-500' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            <Icon name="Apple" size={14} className="mr-1" />
            Программы питания
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">Персональные программы питания</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Достигайте своих целей с помощью сбалансированного питания от наших диетологов
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, i) => (
              <Card key={i} className="hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-8 pb-6 text-center">
                  <Icon name={program.icon} size={48} className={`mx-auto mb-4 ${program.color}`} />
                  <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                  <p className="text-muted-foreground mb-4">{program.calories} ккал/день</p>
                  <Button className="w-full">Выбрать программу</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nutrition;
