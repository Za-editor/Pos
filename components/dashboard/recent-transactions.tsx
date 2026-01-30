"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Flag, } from "lucide-react";


const transactions = [
  { d: "24 May 2025", n: "Andrea Willer", s: "Completed", t: "$4560" },
  { d: "23 May 2025", n: "Timothy Sands", s: "Completed", t: "$3569" },
  { d: "22 May 2025", n: "Bonnie Rodrigues", s: "Draft", t: "$2659" },
  { d: "21 May 2025", n: "Randy McCree", s: "Completed", t: "$2155" },
];

export function RecentTransactionsCard() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
            <Flag className="h-4 w-4" />
          </div>
          <CardTitle>Recent Transactions</CardTitle>
        </div>
        <Button variant="link" className="text-orange-600">
          View All
        </Button>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="sale">
          <TabsList className="mb-4">
            <TabsTrigger value="sale">Sale</TabsTrigger>
            <TabsTrigger value="purchase">Purchase</TabsTrigger>
            <TabsTrigger value="quotation">Quotation</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
          </TabsList>

          <TabsContent value="sale">
            <table className="w-full">
              <thead>
                <tr className="text-sm text-gray-500">
                  <th className="text-left py-2">Date</th>
                  <th className="text-left">Customer</th>
                  <th className="text-left">Status</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((x, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-3">{x.d}</td>
                    <td className="font-medium">{x.n}</td>
                    <td>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-md ${
                          x.s === "Completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        {x.s}
                      </span>
                    </td>
                    <td className="text-right font-semibold">{x.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
