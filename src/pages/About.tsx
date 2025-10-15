import { Link } from 'react-router-dom';

export default function About() {
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
              <Link to="/about" className="underline">
                О нас
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-8">О нас</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              С 1999 года мы готовим хот-доги для жителей Новосибирска. Начав с одного киоска
              на Центральном рынке, сегодня у нас 16 точек по всему городу.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Мы используем качественные ингредиенты, готовим быстро и всегда рады
              нашим гостям. Горячо, вкусно, по-классике — это про нас.
            </p>

            <div className="border-l-4 border-primary pl-6 my-8">
              <p className="text-lg">
                «Хот-дог Мастер» — это часть Новосибирска, которая согревает и радует уже 25 лет
              </p>
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
