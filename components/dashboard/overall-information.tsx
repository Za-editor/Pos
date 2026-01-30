"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Info, Users, UserCheck, ShoppingCart, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const customerData = [
  { name: "Return", value: 3500, color: "#0E9384" },
  { name: "First Time", value: 5500, color: "#E04F16" },
];

export default function OverallInformationCard() {
  return (
    <Card className="rounded-2xl">
      {/* Header */}
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
          <Info className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg">Overall Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-4">
          <StatBox
            icon={<UserCheck className="text-blue-600" />}
            label="Suppliers"
            value="6987"
          />
          <StatBox
            icon={<Users className="text-orange-500" />}
            label="Customer"
            value="4896"
          />
          <StatBox
            icon={<ShoppingCart className="text-emerald-600" />}
            label="Orders"
            value="487"
          />
        </div>

        <div className="border-t" />

        {/* Customers Overview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Customers Overview</h3>
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" /> Today
            </Button>
          </div>

          <div className="flex gap-6 items-center">
            {/* Chart */}
            <div className="w-35 h-35">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerData}
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {customerData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Metrics */}
            <div className="flex gap-6">
              <Metric
                value="5.5K"
                label="First Time"
                color="text-orange-600"
                bg="bg-orange-100"
                percent="25%"
              />

              <div className="w-px bg-gray-200" />

              <Metric
                value="3.5K"
                label="Return"
                color="text-emerald-600"
                bg="bg-emerald-100"
                percent="21%"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatBox({ icon, label, value }: any) {
  return (
    <div className="border rounded-xl p-4 text-center space-y-2">
      <div className="flex justify-center">{icon}</div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

function Metric({ value, label, percent, color, bg }: any) {
  return (
    <div className="space-y-2">
      <p className="text-2xl font-semibold">{value}</p>
      <p className={`text-sm ${color}`}>{label}</p>
      <span
        className={`inline-block text-xs px-2 py-0.5 rounded-md ${color} ${bg}`}
      >
        ↑ {percent}
      </span>
    </div>
  );
}
