import {  Calendar, ShoppingCart } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";


const recentSales = [
  {
    name: "Apple Watch Series 9",
    category: "Electronics",
    price: 640,
    status: "Processing",
    statusColor: "bg-indigo-600",
    date: "Today",
    img: "/img/r1.png",
  },
  {
    name: "Gold Bracelet",
    category: "Fashion",
    price: 126,
    status: "Cancelled",
    statusColor: "bg-red-600",
    date: "Today",
    img: "/img/r2.png",
  },
  {
    name: "Parachute Down Duvet",
    category: "Health",
    price: 89,
    status: "Onhold",
    statusColor: "bg-cyan-600",
    date: "15 Jan 2025",
    img: "/img/r3.png",
  },
  {
    name: "YETI Rambler Tumbler",
    category: "Sports",
    price: 65,
    status: "Processing",
    statusColor: "bg-indigo-600",
    date: "12 Jan 2025",
    img: "/img/r4.png",
  },
  {
    name: "Osmo Genius Starter Kit",
    category: "Lifestyles",
    price: 87.56,
    status: "Completed",
    statusColor: "bg-emerald-600",
    date: "11 Jan 2025",
    img: "/img/r5.png",
  },
];
export function RecentSales() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded-lg">
            <ShoppingCart className="h-4 w-4 text-blue-600" />
          </div>
          <CardTitle className="text-base">Recent Sales</CardTitle>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" /> Today
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        {recentSales.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-gray-200 pb-2"
          >
            <div className="flex gap-3 items-center">
              {/* <Image src={item.img} alt={item.name} className="h-10 w-10 rounded-lg" /> */}
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {item.category} • ${item.price}
                </p>
              </div>
            </div>
            <div className="text-right space-y-1">
              <p className="text-xs text-gray-500">{item.date}</p>
              <span
                className={`text-xs px-2 py-0.5 rounded-md text-white ${item.statusColor}`}
              >
                • {item.status}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
