import AppContent from "@/components/app-content";
import { Card, CardContent } from "@/components/ui/card";
import useCartStore from "@/stores/useCartStore";

function Summary() {
  const { items } = useCartStore((state) => state);

  return (
    <AppContent showFilter={false}>
      <div className="px-10">
        <h1 className="text-2xl font-semibold">Resumen de la compra</h1>
        <div className="flex mt-10 gap-10">
          <div className="space-y-10 flex-6">
            {items?.map((item) => (
              <Card>
                <CardContent className="flex gap-10">
                  <img width={180} src={item.image} alt="" />
                  <div>
                    <h5 className="text-lg font-semibold">{item.name}</h5>
                    <p>{item.description}</p>
                    <p className="font-bold">{item.brand}</p>
                  </div>
                  <div>
                    <p className="text-xl">S/ {item.price}</p>
                  </div>
                  <div>
                    <p>{item.quantity}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex-2">
            <Card>
              <CardContent>
                <p>Total: ...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppContent>
  );
}

export default Summary;
