import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activityItems } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const toneMap = {
  success: {
    icon: CheckCircle2,
    className: "bg-success/10 text-success",
  },
  info: {
    icon: Info,
    className: "bg-info/10 text-info",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-warning/10 text-warning",
  },
} as const;

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between border-b border-border/70 pb-4">
        <CardTitle>Atividades Recentes</CardTitle>
        <button
          type="button"
          className="rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-[#171717]"
        >
          Ver todas
        </button>
      </CardHeader>

      <CardContent className="space-y-5 pt-6">
        {activityItems.map((item) => {
          const tone = toneMap[item.tone];
          const Icon = tone.icon;

          return (
            <div key={`${item.person}-${item.time}`} className="flex items-start gap-4">
              <div className={cn("mt-1 grid size-8 place-items-center rounded-full", tone.className)}>
                <Icon className="size-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm leading-6 text-foreground">
                  <span className="font-medium">{item.person}</span> {item.action}
                </p>
                <p className="text-sm text-muted">Projeto: {item.project}</p>
              </div>

              <div className="shrink-0 text-right text-sm">
                {item.points ? (
                  <p className="font-medium text-success">{item.points}</p>
                ) : null}
                <p className="text-muted">{item.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
