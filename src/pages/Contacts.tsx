import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67', subtitle: 'Ежедневно 9:00 - 21:00' },
    { icon: 'Mail', title: 'Email', value: 'hello@officelunch.ru', subtitle: 'Ответим в течение часа' },
    { icon: 'MapPin', title: 'Адрес', value: 'Москва, ул. Примерная, д. 1', subtitle: 'Офис работает 9:00 - 18:00' },
    { icon: 'MessageCircle', title: 'Поддержка', value: 'Онлайн-чат', subtitle: 'Круглосуточно' },
  ];

  const offices = [
    { city: 'Москва', address: 'ул. Примерная, д. 1', phone: '+7 (495) 123-45-67' },
    { city: 'Санкт-Петербург', address: 'Невский пр., д. 100', phone: '+7 (812) 123-45-67' },
    { city: 'Казань', address: 'ул. Баумана, д. 50', phone: '+7 (843) 123-45-67' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="MapPin" size={14} className="mr-1" />
            Контакты
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary animate-fade-in-up">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Мы всегда на связи и готовы ответить на ваши вопросы
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, i) => (
              <Card key={i} className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <p className="text-lg font-bold text-primary mb-1">{contact.value}</p>
                  <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Напишите нам</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Компания" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input type="tel" placeholder="Телефон" />
                      <Input type="email" placeholder="Email" />
                    </div>
                    <Textarea placeholder="Ваше сообщение" className="min-h-[120px]" />
                    <Button size="lg" className="w-full">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Наши офисы</h2>
              <div className="space-y-4">
                {offices.map((office, i) => (
                  <Card key={i} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                      <p className="text-muted-foreground mb-2 flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        {office.address}
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Icon name="Phone" size={16} />
                        {office.phone}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <Icon name="Clock" size={48} className="text-primary" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground text-lg">
                    Понедельник - Пятница: 9:00 - 21:00<br />
                    Суббота - Воскресенье: 10:00 - 18:00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
