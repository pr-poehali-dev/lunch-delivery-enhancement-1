import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ForBusiness = () => {
  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Повышение продуктивности',
      desc: 'Сотрудники не тратят время на поиск обеда и получают энергию для работы',
      stat: '+15% продуктивности',
    },
    {
      icon: 'Heart',
      title: 'Забота о здоровье',
      desc: 'Сбалансированное питание положительно влияет на здоровье и настроение команды',
      stat: '-30% больничных',
    },
    {
      icon: 'Users',
      title: 'Привлечение талантов',
      desc: 'Корпоративное питание — важное преимущество при найме сотрудников',
      stat: '+40% удержание',
    },
    {
      icon: 'Wallet',
      title: 'Экономия бюджета',
      desc: 'Фиксированная стоимость и корпоративные скидки помогают планировать расходы',
      stat: 'До 25% экономии',
    },
  ];

  const solutions = [
    {
      title: 'Ежедневные обеды',
      desc: 'Регулярная доставка обедов для всей команды',
      features: ['Гибкое меню', 'Учет предпочтений', 'Фиксированная стоимость'],
      icon: 'Calendar',
    },
    {
      title: 'Кофе-брейки',
      desc: 'Кофе, чай и снеки для энергии в течение дня',
      features: ['Свежая выпечка', 'Премиум кофе', 'Фрукты и снеки'],
      icon: 'Coffee',
    },
    {
      title: 'Корпоративные мероприятия',
      desc: 'Кейтеринг для ваших событий и встреч',
      features: ['Банкетное меню', 'Сервировка', 'Профессиональный персонал'],
      icon: 'PartyPopper',
    },
    {
      title: 'Индивидуальные программы',
      desc: 'Персональные решения под ваши задачи',
      features: ['Кастомное меню', 'Гибкий график', 'Выделенный менеджер'],
      icon: 'Settings',
    },
  ];

  const cases = [
    {
      company: 'Tech Solutions',
      employees: 120,
      industry: 'IT',
      result: 'Производительность выросла на 18%, сотрудники отмечают улучшение рабочей атмосферы',
      icon: '💻',
    },
    {
      company: 'Design Studio',
      employees: 45,
      industry: 'Дизайн',
      result: 'Команда стала более сплоченной благодаря совместным обедам, текучесть снизилась на 30%',
      icon: '🎨',
    },
    {
      company: 'Finance Corp',
      employees: 200,
      industry: 'Финансы',
      result: 'Экономия времени позволила увеличить количество встреч с клиентами на 25%',
      icon: '💼',
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6" variant="secondary">
                <Icon name="Building2" size={14} className="mr-1" />
                Для бизнеса
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
                Корпоративное питание нового уровня
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Увеличьте продуктивность команды и позаботьтесь о здоровье сотрудников с помощью качественного корпоративного питания
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" size={20} className="mr-2" />
                  Презентация
                </Button>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-9xl animate-fade-in">
              🏢
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Преимущества для бизнеса</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-3">{benefit.stat}</Badge>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Наши решения</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <Card
                key={i}
                className="hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={solution.icon} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Истории успеха</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.company}</h3>
                  <div className="flex gap-3 mb-4">
                    <Badge variant="outline">{item.industry}</Badge>
                    <Badge variant="secondary">{item.employees} сотрудников</Badge>
                  </div>
                  <p className="text-muted-foreground italic">"{item.result}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Получите персональное предложение</h2>
            <p className="text-lg opacity-90">
              Заполните форму, и наш менеджер свяжется с вами в течение часа
            </p>
          </div>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Ваше имя"
                    className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                  />
                  <Input
                    placeholder="Название компании"
                    className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Input
                  placeholder="Количество сотрудников"
                  className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                />
                <Textarea
                  placeholder="Расскажите о ваших задачах"
                  className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground min-h-[100px]"
                />
                <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
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

export default ForBusiness;
