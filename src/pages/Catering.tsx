import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Catering = () => {
  const services = [
    { title: 'Корпоративы', desc: 'Банкетное меню для праздников', icon: 'PartyPopper', from: '3 000' },
    { title: 'Конференции', desc: 'Кофе-брейки и фуршеты', icon: 'Presentation', from: '2 500' },
    { title: 'Деловые встречи', desc: 'Изысканные блюда для VIP-гостей', icon: 'Briefcase', from: '5 000' },
    { title: 'Тренинги', desc: 'Питание для обучающих мероприятий', icon: 'GraduationCap', from: '1 800' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            <Icon name="Utensils" size={14} className="mr-1" />
            Кейтеринг
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">Кейтеринг для мероприятий</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Профессиональное обслуживание корпоративных событий любого масштаба
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <Badge variant="secondary">От {service.from} ₽/чел</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catering;
