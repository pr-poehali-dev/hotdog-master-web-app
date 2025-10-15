import { useLocation, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function OrderSuccess() {
  const location = useLocation();
  const { orderId, storeName, pickupTime } = location.state || {};

  if (!orderId) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-black mb-4">Заказ не найден</h1>
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold rounded-xl">
                На главную
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 md:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Icon name="CheckCircle" size={48} className="text-green-600" />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">Спасибо за заказ!</h1>
              <p className="text-xl text-muted-foreground">
                Ваш заказ успешно оформлен
              </p>
            </div>

            <div className="bg-muted p-6 rounded-xl space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Icon name="Hash" size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Номер заказа</p>
                  <p className="text-2xl font-black">#{orderId}</p>
                </div>
              </div>

              {storeName && (
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес самовывоза</p>
                    <p className="font-bold">{storeName}</p>
                  </div>
                </div>
              )}

              {pickupTime && (
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Время</p>
                    <p className="font-bold">{pickupTime}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <p className="text-lg font-semibold">
                Мы свяжемся с вами по указанному номеру, как только заказ будет готов! 🌭
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/" className="flex-1">
                <Button size="lg" variant="outline" className="w-full font-bold rounded-xl">
                  На главную
                </Button>
              </Link>
              <Link to="/menu" className="flex-1">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 font-bold rounded-xl">
                  Заказать ещё
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
