import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { distributionData } from "@/lib/dashboard-data";

export function ValueDistribution() {
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const companyOffset = circumference - (distributionData.companyShare / 100) * circumference;

  return (
    <Card>
      <CardHeader className="border-b border-border/70 pb-4">
        <CardTitle>Distribuição de Valor</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-6 pt-6 md:grid-cols-[220px_1fr] md:items-center">
        <div className="relative mx-auto grid size-55 place-items-center">
          <svg viewBox="0 0 220 220" className="size-55 -rotate-90">
            <circle cx="110" cy="110" r={radius} fill="none" stroke="rgb(42 42 42)" strokeWidth="22" />
            <circle
              cx="110"
              cy="110"
              r={radius}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="22"
              strokeDasharray={circumference}
              strokeDashoffset={companyOffset}
              strokeLinecap="butt"
            />
            <circle
              cx="110"
              cy="110"
              r={radius}
              fill="none"
              stroke="var(--success)"
              strokeWidth="22"
              strokeDasharray={`${(distributionData.teamShare / 100) * circumference} ${circumference}`}
              transform="rotate(108 110 110)"
            />
          </svg>

          <div className="absolute text-center">
            <p className="text-sm text-muted">Total</p>
            <p className="mt-2 text-[34px] font-semibold leading-none tracking-tight text-foreground">
              {distributionData.total}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <span className="mt-1 size-2.5 rounded-full bg-primary" />
            <div>
              <p className="text-sm text-muted">Património da Empresa ({distributionData.companyShare}%)</p>
              <p className="mt-1 text-xl font-semibold text-foreground">{distributionData.company}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 size-2.5 rounded-full bg-success" />
            <div>
              <p className="text-sm text-muted">Distribuível à Equipa ({distributionData.teamShare}%)</p>
              <p className="mt-1 text-xl font-semibold text-foreground">{distributionData.team}</p>
            </div>
          </div>

          <div className="border-t border-border pt-4 text-sm">
            <div className="flex items-center justify-between text-muted">
              <span>Total</span>
              <span className="font-medium text-foreground">{distributionData.total}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
