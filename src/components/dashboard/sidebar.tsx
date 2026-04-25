import {
  BarChart3,
  FileText,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Projetos", icon: FolderKanban },
  { label: "Tarefas", icon: ListTodo },
  { label: "Performance", icon: BarChart3 },
  { label: "Financeiro", icon: Wallet },
  { label: "Equipa", icon: Users },
  { label: "Relatórios", icon: FileText },
  { label: "Configurações", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-full border-b border-border/70 bg-background lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:w-64 lg:border-r lg:border-b-0 xl:w-72">
      <div className="flex h-full flex-col gap-6 px-4 py-5 lg:px-5 lg:py-6">
        <div className="flex items-center gap-3 px-1">
          <div className="relative size-10 overflow-hidden rounded-sm">
            <Image
              src="/image.png"
              alt="Yetu.coders símbolo"
              fill
              className="object-cover object-[18%_33%] scale-[1.95]"
              priority
            />
          </div>
          <p className="text-[42px] font-semibold leading-none tracking-tight text-foreground">
            Yetu.coders
          </p>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={cn(
                  "relative flex min-w-fit items-center gap-3 overflow-hidden rounded-lg px-3 py-3 text-sm font-medium transition-colors lg:w-full",
                  item.active
                    ? "bg-[#141414] text-primary ring-1 ring-primary/10"
                    : "text-foreground/80 hover:bg-[#141414] hover:text-foreground",
                )}
              >
                {item.active ? (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-0 top-2 w-0.75 rounded-full bg-primary shadow-[0_0_14px_rgb(249_115_22/0.45)]"
                  />
                ) : null}
                <Icon className={cn("size-4", item.active ? "text-primary" : "text-muted")} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto hidden rounded-lg border border-[#2A2A2A] bg-card p-3 lg:block">
          <div className="flex items-center gap-3">
            <Avatar className="size-10 border border-border">
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">Hélio Matondo</p>
              <p className="text-xs text-muted">Administrador</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
