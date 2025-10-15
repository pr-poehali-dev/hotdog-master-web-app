import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { hotdogs, promos, homeSettings } from '@/data/seed';
import Icon from '@/components/ui/icon';

export default function Home() {
  const hits = hotdogs.filter((h) => h.isHit);
  const activePromo = promos.find((p) => p.isActive);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                {homeSettings.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl font-medium opacity-90">
                {homeSettings.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to={homeSettings.heroCTA1Href || '/menu'}>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-xl shadow-lg">
                    {homeSettings.heroCTA1Text || 'Заказать'}
                  </Button>
                </Link>
                <Link to={homeSettings.heroCTA2Href || '/locations'}>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-xl">
                    {homeSettings.heroCTA2Text || 'Адреса'}
                  </Button>
                </Link>
              </div>
              <a href={`tel:${homeSettings.phone}`} className="inline-flex items-center gap-2 text-lg font-semibold pt-4 hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={20} />
                {homeSettings.phone}
              </a>
            </div>
            
            <div className="hidden md:block">
              <img 
                src={homeSettings.heroImageUrl || 'https://v3b.fal.media/files/b/lion/TNIpRESLs-VhrNjsKMeSf_output.png'} 
                alt="Хот-дог Мастер"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {activePromo && (
        <section className="bg-secondary py-8">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-secondary to-accent border-none p-6 md:p-8 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">
                {activePromo.title}
              </h2>
              {activePromo.subtitle && (
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  {activePromo.subtitle}
                </p>
              )}
            </Card>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Хиты продаж</h2>
            <p className="text-lg text-muted-foreground">Самые популярные хот-доги</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hits.map((hotdog) => (
              <Card key={hotdog.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-8xl">🌭</span>
                  {hotdog.isHit && (
                    <Badge className="absolute top-4 right-4 bg-primary text-white font-bold">
                      ХИТ
                    </Badge>
                  )}
                  {hotdog.isSpicy && (
                    <Badge className="absolute top-4 left-4 bg-destructive text-white font-bold">
                      🌶️ ОСТРЫЙ
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2">{hotdog.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{hotdog.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-primary">{hotdog.price} ₽</span>
                    <Link to="/menu">
                      <Button className="bg-primary hover:bg-primary/90 font-bold rounded-xl">
                        Заказать
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 py-6 rounded-xl">
                Смотреть всё меню
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="font-medium">© 2025 Хот-дог Мастер. Вкусные хот-доги с 1999 года.</p>
          <a href={`tel:${homeSettings.phone}`} className="inline-flex items-center gap-2 mt-4 text-foreground font-semibold hover:text-primary transition-colors">
            <Icon name="Phone" size={18} />
            {homeSettings.phone}
          </a>
        </div>
      </footer>
    </div>
  );
}
