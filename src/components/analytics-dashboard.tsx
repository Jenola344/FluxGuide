"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", value: 10400 },
  { month: "February", value: 11200 },
  { month: "March", value: 11800 },
  { month: "April", value: 11500 },
  { month: "May", value: 12100 },
  { month: "June", value: 12403 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--accent))",
  },
};

export default function AnalyticsDashboard() {
  return (
    <Card className="animate-fade-in-up" style={{animationDelay: '500ms'}}>
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
        <CardDescription>Tracking your portfolio value over the last 6 months.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart
            data={chartData}
            margin={{
              left: -20,
              right: 12,
              top: 10,
            }}
            accessibilityLayer
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
             <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `$${Number(value) / 1000}k`}
             />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value))}/>} />
            <defs>
                <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0.1}/>
                </linearGradient>
            </defs>
            <Area
              dataKey="value"
              type="natural"
              fill="url(#fillValue)"
              stroke="var(--color-value)"
              stackId="a"
              animationDuration={1500}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
