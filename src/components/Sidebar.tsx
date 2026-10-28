import { Link, useRouterState } from "@tanstack/react-router";
import { Activity, Settings } from "lucide-react";

const items = [
  { to: "/", label: "Sync Runs", icon: Activity },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function Sidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="fixed inset-y-0 left-0 flex w-[260px] flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-lg font-bold">
          S
        </div>
        <span className="font-serif text-lg text-sidebar-foreground">SyncCommand</span>
      </div>
      <nav className="flex flex-col gap-1 py-4">
        {items.map(({ to, label, icon: Icon }) => {
          const active = path === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 border-l-4 px-5 py-2.5 text-sm transition-colors ${
                active
                  ? "border-primary bg-sidebar-accent font-medium text-sidebar-foreground"
                  : "border-transparent text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-sidebar-border px-6 py-4 text-xs text-muted-foreground">
        Pipeline v1.0 · Connected
      </div>
    </aside>
  );
}
