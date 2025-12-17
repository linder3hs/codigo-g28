import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

function Products({ products }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.length > 0 ? (
        products.map((product) => (
          <Card className="cursor-pointer">
            <CardHeader className="flex justify-center items-center">
              <img src={product.image} width={200} alt="" />
            </CardHeader>
            <Separator />
            <CardContent className="space-y-3">
              <p className="uppercase font-semibold text-gray-500">
                {product.brand}
              </p>
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-gray-600 text-lg">S/ {product.price}</p>
              <Button className="w-full cursor-pointer">
                Agregar al carro
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No hay productos para mostrar.</p>
      )}
    </div>
  );
}

export default Products;
