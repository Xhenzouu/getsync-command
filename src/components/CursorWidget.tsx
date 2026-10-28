import { ArrowRight } from "lucide-react";
import { CURRENT_CURSOR, formatTs } from "@/lib/mockData";

export function CursorWidget() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-6 rounded-lg border border-border bg-card p-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Cursor State · last_updated_at</p>
        <p className="mt-2 text-3xl font-semibold tabular-nums text-card-foreground">{formatTs(CURRENT_CURSOR)}</p>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-border bg-muted px-3 py-2 font-medium text-foreground">Shopify Customer</span>
        <ArrowRight className="h-4 w-4 text-primary" />
        <span className="rounded-md border border-border bg-muted px-3 py-2 font-medium text-foreground">HubSpot Contact</span>
      </div>
    </section>
  );
}
