import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { stores } from '@/data/seed';
import Icon from '@/components/ui/icon';

export default function Locations() {
  const activeStores = stores.filter((s) => s.isActive);
  const inactiveStores = stores.filter((s) => !s.isActive);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-center">Наши адреса</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            16 точек в Новосибирске
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {activeStores.map((store) => (
              <Card key={store.id} className="p-6 hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-black mb-2">{store.name}</h3>
                    <div className="flex items-start gap-2 text-muted-foreground mb-2">
                      <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0" />
                      <p className="text-sm">{store.address}</p>
                    </div>
                    {store.hours && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" size={18} />
                        <p className="text-sm">{store.hours}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {store.phone && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-xl font-semibold"
                        asChild
                      >
                        <a href={`tel:${store.phone}`}>
                          <Icon name="Phone" size={16} className="mr-2" />
                          Позвонить
                        </a>
                      </Button>
                    )}
                    {store.mapLink && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 rounded-xl font-semibold"
                        asChild
                      >
                        <a href={store.mapLink} target="_blank" rel="noopener noreferrer">
                          <Icon name="Map" size={16} className="mr-2" />
                          На карте
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {inactiveStores.length > 0 && (
            <div>
              <h2 className="text-2xl font-black mb-4 text-muted-foreground">
                Временно не работают
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inactiveStores.map((store) => (
                  <Card key={store.id} className="p-6 opacity-60">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <h3 className="text-xl font-black">{store.name}</h3>
                          <Badge variant="secondary" className="font-bold">
                            Закрыто
                          </Badge>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0" />
                          <p className="text-sm">{store.address}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
