import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6" variant="secondary">
            <Icon name="Shield" size={14} className="mr-1" />
            Документы
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Политика конфиденциальности</h1>
          <p className="text-muted-foreground mb-8">Последнее обновление: 1 января 2024</p>

          <Card className="mb-8">
            <CardContent className="pt-8 prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground mb-6">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса OfficeLunch.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Собираемая информация</h2>
              <p className="text-muted-foreground mb-4">Мы собираем следующие данные:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>ФИО и контактная информация</li>
                <li>Данные о компании</li>
                <li>История заказов</li>
                <li>Информация об оплате</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Использование данных</h2>
              <p className="text-muted-foreground mb-6">
                Собранные данные используются для обработки заказов, улучшения качества сервиса и коммуникации с клиентами.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
              <p className="text-muted-foreground mb-6">
                Мы применяем современные технологии шифрования и защиты для обеспечения безопасности ваших данных.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Права пользователей</h2>
              <p className="text-muted-foreground mb-6">
                Вы имеете право запросить доступ к своим данным, их исправление или удаление в любое время.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Контакты</h2>
              <p className="text-muted-foreground">
                По вопросам конфиденциальности: privacy@officelunch.ru
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
