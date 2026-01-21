import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const categories = [
    { name: 'Все вопросы', icon: 'List', count: 24 },
    { name: 'Заказ', icon: 'ShoppingCart', count: 6 },
    { name: 'Доставка', icon: 'Truck', count: 5 },
    { name: 'Оплата', icon: 'CreditCard', count: 4 },
    { name: 'Меню', icon: 'Utensils', count: 5 },
    { name: 'Тарифы', icon: 'DollarSign', count: 4 },
  ];

  const faqs = [
    { q: 'Как оформить заказ?', a: 'Выберите подходящий тарифный план, заполните форму заявки, и наш менеджер свяжется с вами в течение часа для уточнения деталей и запуска доставки.', category: 'order' },
    { q: 'Какой минимальный заказ?', a: 'Минимальный заказ начинается от 10 человек. Для офисов с меньшим количеством сотрудников мы можем предложить индивидуальные условия.', category: 'order' },
    { q: 'Можно ли учесть диетические предпочтения?', a: 'Да, мы учитываем любые диетические ограничения: вегетарианство, веганство, аллергии, религиозные предпочтения. Просто укажите это при оформлении.', category: 'menu' },
    { q: 'Как происходит доставка?', a: 'Доставка осуществляется в термоконтейнерах к указанному времени. Курьер привозит заказ прямо в офис и помогает с разгрузкой.', category: 'delivery' },
    { q: 'Можно ли изменить заказ?', a: 'Да, изменения можно внести до 18:00 предыдущего дня. Свяжитесь с вашим персональным менеджером или используйте личный кабинет.', category: 'order' },
    { q: 'Есть ли пробный период?', a: 'Да, мы предоставляем бесплатную пробную неделю для первых 10 заказов. Это позволит вашей команде оценить качество и сделать выбор.', category: 'pricing' },
    { q: 'Какие способы оплаты доступны?', a: 'Мы принимаем оплату по счету, банковскими картами, через системы онлайн-платежей. Для корпоративных клиентов доступна постоплата.', category: 'payment' },
    { q: 'Что делать, если что-то не понравилось?', a: 'Свяжитесь с вашим менеджером в течение 2 часов после доставки. Мы вернем деньги или заменим блюдо в следующем заказе.', category: 'order' },
    { q: 'Доставляете ли вы в выходные?', a: 'Да, мы работаем 7 дней в неделю. Доставка в выходные доступна для всех тарифов по предварительной договоренности.', category: 'delivery' },
    { q: 'Как часто обновляется меню?', a: 'Меню обновляется еженедельно. Мы добавляем новые блюда и учитываем сезонность продуктов для максимальной свежести.', category: 'menu' },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="HelpCircle" size={14} className="mr-1" />
            FAQ
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary animate-fade-in-up">
            Частые вопросы
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Ответы на популярные вопросы о нашем сервисе
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((cat, i) => (
              <Card
                key={i}
                className="cursor-pointer hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <CardContent className="p-4 text-center">
                  <Icon name={cat.icon} size={28} className="mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
                  <Badge variant="secondary" className="text-xs">{cat.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border rounded-lg px-6 bg-white animate-fade-in"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Не нашли ответ?</h3>
              <p className="text-muted-foreground mb-6">
                Наша команда поддержки всегда готова помочь
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
