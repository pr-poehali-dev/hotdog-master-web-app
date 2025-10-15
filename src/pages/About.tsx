import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-center">О нас</h1>

          <Card className="p-8 md:p-12 space-y-6">
            <div>
              <h2 className="text-3xl font-black mb-4 text-primary">Хот-дог Мастер</h2>
              <p className="text-lg leading-relaxed">
                С 1999 года мы радуем жителей Новосибирска вкусными и сытными хот-догами. 
                Начав с одного киоска на Центральном рынке, сегодня мы выросли до сети из 
                16 точек по всему городу.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-3">Наша философия</h3>
              <p className="text-lg leading-relaxed">
                Горячо. Быстро. По-классике. Это не просто слоган — это наш подход к работе. 
                Мы используем только качественные ингредиенты, готовим на заказ и всегда 
                стремимся сделать ваш день немного вкуснее.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-3">Почему выбирают нас?</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌭</span>
                  <span>Молочные сосиски высшего качества</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <span>Быстрое обслуживание — готовим за 2-3 минуты</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <span>Доступные цены без потери качества</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <span>16 точек — всегда найдётся рядом с вами</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <span>25+ лет опыта и традиций</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <p className="text-lg font-semibold text-center">
                "Хот-дог Мастер" — это не просто фастфуд, это частичка Новосибирска, 
                которая согревает и насыщает уже более 25 лет! 🌭
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
