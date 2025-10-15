import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import Icon from '@/components/ui/icon';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-8xl">🛒</div>
              <h1 className="text-3xl font-black">Корзина пуста</h1>
              <p className="text-lg text-muted-foreground">
                Добавьте хот-доги из меню, чтобы продолжить
              </p>
              <Link to="/menu">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-xl">
                  Перейти в меню
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black mb-8">Корзина</h1>

          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <Card key={item.refId} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {item.type === 'hotdog' && '🌭'}
                    {item.type === 'drink' && '🥤'}
                    {item.type === 'addon' && '🧂'}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black">{item.name}</h3>
                    <p className="text-muted-foreground">{item.price} ₽</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.refId, item.qty - 1)}
                      className="rounded-lg"
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-8 text-center font-bold text-lg">{item.qty}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.refId, item.qty + 1)}
                      className="rounded-lg"
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-primary">
                      {item.price * item.qty} ₽
                    </p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromCart(item.refId)}
                    className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                  >
                    <Icon name="Trash2" size={20} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-muted">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-black">Итого:</span>
              <span className="text-4xl font-black text-primary">{getTotalPrice()} ₽</span>
            </div>
            <Link to="/checkout" className="block">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 font-bold text-lg py-6 rounded-xl">
                К оформлению
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
