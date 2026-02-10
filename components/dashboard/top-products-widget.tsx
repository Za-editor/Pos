import { Calendar, Box, } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle,CardContent  } from "../ui/card";
import { Button,  } from "../ui/button";

const topSelling = [
  {
    name: "Charger Cable - Lighting",
    price: 187,
    sales: 247,
    change: "↑ 25%",
    trend: "up",
    img: "/images/chargerCable.png",
  },
  {
    name: "Yves Saint Eau De Parfum",
    price: 145,
    sales: 289,
    change: "↑ 25%",
    trend: "up",
    img: "/images/YvesSaint.png",
  },
  {
    name: "Apple Airpods 2",
    price: 458,
    sales: 300,
    change: "↑ 25%",
    trend: "up",
    img: "/images/Airpods2.png",
  },
  {
    name: "Vacuum Cleaner",
    price: 139,
    sales: 225,
    change: "↓ 21%",
    trend: "down",
    img: "/images/vacuumCleaner.png",
  },
  {
    name: "Samsung Galaxy S21 Fe 5g",
    price: 898,
    sales: 365,
    change: "↑ 25%",
    trend: "up",
    img: "/images/samsungGalaxy.png",
  },
];

export function TopSellingProducts() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="bg-pink-100 p-2 rounded-lg">
            <Box className="h-4 w-4 text-pink-600" />
          </div>
          <CardTitle className="text-base">Top Selling Products</CardTitle>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" /> Today
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        {topSelling.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-gray-200 pb-2"
          >
            <div className="flex gap-3 items-center">
              <Image
                src={item.img}
                alt={item.name}
                width={40}
                height={40}
                className="object-contain rounded-lg"
              />

              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  ${item.price} <span className="text-red-500">•</span>{" "}
                  {item.sales}+ Sales
                </p>
              </div>
            </div>
            <span
              className={`text-xs px-2 py-0.5 rounded-md ${item.trend === "up" ? "border-green-100 text-green-600 border" : "border border-red-100 text-red-600"}`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
