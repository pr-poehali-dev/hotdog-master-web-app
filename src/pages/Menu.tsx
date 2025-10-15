import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { hotdogs, drinks, addons } from '@/data/seed';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

export default function Menu() {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const getQuantity = (id: string) => quantities[id] || 1;

  const updateQuantity = (id: string, delta: number) => {
    const current = getQuantity(id);
    const newQty = Math.max(1, current + delta);
    setQuantities((prev) => ({ ...prev, [id]: newQty }));
  };

  const handleAddToCart = (
    type: 'hotdog' | 'drink' | 'addon',
    id: string,
    name: string,
    price: number
  ) => {
    const qty = getQuantity(id);
    for (let i = 0; i < qty; i++) {
      addToCart({ type, refId: id, price, name });
    }
    toast.success(`${name} добавлен в корзину (${qty} шт.)`);
    setQuantities((prev) => ({ ...prev, [id]: 1 }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-center">Меню</h1>

          <Tabs defaultValue="hotdogs" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-8 h-auto rounded-xl">
              <TabsTrigger value="hotdogs" className="text-base md:text-lg font-bold py-3 rounded-xl">
                🌭 Хот-доги
              </TabsTrigger>
              <TabsTrigger value="drinks" className="text-base md:text-lg font-bold py-3 rounded-xl">
                🥤 Напитки
              </TabsTrigger>
              <TabsTrigger value="addons" className="text-base md:text-lg font-bold py-3 rounded-xl">
                🧂 Соусы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hotdogs">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotdogs.map((hotdog) => (
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
                          🌶️
                        </Badge>
                      )}
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-black mb-2">{hotdog.name}</h3>
                        <p className="text-muted-foreground text-sm">{hotdog.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-primary">{hotdog.price} ₽</span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(hotdog.id, -1)}
                            className="rounded-lg"
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-8 text-center font-bold">{getQuantity(hotdog.id)}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(hotdog.id, 1)}
                            className="rounded-lg"
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 font-bold rounded-xl"
                        onClick={() =>
                          handleAddToCart('hotdog', hotdog.id, hotdog.name, hotdog.price)
                        }
                        disabled={!hotdog.isAvailable}
                      >
                        В корзину
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drinks">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {drinks.map((drink) => (
                  <Card key={drink.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <span className="text-8xl">🥤</span>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-black mb-2">{drink.name}</h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-primary">{drink.price} ₽</span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(drink.id, -1)}
                            className="rounded-lg"
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-8 text-center font-bold">{getQuantity(drink.id)}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(drink.id, 1)}
                            className="rounded-lg"
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 font-bold rounded-xl"
                        onClick={() =>
                          handleAddToCart('drink', drink.id, drink.name, drink.price)
                        }
                        disabled={!drink.isAvailable}
                      >
                        В корзину
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="addons">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addons.map((addon) => (
                  <Card key={addon.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center">
                      <span className="text-6xl">🧂</span>
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="text-xl font-black mb-1">{addon.name}</h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-primary">
                          {addon.price === 0 ? 'Бесплатно' : `${addon.price} ₽`}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 font-bold rounded-xl"
                        onClick={() =>
                          handleAddToCart('addon', addon.id, addon.name, addon.price)
                        }
                        disabled={!addon.isAvailable}
                      >
                        +
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
