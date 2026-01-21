import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AboutUs = () => {
  const stats = [
    { value: '2020', label: 'Год основания' },
    { value: '500+', label: 'Компаний-клиентов' },
    { value: '50K+', label: 'Обедов ежедневно' },
    { value: '200+', label: 'Блюд в меню' },
  ];

  const values = [
    { icon: 'Heart', title: 'Качество', desc: 'Работаем только с проверенными поставщиками и свежими продуктами' },
    { icon: 'Users', title: 'Забота о людях', desc: 'Создаём комфортные условия для сотрудников и клиентов' },
    { icon: 'Leaf', title: 'Здоровье', desc: 'Сбалансированное питание и контроль пищевой ценности' },
    { icon: 'Zap', title: 'Инновации', desc: 'Используем современные технологии для улучшения сервиса' },
  ];

  const team = [
    { name: 'Алексей Иванов', role: 'Основатель и CEO', image: '👨‍💼' },
    { name: 'Елена Смирнова', role: 'Шеф-повар', image: '👩‍🍳' },
    { name: 'Дмитрий Петров', role: 'Директор по операциям', image: '👨‍💻' },
    { name: 'Мария Козлова', role: 'Руководитель отдела качества', image: '👩‍🔬' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="Info" size={14} className="mr-1" />
            О компании
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary animate-fade-in-up">
            Мы создаём вкусные<br />и полезные обеды
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            С 2020 года мы помогаем компаниям заботиться о питании своих сотрудников, доставляя свежие и качественные обеды прямо в офис
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, i) => (
              <Card key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-secondary">Наша история</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  OfficeLunch начался с простой идеи: сделать корпоративное питание удобным, вкусным и доступным. Основатели компании, сами работая в офисах, понимали, как важен качественный обед для продуктивности и настроения команды.
                </p>
                <p>
                  За четыре года мы выросли из небольшого стартапа в крупнейший сервис доставки корпоративных обедов в Москве. Сегодня мы обслуживаем более 500 компаний и доставляем более 50 000 обедов ежедневно.
                </p>
                <p>
                  Наша команда состоит из профессиональных поваров, технологов питания и логистов, которые каждый день работают над тем, чтобы ваш обед был идеальным.
                </p>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-9xl animate-fade-in">
              🍽️
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Наши ценности</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <Card key={i} className="text-center hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={value.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Наша команда</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <Card key={i} className="text-center hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="pt-8 pb-6">
                    <div className="text-7xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
