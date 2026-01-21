import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const TermsOfService = () => {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6" variant="secondary">
            <Icon name="FileText" size={14} className="mr-1" />
            Документы
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Условия использования</h1>
          <p className="text-muted-foreground mb-8">Последнее обновление: 1 января 2024</p>

          <Card className="mb-8">
            <CardContent className="pt-8 prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Общие условия</h2>
              <p className="text-muted-foreground mb-6">
                Используя сервис OfficeLunch, вы принимаете настоящие Условия использования.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Услуги</h2>
              <p className="text-muted-foreground mb-6">
                Мы предоставляем услуги доставки корпоративного питания в соответствии с выбранным тарифным планом.
              </p>

              <h2 className="text-2xl font-bold mb-4">3. Заказы и оплата</h2>
              <p className="text-muted-foreground mb-4">Правила оформления заказов:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Заказы принимаются до 18:00 предыдущего дня</li>
                <li>Минимальный заказ — 10 порций</li>
                <li>Оплата производится по согласованному графику</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Доставка</h2>
              <p className="text-muted-foreground mb-6">
                Доставка осуществляется в рабочие дни с 11:00 до 14:00 по указанному адресу.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Отмена и возврат</h2>
              <p className="text-muted-foreground mb-6">
                Отмена заказа возможна не позднее чем за 24 часа до доставки. Возврат средств осуществляется в течение 7 рабочих дней.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Ответственность</h2>
              <p className="text-muted-foreground mb-6">
                Мы гарантируем качество продуктов и соблюдение сроков доставки согласно договору.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Контакты</h2>
              <p className="text-muted-foreground">
                По вопросам условий использования: legal@officelunch.ru
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
