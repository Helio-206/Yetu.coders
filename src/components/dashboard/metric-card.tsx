import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { type DashboardMetric } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

function buildSparklinePath(values: number[], width: number, height: number) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = Math.max(max - min, 1);

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

function MetricVisual({ metric }: { metric: DashboardMetric }) {
  if (metric.visual.type === "sparkline") {
    const stroke = metric.visual.tone === "success" ? "var(--success)" : "var(--primary)";

    return (
      <svg viewBox="0 0 120 48" className="h-12 w-20 shrink-0">
        <path
          d={buildSparklinePath(metric.visual.values, 120, 48)}
          fill="none"
          stroke={stroke}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.12"
        />
        <path
          d={buildSparklinePath(metric.visual.values, 120, 48)}
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (metric.visual.type === "ring") {
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (metric.visual.value / 100) * circumference;

    return (
      <div className="relative grid size-20 place-items-center">
        <svg viewBox="0 0 64 64" className="size-20 -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="rgb(42 42 42)"
            strokeWidth="6"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-sm font-semibold text-primary">{metric.visual.value}%</span>
      </div>
    );
  }

  return (
    <div className="w-32 shrink-0">
      <div className="h-2 rounded-full bg-[#1c1c1c]">
        <div
          className="h-2 rounded-full bg-primary"
          style={{ width: `${metric.visual.value}%` }}
        />
      </div>
    </div>
  );
}

export function MetricCard({ metric }: { metric: DashboardMetric }) {
  return (
    <Card className="group min-h-[148px]">
      <CardContent className="flex h-full items-start justify-between gap-5 p-6">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-400">
              {metric.title}
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-semibold leading-tight tracking-tight text-foreground">
                {metric.value}
              </span>
              {metric.title === "Performance Média" ? (
                <span className="pb-1 text-xs text-gray-500">/100</span>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1 text-sm font-medium",
                metric.direction === "up" ? "text-success" : "text-destructive",
              )}
            >
              <ArrowUpRight className="size-4" />
              {metric.change}
            </span>
            <span className="text-xs text-gray-500">{metric.note}</span>
          </div>
        </div>

        <MetricVisual metric={metric} />
      </CardContent>
    </Card>
  );
}
