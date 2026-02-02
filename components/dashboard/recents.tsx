"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";




export const recentTransactions = [
  {
    company: "Stellar Dynamics",
    invoice: "#12457",
    date: "14 Jan 2025",
    plan: "Basic",
    amount: "+$245",
  },
  {
    company: "Quantum Nexus",
    invoice: "#65974",
    date: "10 Jan 2025",
    plan: "Enterprise",
    amount: "+$395",
  },
  {
    company: "Aurora Technologies",
    invoice: "#22457",
    date: "08 Jan 2025",
    plan: "Advanced",
    amount: "+$145",
  },
  {
    company: "TerraFusion Energy",
    invoice: "#43412",
    date: "06 Jan 2025",
    plan: "Enterprise",
    amount: "+$758",
  },
  {
    company: "Epicurean Delights",
    invoice: "#43567",
    date: "03 Jan 2025",
    plan: "Premium",
    amount: "+$977",
  },
];

export const recentlyRegistered = [
  {
    name: "Pitch",
    plan: "Basic (Monthly)",
    users: 150,
  },
  {
    name: "Initech",
    plan: "Enterprise (Yearly)",
    users: 200,
  },
  {
    name: "Umbrella Corp",
    plan: "Advanced (Monthly)",
    users: 108,
  },
  {
    name: "Capital Partners",
    plan: "Enterprise (Monthly)",
    users: 110,
  },
  {
    name: "Massive Dynamic",
    plan: "Premium (Yearly)",
    users: 120,
  },
];

export const expiredPlans = [
  {
    name: "Silicon Corp",
    expiredOn: "10 Apr 2025",
  },
  {
    name: "Hubspot",
    expiredOn: "12 Jun 2025",
  },
  {
    name: "Licon Industries",
    expiredOn: "16 Jun 2025",
  },
  {
    name: "TerraFusion Energy",
    expiredOn: "12 May 2025",
  },
  {
    name: "Epicurean Delights",
    expiredOn: "15 May 2025",
  },
];

export function RecentTransactionsCard() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Recent Transactions</CardTitle>
        <Button variant="link" className="px-0 text-sm">
          View All
        </Button>
      </CardHeader>

      <CardContent className="space-y-5">
        {recentTransactions.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold">
                {item.company[0]}
              </div>
              <div>
                <p className="font-medium">{item.company}</p>
                <p className="text-xs text-gray-500">
                  <span className="text-blue-600">{item.invoice}</span> ·{" "}
                  {item.date}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">{item.amount}</p>
              <p className="text-xs text-gray-500">{item.plan}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function RecentlyRegisteredCard() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Recently Registered</CardTitle>
        <Button variant="link" className="px-0 text-sm">
          View All
        </Button>
      </CardHeader>

      <CardContent className="space-y-5">
        {recentlyRegistered.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                {item.name[0]}
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">{item.plan}</p>
              </div>
            </div>
            <p className="text-sm font-medium">{item.users} Users</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function RecentPlanExpiredCard() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Recent Plan Expired</CardTitle>
        <Button variant="link" className="px-0 text-sm">
          View All
        </Button>
      </CardHeader>

      <CardContent className="space-y-5">
        {expiredPlans.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                {item.name[0]}
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  Expired : {item.expiredOn}
                </p>
              </div>
            </div>

            <Button variant="link" className="text-blue-600 px-0 text-sm">
              Send Reminder
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}