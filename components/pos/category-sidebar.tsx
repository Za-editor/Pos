import Image from "next/image";
import { cn } from "@/lib/utils";

const categories = [
  {
    label: "All",
    icon: "/icons/all.svg",
    active: true,
  },
  {
    label: "Headset",
    icon: "/icons/headset.png",
  },
  {
    label: "Shoes",
    icon: "/icons/shoes.png",
  },
  {
    label: "Mobiles",
    icon: "/icons/mobile.png",
  },
  {
    label: "Watches",
    icon: "/icons/watch.png",
  },
  {
    label: "Laptops",
    icon: "/icons/laptop.png",
  },
  {
    label: "Appliances",
    icon: "/icons/appliance.png",
  },
];

export default function CategorySidebar() {
  return (
    <aside className="w-28 bg-white border-r border-gray-200 py-4 flex flex-col items-center gap-3 h-full">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className={cn(
            "w-20 h-20 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs font-medium transition-all",
            cat.active
              ? "border-[#FE9F43] ring-1 ring-[#FE9F43]/40 text-[#FE9F43]"
              : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50",
          )}
        >
          <div className="h-8 w-8 relative">
            <Image
              src={cat.icon}
              alt={cat.label}
              fill
              className="object-contain"
            />
          </div>
          <span>{cat.label}</span>
        </button>
      ))}
    </aside>
  );
}
