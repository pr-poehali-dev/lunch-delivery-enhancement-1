import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Partners = () => {
  const partners = [
    { name: 'Фермерское хозяйство "Эко"', category: 'Поставщик', logo: '🌾' },
    { name: 'Мясокомбинат "Премиум"', category: 'Поставщик', logo: '🥩' },
    { name: 'Рыбный завод "Океан"', category: 'Поставщик', logo: '🐟' },
    { name: 'Пекарня "Свежесть"', category: 'Поставщик', logo: '🍞' },
  ];

  const benefits = [
    { icon: 'TrendingUp', title: 'Рост продаж', desc: 'Стабильный поток заказов' },
    { icon: 'Handshake', title: 'Долгосрочное сотрудничество', desc: 'Прозрачные условия' },
    { icon: 'Award', title: 'Продвижение бренда', desc: 'Реклама на нашей платформе' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            <Icon name="Handshake" size={14} className="mr-1" />
            Партнёрам
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">Станьте нашим партнёром</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Присоединяйтесь к экосистеме качественного корпоративного питания
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Преимущества партнёрства</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, i) => (
              <Card key={i} className="hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6 text-center">
                  <Icon name={benefit.icon} size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Наши партнёры</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {partners.map((partner, i) => (
              <Card key={i} className="hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="text-6xl mb-4">{partner.logo}</div>
                  <h3 className="font-bold mb-2">{partner.name}</h3>
                  <Badge variant="secondary">{partner.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Заявка на партнёрство</h3>
              <form className="space-y-4">
                <Input placeholder="Название компании" />
                <Input placeholder="Контактное лицо" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <Textarea placeholder="Расскажите о вашем предложении" className="min-h-[120px]" />
                <Button size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
