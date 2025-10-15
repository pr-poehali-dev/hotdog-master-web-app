import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import Icon from '@/components/ui/icon';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
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

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <p className="text-4xl">🛒</p>
            <h1 className="text-2xl font-semibold">Корзина пуста</h1>
            <Link to="/menu">
              <Button>Перейти в меню</Button>
            </Link>
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

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-8">Корзина</h1>

          <div className="space-y-3 mb-8">
            {cart.map((item) => (
              <div
                key={item.refId}
                className="flex items-center gap-4 p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(item.refId, item.qty - 1)}
                    className="h-8 w-8"
                  >
                    <Icon name="Minus" size={14} />
                  </Button>
                  <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(item.refId, item.qty + 1)}
                    className="h-8 w-8"
                  >
                    <Icon name="Plus" size={14} />
                  </Button>
                </div>
                <div className="text-right min-w-[80px]">
                  <p className="font-semibold">{item.price * item.qty} ₽</p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeFromCart(item.refId)}
                  className="h-8 w-8"
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            ))}
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center justify-between text-xl">
              <span className="font-semibold">Итого:</span>
              <span className="font-semibold">{getTotalPrice()} ₽</span>
            </div>
            <Link to="/checkout" className="block">
              <Button className="w-full" size="lg">
                Оформить заказ
              </Button>
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
