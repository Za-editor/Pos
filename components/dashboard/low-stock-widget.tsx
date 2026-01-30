import {  AlertTriangle, } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle,CardContent  } from "../ui/card";
import { Button,  } from "../ui/button";


const lowStock = [
  { name: "Vacuum Cleaner Robot", id: "#940004", stock: 21, img: "/img/a.png" },
  { name: "Dell XPS 13", id: "#665814", stock: 8, img: "/img/b.png" },
  {
    name: "KitchenAid Stand Mixer",
    id: "#325569",
    stock: 14,
    img: "/img/c.png",
  },
  {
    name: "Levi's Trucker Jacket",
    id: "#124588",
    stock: 12,
    img: "/img/d.png",
  },
  { name: "Lay's Classic", id: "#365586", stock: 10, img: "/img/e.png" },
];
export function LowStockProducts() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="bg-red-200 p-2 rounded-lg">
            <AlertTriangle className="text-red-600 w-4 h-4" />
          </div>
          <CardTitle className="text-base">Low Stock Products</CardTitle>
        </div>
        <Button variant="link" size="sm">
          View All
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        {lowStock.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-gray-200 pb-2"
          >
            <div className="flex gap-3 items-center">
              {/* <Image src={item.img} alt={item.name} className="h-10 w-10 rounded-lg" /> */}
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">ID : {item.id}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Instock</p>
              <p className="text-sm font-semibold text-red-600">{item.stock}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
