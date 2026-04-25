import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contributionData } from "@/lib/dashboard-data";

function toPath(values: number[], width: number, height: number, min: number, max: number) {
  const range = Math.max(max - min, 1);

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export function LineChartCard() {
  const contributionValues = contributionData.map((item) => item.contribution);
  const goalValues = contributionData.map((item) => item.goal);
  const allValues = [...contributionValues, ...goalValues];
  const min = Math.min(...allValues) - 10;
  const max = Math.max(...allValues) + 5;
  const contributionPath = toPath(contributionValues, 620, 220, min, max);
  const goalPath = toPath(goalValues, 620, 220, min, max);
  const highlightedPoint = contributionData[3];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-col gap-4 border-b border-border/70 pb-4 md:flex-row md:items-center md:justify-between">
        <CardTitle>Contribuição da Equipa</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-lg">
            Todos os projetos
            <ChevronDown className="size-4" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-lg">
            Últimos 30 dias
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative px-6 pb-5 pt-6">
          <div className="dashboard-grid group/chart relative h-[310px] rounded-lg bg-card">
            <div className="absolute inset-0 px-4 py-4">
              <svg viewBox="0 0 680 250" className="h-full w-full overflow-visible">
                <defs>
                  <filter id="contribution-line-glow" x="-10%" y="-20%" width="120%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {[0, 25, 50, 75, 100].map((tick) => {
                  const y = 250 - (tick / 100) * 250;
                  return (
                    <g key={tick}>
                      <line
                        x1="0"
                        x2="680"
                        y1={y}
                        y2={y}
                        stroke="rgb(42 42 42 / 0.7)"
                        strokeDasharray="4 8"
                      />
                      <text x="0" y={y - 6} fill="rgb(161 161 170)" fontSize="12">
                        {tick}
                      </text>
                    </g>
                  );
                })}

                <path
                  d={contributionPath}
                  transform="translate(30 12)"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.13"
                  filter="url(#contribution-line-glow)"
                />
                <path
                  d={contributionPath}
                  transform="translate(30 12)"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={goalPath}
                  transform="translate(30 12)"
                  fill="none"
                  stroke="rgb(115 115 115)"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {contributionValues.map((value, index) => {
                  const x = 30 + (index / (contributionValues.length - 1)) * 620;
                  const y = 12 + 220 - ((value - min) / Math.max(max - min, 1)) * 220;

                  return (
                    <g
                      key={contributionData[index]?.label}
                      className="group/node"
                    >
                      <circle cx={x} cy={y} r="12" fill="transparent" className="cursor-pointer" />
                      <circle
                        cx={x}
                        cy={y}
                        r={index === 3 ? 4.5 : 3.4}
                        fill="#111111"
                        stroke="var(--primary)"
                        strokeWidth="2"
                        className={
                          index === 3
                            ? "opacity-100"
                            : "opacity-0 transition-opacity duration-200 group-hover/chart:opacity-70 group-hover/node:opacity-100"
                        }
                      />
                    </g>
                  );
                })}

                {goalValues.map((value, index) => {
                  const x = 30 + (index / (goalValues.length - 1)) * 620;
                  const y = 12 + 220 - ((value - min) / Math.max(max - min, 1)) * 220;

                  return (
                    <g
                      key={`${contributionData[index]?.label}-goal`}
                      className="group/node"
                    >
                      <circle cx={x} cy={y} r="10" fill="transparent" className="cursor-pointer" />
                      <circle
                        cx={x}
                        cy={y}
                        r={3}
                        fill="#111111"
                        stroke="rgb(156 163 175)"
                        strokeWidth="1.8"
                        className={
                          index >= 3
                            ? "opacity-80"
                            : "opacity-0 transition-opacity duration-200 group-hover/chart:opacity-55 group-hover/node:opacity-90"
                        }
                      />
                    </g>
                  );
                })}

                {contributionData.map((point, index) => {
                  const x = 30 + (index / (contributionData.length - 1)) * 620;

                  return (
                    <text
                      key={point.label}
                      x={x}
                      y="248"
                      textAnchor="middle"
                      fill="rgb(161 161 170)"
                      fontSize="12"
                    >
                      {point.label}
                    </text>
                  );
                })}
              </svg>

              <div className="absolute left-[66%] top-[18%] rounded-lg border border-border bg-[#151515] px-3 py-2 text-xs shadow-none">
                <p className="text-muted">9 Mai</p>
                <p className="mt-1 text-foreground">Contribuição: {highlightedPoint.contribution}</p>
                <p className="text-muted">Meta: {highlightedPoint.goal}</p>
              </div>
            </div>

            <div className="absolute bottom-4 left-5 flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-5 rounded-full bg-primary" />
                <span>Contribuição da Equipa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-5 rounded-full bg-[#6b7280]" />
                <span>Meta</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
