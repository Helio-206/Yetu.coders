export type TrendDirection = "up" | "down";

export type MetricVisual =
  | {
      type: "sparkline";
      tone: "primary" | "success";
      values: number[];
    }
  | {
      type: "ring";
      tone: "primary";
      value: number;
    }
  | {
      type: "progress";
      tone: "primary" | "success";
      value: number;
    };

export type DashboardMetric = {
  title: string;
  value: string;
  change: string;
  note: string;
  direction: TrendDirection;
  visual: MetricVisual;
};

export type ChartPoint = {
  label: string;
  contribution: number;
  goal: number;
};

export type RankingMember = {
  name: string;
  score: string;
  contribution: string;
  trend: TrendDirection;
};

export type ActivityItem = {
  person: string;
  action: string;
  project: string;
  time: string;
  points?: string;
  tone: "success" | "info" | "warning";
};

export const dashboardMetrics: DashboardMetric[] = [
  {
    title: "Receita Total",
    value: "$152,430.50",
    change: "12.5%",
    note: "desde o mês passado",
    direction: "up",
    visual: {
      type: "sparkline",
      tone: "primary",
      values: [22, 34, 31, 46, 39, 56, 28, 36, 33, 48, 40],
    },
  },
  {
    title: "Património da Empresa",
    value: "$45,729.15",
    change: "30%",
    note: "da receita total",
    direction: "up",
    visual: {
      type: "ring",
      tone: "primary",
      value: 30,
    },
  },
  {
    title: "Valor Distribuível",
    value: "$106,701.35",
    change: "8.3%",
    note: "desde o mês passado",
    direction: "up",
    visual: {
      type: "sparkline",
      tone: "success",
      values: [18, 26, 19, 31, 28, 42, 25, 35, 29, 38, 33],
    },
  },
  {
    title: "Performance Média",
    value: "87.4",
    change: "5.6%",
    note: "desde o mês passado",
    direction: "up",
    visual: {
      type: "progress",
      tone: "primary",
      value: 87.4,
    },
  },
];

export const contributionData: ChartPoint[] = [
  { label: "18 Abr", contribution: 40, goal: 14 },
  { label: "25 Abr", contribution: 50, goal: 28 },
  { label: "2 Mai", contribution: 58, goal: 39 },
  { label: "9 Mai", contribution: 78, goal: 52 },
  { label: "16 Mai", contribution: 95, goal: 71 },
];

export const rankingMembers: RankingMember[] = [
  {
    name: "Hélio Matondo",
    score: "9,850",
    contribution: "18.7%",
    trend: "up",
  },
  {
    name: "Nelson Nhantumbo",
    score: "8,420",
    contribution: "16.0%",
    trend: "up",
  },
  {
    name: "Benvindo Armando",
    score: "7,650",
    contribution: "14.5%",
    trend: "down",
  },
  {
    name: "Cremildo Macuacua",
    score: "6,540",
    contribution: "12.4%",
    trend: "up",
  },
  {
    name: "Titos Mussagy",
    score: "5,230",
    contribution: "9.9%",
    trend: "down",
  },
];

export const activityItems: ActivityItem[] = [
  {
    person: "Hélio Matondo",
    action: 'completou a tarefa “Implementar Autenticação”',
    project: "Plataforma Interna",
    time: "há 2h",
    points: "+12.5 pts",
    tone: "success",
  },
  {
    person: "Nelson Nhantumbo",
    action: 'atualizou o status da tarefa “Dashboard Analytics”',
    project: "Plataforma Interna",
    time: "há 4h",
    tone: "info",
  },
  {
    person: "Cremildo Macuacua",
    action: 'está a revisar a tarefa “API de Pagamentos”',
    project: "Sistema de Pagamentos",
    time: "há 6h",
    tone: "warning",
  },
  {
    person: "Titos Mussagy",
    action: 'completou a tarefa “Correção de Bugs - Relatórios”',
    project: "Plataforma Interna",
    time: "há 8h",
    points: "+8.3 pts",
    tone: "success",
  },
];

export const distributionData = {
  total: "$152,430.50",
  company: "$45,729.15",
  team: "$106,701.35",
  companyShare: 30,
  teamShare: 70,
};