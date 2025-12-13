import { useEffect, useState } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { getProducts } from "@/services/api";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUserStore from "@/stores/useStore";

function Home() {
  const [products, setProducts] = useState([]);

  const { user } = useUserStore();

  const handleGetProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <div className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            </div>
            <div className="pr-5 lg:pr-20">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center cursor-pointer">
                    <img src={user?.avatar} width={40} />
                    <div>
                      <p className="text-xs text-gray-400">
                        {user?.name} {user?.lastname}
                      </p>
                      <p className="text-xs text-gray-400">{user?.email}</p>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <h1 className="text-2xl">Productos</h1>
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
                      <p className="text-gray-600 text-lg">
                        S/ {product.price}
                      </p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p>No hay productos para mostrar.</p>
              )}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default Home;
