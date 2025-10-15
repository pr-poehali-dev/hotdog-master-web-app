import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const items = [
  { id: '1', name: 'Классический', price: 120 },
  { id: '2', name: 'Острый', price: 130 },
  { id: '3', name: 'С сыром', price: 150 },
  { id: '4', name: 'Домашний', price: 140 },
  { id: '5', name: 'Чили-дог', price: 160 },
  { id: '6', name: 'Барбекю', price: 155 },
];

export default function Menu() {
  const { addToCart } = useCart();

  const handleAdd = (item: typeof items[0]) => {
    addToCart({ type: 'hotdog', refId: item.id, price: item.price, name: item.name });
    toast.success(`${item.name} добавлен в корзину`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold">
              Хот-дог Мастер
            </Link>
            <div className="flex gap-6 text-sm">
              <Link to="/menu" className="underline">
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
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-semibold mb-12">Меню</h1>

          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-6 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <p className="text-muted-foreground mt-1">{item.price} ₽</p>
                </div>
                <Button onClick={() => handleAdd(item)} variant="outline">
                  Добавить
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/cart">
              <Button className="w-full sm:w-auto">Перейти в корзину</Button>
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
