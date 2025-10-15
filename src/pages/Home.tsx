import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Home() {
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

      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-semibold mb-6 leading-tight">
              Хот-доги по-классике
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              16 точек в Новосибирске. Готовим свежие хот-доги с 1999 года.
            </p>
            <div className="flex gap-4">
              <Link to="/menu">
                <Button size="lg" className="text-base">
                  Смотреть меню
                </Button>
              </Link>
              <Link to="/locations">
                <Button size="lg" variant="outline" className="text-base">
                  Найти точку
                </Button>
              </Link>
            </div>
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
