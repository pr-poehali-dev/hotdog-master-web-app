import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const locations = [
  { id: '1', name: 'ТЦ Мега', address: 'ул. Ватутина 107', phone: '+7 (383) 222-33-44' },
  { id: '2', name: 'Красный проспект', address: 'Красный проспект 99', phone: '+7 (383) 222-33-45' },
  { id: '3', name: 'Площадь Ленина', address: 'Площадь Ленина 1', phone: '+7 (383) 222-33-46' },
  { id: '4', name: 'Кирова', address: 'ул. Кирова 44', phone: '+7 (383) 222-33-47' },
];

export default function Locations() {
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
              <Link to="/locations" className="underline">
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
          <h1 className="text-4xl font-semibold mb-12">Адреса</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div key={location.id} className="border rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">{location.name}</h3>
                  <p className="text-muted-foreground flex items-start gap-2">
                    <Icon name="MapPin" size={18} className="mt-0.5" />
                    {location.address}
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={`tel:${location.phone}`}>
                    <Icon name="Phone" size={16} className="mr-2" />
                    {location.phone}
                  </a>
                </Button>
              </div>
            ))}
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
