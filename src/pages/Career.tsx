import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Career = () => {
  const vacancies = [
    { title: 'Шеф-повар', department: 'Кухня', type: 'Полная занятость', location: 'Москва', salary: 'от 120 000 ₽' },
    { title: 'Менеджер по работе с клиентами', department: 'Продажи', type: 'Полная занятость', location: 'Москва', salary: 'от 80 000 ₽' },
    { title: 'Курьер-водитель', department: 'Логистика', type: 'Полная занятость', location: 'Москва', salary: 'от 60 000 ₽' },
    { title: 'Технолог питания', department: 'R&D', type: 'Полная занятость', location: 'Москва', salary: 'от 100 000 ₽' },
  ];

  const benefits = [
    { icon: 'Utensils', title: 'Питание', desc: 'Бесплатные обеды для всех сотрудников' },
    { icon: 'Heart', title: 'ДМС', desc: 'Медицинская страховка с первого дня' },
    { icon: 'GraduationCap', title: 'Обучение', desc: 'Оплата курсов и тренингов' },
    { icon: 'Palmtree', title: 'Отпуск', desc: '28 дней оплачиваемого отпуска' },
    { icon: 'TrendingUp', title: 'Карьера', desc: 'Прозрачная система роста' },
    { icon: 'Users', title: 'Команда', desc: 'Дружный коллектив профессионалов' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            <Icon name="Briefcase" size={14} className="mr-1" />
            Карьера
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">Работа в OfficeLunch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Присоединяйтесь к команде профессионалов и развивайтесь вместе с нами
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, i) => (
              <Card key={i} className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-8 pb-6 text-center">
                  <Icon name={benefit.icon} size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-8 text-secondary">Открытые вакансии</h2>
          <div className="space-y-4">
            {vacancies.map((vacancy, i) => (
              <Card key={i} className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{vacancy.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{vacancy.department}</Badge>
                        <Badge variant="outline">{vacancy.type}</Badge>
                        <Badge variant="outline">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {vacancy.location}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{vacancy.salary}</div>
                      </div>
                      <Button>
                        Откликнуться
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
