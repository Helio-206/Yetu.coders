import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block" />

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <Input
              aria-label="Pesquisar"
              placeholder="Pesquisar..."
              className="h-12 rounded-lg pl-10 pr-16"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted">
              ⌘ K
            </span>
          </div>

          <Button variant="outline" size="icon" className="rounded-lg">
            <Bell className="size-4" />
          </Button>

          <Avatar className="size-10 border border-border">
            <AvatarFallback>HC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
