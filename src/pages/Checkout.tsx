import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const locations = [
  'ТЦ Мега, ул. Ватутина 107',
  'Красный проспект 99',
  'Площадь Ленина 1',
  'ул. Кирова 44',
];

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || !location || !name) {
      toast.error('Заполните все поля');
      return;
    }

    const orderId = Math.random().toString(36).substring(2, 9).toUpperCase();
    clearCart();
    toast.success(`Заказ ${orderId} оформлен`);
    navigate('/order-success', { state: { orderId } });
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
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
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-semibold mb-8">Оформление</h1>

          <div className="space-y-8">
            <div className="border rounded-lg p-6">
              <h2 className="font-semibold mb-4">Ваш заказ</h2>
              <div className="space-y-2 mb-4">
                {cart.map((item) => (
                  <div key={item.refId} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>{item.price * item.qty} ₽</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 flex justify-between font-semibold">
                <span>Итого:</span>
                <span>{getTotalPrice()} ₽</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label htmlFor="location">Точка самовывоза</Label>
                <Select value={location} onValueChange={setLocation} required>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Выберите адрес" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Подтвердить заказ
              </Button>
            </form>
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
