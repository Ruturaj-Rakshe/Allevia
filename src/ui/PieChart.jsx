"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { Specialist: "Neurology", Patients: 275, fill: "Blue" },
  { Specialist: "Orthopedics", Patients: 200, fill: "Red" },
  { Specialist: "Cardiology", Patients: 287, fill: "Green" },
  { Specialist: "Radiology", Patients: 173, fill: "Purple" },
  { Specialist: "Dentistry", Patients: 190, fill: "Orange" },
];

const chartConfig = {
  Patients: {
    label: "Patients",
  },
  chrome: {
    label: "Neurology",
    color: "Blue",
  },
  safari: {
    label: "Orthopedics",
    color: "Red",
  },
  firefox: {
    label: "Cardiology",
    color: "Green",
  },
  edge: {
    label: "Radiology",
    color: "Purple",
  },
  other: {
    label: "Dentistry",
    color: "Orange",
  },
};

export default function Component() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.Patients, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          Patient Visits by Specialty: Most Visited Departments
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="Patients"
              nameKey="Specialist"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Patients
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Patients for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
