import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/files/f031ab13-188c-437a-a603-602d9e518ff1.png" 
            alt="Хот-дог Мастер"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/menu" className="text-foreground hover:text-primary transition-colors font-medium">
            Меню
          </Link>
          <Link to="/locations" className="text-foreground hover:text-primary transition-colors font-medium">
            Адреса
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
            О нас
          </Link>
        </nav>

        <Link to="/cart" className="relative">
          <Icon name="ShoppingCart" size={24} className="text-foreground hover:text-primary transition-colors" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground">
              {totalItems}
            </Badge>
          )}
        </Link>
      </div>

      <div className="md:hidden border-t border-border">
        <nav className="container mx-auto px-4 py-2 flex justify-around">
          <Link to="/menu" className="text-xs text-foreground hover:text-primary transition-colors font-medium py-2">
            Меню
          </Link>
          <Link to="/locations" className="text-xs text-foreground hover:text-primary transition-colors font-medium py-2">
            Адреса
          </Link>
          <Link to="/about" className="text-xs text-foreground hover:text-primary transition-colors font-medium py-2">
            О нас
          </Link>
        </nav>
      </div>
    </header>
  );
};
