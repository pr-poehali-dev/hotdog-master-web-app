import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { stores } from '@/data/seed';
import { toast } from 'sonner';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [phone, setPhone] = useState('');
  const [storeId, setStoreId] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [note, setNote] = useState('');

  const activeStores = stores.filter((s) => s.isActive);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || !storeId || !pickupTime) {
      toast.error('Заполните все обязательные поля');
      return;
    }

    const orderId = Math.random().toString(36).substring(2, 9).toUpperCase();
    const store = activeStores.find((s) => s.id === storeId);

    clearCart();
    toast.success(`Заказ #${orderId} оформлен!`);

    navigate('/order-success', {
      state: { orderId, storeName: store?.name, pickupTime },
    });
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const times = [
    'Как можно скорее',
    'Через 15 минут',
    'Через 30 минут',
    'Через 1 час',
    'Через 2 часа',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black mb-8">Оформление заказа</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-black mb-6">Ваш заказ</h2>
              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.refId} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span className="font-bold">{item.price * item.qty} ₽</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black">Итого:</span>
                  <span className="text-3xl font-black text-primary">{getTotalPrice()} ₽</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-black mb-6">Данные для самовывоза</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="font-bold">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="store" className="font-bold">
                    Точка самовывоза *
                  </Label>
                  <Select value={storeId} onValueChange={setStoreId} required>
                    <SelectTrigger id="store" className="rounded-xl">
                      <SelectValue placeholder="Выберите адрес" />
                    </SelectTrigger>
                    <SelectContent>
                      {activeStores.map((store) => (
                        <SelectItem key={store.id} value={store.id}>
                          {store.address}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="time" className="font-bold">
                    Время самовывоза *
                  </Label>
                  <Select value={pickupTime} onValueChange={setPickupTime} required>
                    <SelectTrigger id="time" className="rounded-xl">
                      <SelectValue placeholder="Когда заберёте?" />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="note" className="font-bold">
                    Комментарий к заказу
                  </Label>
                  <Textarea
                    id="note"
                    placeholder="Например: без лука, добавить больше соуса..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 font-bold text-lg py-6 rounded-xl"
                >
                  Подтвердить заказ
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
