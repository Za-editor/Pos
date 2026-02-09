import {
  CreditCard,
  Wallet,
  Star,
  Gift,
  Receipt,
  QrCode,
  Clock,
  Link2,
  Printer,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const payments = [
  { label: "Cash", icon: Wallet, active: true },
  { label: "Card", icon: CreditCard },
  { label: "Points", icon: Star },
  { label: "Deposit", icon: Receipt },
  { label: "Cheque", icon: Receipt },
  { label: "Gift Card", icon: Gift },
  { label: "Scan & Pay", icon: QrCode },
  { label: "Pay Later", icon: Clock },
  { label: "External", icon: Link2 },
  { label: "Split Bill", icon: Receipt },
];

export default function SelectPayment() {
  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-4xl shadow-sm">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Select Payment
      </h2>

      {/* Payment Options */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {payments.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-3 h-14 px-4 rounded-xl border text-sm font-medium transition-all
              ${
                item.active
                  ? "border-[#FE9F43] bg-orange-50 text-gray-900"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }
            `}
          >
            <item.icon className="h-5 w-5 text-gray-700" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between gap-4">
        <Button variant="outline" className="h-14 flex-1 text-gray-800 gap-2">
          <Printer className="h-5 w-5" />
          Print Order
        </Button>

        <Button className="h-14 flex-1 bg-[#092C4C] hover:bg-[#17426B] text-white gap-2">
          <ShoppingCart className="h-5 w-5" />
          Place Order
        </Button>
      </div>
    </div>
  );
}
