import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const products = [
  {
    category: "Mobiles",
    name: "iPhone 14 64GB",
    price: "$15800",
    image: "/products/iphone.png",
  },
  {
    category: "Computer",
    name: "MacBook Pro",
    price: "$1000",
    image: "/products/macbook.png",
  },
  {
    category: "Watches",
    name: "Rolex Tribute V3",
    price: "$6800",
    image: "/products/watch.png",
  },
  {
    category: "Shoes",
    name: "Red Nike Angelo",
    price: "$8965",
    image: "/products/shoes.png",
  },
];

export default function PosProducts() {
  return (
    <div className="flex-1 px-6 py-4 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Welcome, Wesley Adrian
          </h2>
          <p className="text-xs text-gray-500">Mon, 24 December 2025</p>
        </div>

        <div className="flex items-center gap-3">
          <Input placeholder="Search Product" className="w-56 h-9 text-sm" />
          <Button className="h-9 bg-slate-900 text-white text-xs px-4">
            View All Brands
          </Button>
          <Button className="h-9 bg-orange-500 text-white text-xs px-4">
            Featured
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-4">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-3 hover:shadow-sm transition"
          >
            <div className="h-32 flex items-center justify-center bg-gray-50 rounded-lg mb-3">
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <p className="text-xs text-gray-500">{item.category}</p>
            <h3 className="text-sm font-semibold text-gray-800 truncate">
              {item.name}
            </h3>

            <div className="flex items-center justify-between mt-3">
              <span className="font-bold text-sm">{item.price}</span>

              <div className="flex items-center gap-2">
                <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Minus className="h-3 w-3" />
                </button>
                <span className="text-sm font-medium">0</span>
                <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
