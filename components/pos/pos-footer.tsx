import {
  PauseCircle,
  XCircle,
  CreditCard,
  Eye,
  RotateCcw,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PosFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 px-4 py-3">
      <div className="flex items-center justify-center gap-3">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white h-9 px-4 rounded-md text-xs font-semibold flex gap-1.5">
          <PauseCircle className="h-4 w-4" />
          Hold
        </Button>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 rounded-md text-xs font-semibold flex gap-1.5">
          <XCircle className="h-4 w-4" />
          Void
        </Button>

        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white h-9 px-4 rounded-md text-xs font-semibold flex gap-1.5">
          <CreditCard className="h-4 w-4" />
          Payment
        </Button>

        <Button className="bg-slate-900 hover:bg-slate-800 text-white h-9 px-4 rounded-md text-xs font-semibold flex gap-1.5">
          <Eye className="h-4 w-4" />
          View Orders
        </Button>

        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white h-9 px-4 rounded-md text-xs font-semibold flex gap-1.5">
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>

        <Button className="bg-red-600 hover:bg-red-700 text-white h-9 px-4 rounded-md text-xs font-semibold flex gap-1.5">
          <Receipt className="h-4 w-4" />
          Transaction
        </Button>
      </div>
    </footer>
  );
}
