import useCartStore from "@/stores/useCartStore";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Minus, Plus } from "lucide-react";

function ProductCard({ product }) {
  const { addItem, getItem } = useCartStore((state) => state);

  const productInStore = getItem(product.id);

  const handleAddItem = (product) => {
    addItem(product);
    toast.success(`El producto ${product.name} fue agregado al carrito.`);
  };

  return (
    <Card className="cursor-pointer" key={product.id}>
      <CardHeader className="flex justify-center items-center">
        <img src={product.image} width={200} alt="" />
      </CardHeader>
      <Separator />
      <CardContent className="space-y-3">
        <p className="uppercase font-semibold text-gray-500">{product.brand}</p>
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <p className="text-gray-600 text-lg mb-5">S/ {product.price}</p>
        {productInStore ? (
          <div className="w-full flex items-center">
            <Button className="flex-1">
              <Minus />
            </Button>
            <span className="flex-1 text-center font-semibold">
              {productInStore?.quantity}
            </span>
            <Button className="flex-1">
              <Plus />
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => handleAddItem(product)}
            className="w-full cursor-pointer"
          >
            Agregar al carro
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default ProductCard;
