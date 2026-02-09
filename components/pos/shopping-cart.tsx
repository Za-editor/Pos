import { UserPlus, Scan, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function OrderList() {
  return (
    <aside className="w-full bg-white border-l border-gray-200 flex flex-col rounded-lg">
      {/* Header */}
      <div className="px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Order List</h2>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold bg-gray-100 px-2 py-0.5 rounded">
              #ORD123
            </span>
            <button className="text-red-500 text-sm">✕</button>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="px-4 py-4 border-b space-y-3">
        <h3 className="text-xs font-semibold text-gray-500">
          Customer Information
        </h3>

        <div className="flex gap-2">
          <select className="flex-1 h-9 border border-gray-200 rounded-md text-sm px-3">
            <option>Walk In Customer</option>
          </select>

          <Button size="icon" className="bg-emerald-500 hover:bg-emerald-600">
            <UserPlus className="h-4 w-4" />
          </Button>

          <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
            <Scan className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Order Details */}
      <div className="flex-1 px-4 py-6 border-b flex flex-col items-center justify-center text-center">
        <span className="text-xs font-semibold bg-gray-100 px-3 py-1 rounded mb-4">
          Items : 0
        </span>

        <div className="mb-3 text-4xl">🛒</div>
        <p className="text-sm text-gray-500">No Products Selected</p>
      </div>

      {/* Payment Summary */}
      <div className="px-4 py-4 space-y-3">
        <h3 className="text-xs font-semibold text-gray-500">Payment Summary</h3>

        {[
          { label: "Sub Total", value: "$0" },
          { label: "Shipping", value: "$0" },
          { label: "Tax", value: "$0", edit: true },
          { label: "Coupon", value: "$0", edit: true },
          { label: "Discount", value: "-$0", red: true },
          { label: "Roundoff", value: "0" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              {item.label}
              {item.edit && (
                <Edit2 className="h-3 w-3 text-gray-400 cursor-pointer" />
              )}
            </div>
            <span className={item.red ? "text-red-500" : "text-gray-900"}>
              {item.value}
            </span>
          </div>
        ))}

        <div className="pt-3 border-t flex items-center justify-between font-semibold">
          <span>Total Payable</span>
          <span>$0</span>
        </div>
      </div>
    </aside>
  );
}
