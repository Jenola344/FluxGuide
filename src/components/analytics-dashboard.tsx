
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

const initialChartData = [
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
  const [chartData, setChartData] = useState(initialChartData);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const lastValue = prevData[prevData.length - 1].value;
        const newValue = lastValue + (Math.random() - 0.5) * 200;
        const newData = [...prevData.slice(1), { month: "Now", value: newValue }];
        
        // This is a bit of a trick to make the chart look like it's updating continuously
        const updatedData = newData.map((d, i) => {
            if (i === newData.length - 2) return {...d, month: 'June'};
            if (i < prevData.length -1 ) return initialChartData[i+1];
            return d;
        });
        
        // Remap months for display
        const displayData = updatedData.map((d,i) => {
          if (i === 0) return {...d, month: 'February'};
          if (i === 1) return {...d, month: 'March'};
          if (i === 2) return {...d, month: 'April'};
          if (i === 3) return {...d, month: 'May'};
          if (i === 4) return {...d, month: 'June'};
          if (i === 5) return {...d, month: 'Now'};
          return d;
        });


        return displayData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="animate-fade-in-up" style={{animationDelay: '500ms'}}>
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
        <CardDescription>Live tracking of your portfolio value.</CardDescription>
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
            />
             <YAxis
                domain={['dataMin - 500', 'dataMax + 500']}
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
              animationDuration={1000}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
