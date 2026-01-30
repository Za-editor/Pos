"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";





const customers = [
  {
    name: "Carlos Curran",
    country: "USA",
    orders: 24,
    amount: "$8965",
    img: "/avatars/1.png",
  },
  {
    name: "Stan Gaunter",
    country: "UAE",
    orders: 22,
    amount: "$6985",
    img: "/avatars/2.png",
  },
  {
    name: "Richard Wilson",
    country: "Germany",
    orders: 14,
    amount: "$5366",
    img: "/avatars/3.png",
  },
  {
    name: "Mary Bronson",
    country: "Belgium",
    orders: 8,
    amount: "$4569",
    img: "/avatars/4.png",
  },
  {
    name: "Annie Tremblay",
    country: "Greenland",
    orders: 14,
    amount: "$35,698",
    img: "/avatars/5.png",
  },
];

export function TopCustomersCard() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Top Customers</CardTitle>
        <Button variant="link" className="text-sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {customers.map((c) => (
          <div key={c.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={c.img} />
                <AvatarFallback>{c.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-muted-foreground">
                  {c.country} • {c.orders} Orders
                </p>
              </div>
            </div>
            <p className="font-semibold">{c.amount}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
