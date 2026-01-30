"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const categoryData = [
  { name: "Electronics", value: 698, color: "#FF9F43" },
  { name: "Sports", value: 545, color: "#E8590C" },
  { name: "Lifestyles", value: 456, color: "#0B2E4F" },
];

export function TopCategoriesCard() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Top Categories</CardTitle>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" /> Weekly
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-6 items-center">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
              >
                {categoryData.map((c, i) => (
                  <Cell key={i} fill={c.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {categoryData.map((c) => (
            <div key={c.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
                <p className="text-sm text-muted-foreground">{c.name}</p>
              </div>
              <p className="font-semibold">{c.value} Sales</p>
            </div>
          ))}
          <div className="border rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Total Number Of Categories
              </span>
              <span className="font-semibold">698</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Total Number Of Products
              </span>
              <span className="font-semibold">7899</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
