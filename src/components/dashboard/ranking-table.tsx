import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { rankingMembers } from "@/lib/dashboard-data";

export function RankingTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between border-b border-border/70 pb-4">
        <CardTitle>Ranking da Equipa</CardTitle>
        <Button variant="outline" size="sm" className="rounded-lg">
          Ver todos
        </Button>
      </CardHeader>

      <CardContent className="px-4 pb-4 pt-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-10">#</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>% Contribuição</TableHead>
              <TableHead className="text-right">Tendência</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankingMembers.map((member, index) => (
              <TableRow key={member.name} className="group">
                <TableCell className="text-muted">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="grid size-8 place-items-center rounded-full border border-border/60 bg-[#1c1c1c] text-xs text-foreground transition-colors group-hover:border-primary/25">
                      {member.name.charAt(0)}
                    </div>
                    <span className="font-medium text-foreground">{member.name}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-foreground">{member.score}</TableCell>
                <TableCell className="text-foreground">{member.contribution}</TableCell>
                <TableCell className="text-right">
                  {member.trend === "up" ? (
                    <ArrowUpRight className="ml-auto size-4 text-success" />
                  ) : (
                    <ArrowDownRight className="ml-auto size-4 text-destructive" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
