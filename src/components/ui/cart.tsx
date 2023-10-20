import { ShapesIcon, ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} /> Cátalogo
      </Badge>

      {/* renderizar os produtso */}
      {products.map((product) => (
      <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
