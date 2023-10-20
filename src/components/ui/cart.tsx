import { ShapesIcon, ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computedProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} /> Cátalogo
      </Badge>

      {/* renderizar os produtso */}
      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            product={computedProductTotalPrice(product as any) as any}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
