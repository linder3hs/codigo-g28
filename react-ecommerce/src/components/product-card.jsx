import { useState } from "react";
import useCartStore from "@/stores/useCartStore";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Minus, Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  const { addItem, getItem, addQuantity, reduceQuantity, removeItem } =
    useCartStore((state) => state);

  const productInStore = getItem(product.id);

  const handleReduceQuantity = (productId) => {
    if (productInStore.quantity === 1) {
      setIsOpen(!isOpen);
    } else {
      reduceQuantity(productId);
    }
  };

  const handleDeleteConfirm = (productId) => {
    removeItem(productId);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Card className="cursor-pointer" key={product.id}>
        <CardHeader className="flex justify-center items-center">
          <img src={product.image} width={200} alt="" />
        </CardHeader>
        <Separator />
        <CardContent className="space-y-3">
          <p className="uppercase font-semibold text-gray-500">
            {product.brand}
          </p>
          <h4 className="text-lg font-semibold">{product.name}</h4>
          <p className="text-gray-600 text-lg mb-5">S/ {product.price}</p>
          {productInStore ? (
            <div className="w-full flex items-center">
              <Button
                className="flex-1"
                onClick={() => handleReduceQuantity(product.id)}
              >
                <Minus />
              </Button>
              <span className="flex-1 text-center font-semibold">
                {productInStore?.quantity}
              </span>
              <Button
                className="flex-1"
                onClick={() => addQuantity(product.id, product.stock)}
              >
                <Plus />
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => addItem(product)}
              className="w-full cursor-pointer"
            >
              Agregar al carro
            </Button>
          )}
        </CardContent>
      </Card>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Estas seguro de eliminar este producto?</DialogTitle>
            <DialogDescription>
              El producto <strong>{productInStore?.name}</strong>, se eliminara
              de tu carrito de compras.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button onClick={() => handleDeleteConfirm(product.id)}>
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProductCard;
