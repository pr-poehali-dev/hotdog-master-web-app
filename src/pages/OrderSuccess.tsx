import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function OrderSuccess() {
  const location = useLocation();
  const { orderId } = location.state || {};

  if (!orderId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">Заказ не найден</h1>
          <Link to="/">
            <Button>На главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold">
              Хот-дог Мастер
            </Link>
            <div className="flex gap-6 text-sm">
              <Link to="/menu" className="hover:underline">
                Меню
              </Link>
              <Link to="/locations" className="hover:underline">
                Адреса
              </Link>
              <Link to="/about" className="hover:underline">
                О нас
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4 max-w-lg text-center space-y-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Icon name="Check" size={32} className="text-primary" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Заказ оформлен</h1>
            <p className="text-muted-foreground">Номер заказа: {orderId}</p>
          </div>

          <p className="text-muted-foreground">
            Мы свяжемся с вами по указанному номеру, как только заказ будет готов
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/" className="flex-1">
              <Button variant="outline" className="w-full">
                На главную
              </Button>
            </Link>
            <Link to="/menu" className="flex-1">
              <Button className="w-full">Заказать ещё</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 Хот-дог Мастер
        </div>
      </footer>
    </div>
  );
}
