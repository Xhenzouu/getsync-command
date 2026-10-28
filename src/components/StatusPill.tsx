import { AlertCircle } from "lucide-react";
import type { RunStatus } from "@/lib/mockData";

const styles: Record<RunStatus, { cls: string; label: string }> = {
  success: { cls: "bg-success text-primary-foreground", label: "Success" },
  failed: { cls: "bg-destructive text-destructive-foreground", label: "Failed" },
  partial: { cls: "bg-warning text-primary-foreground", label: "Partial" },
};

export function StatusPill({ status }: { status: RunStatus }) {
  const s = styles[status];
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.cls}`}>{s.label}</span>
      {status === "failed" && <AlertCircle className="h-4 w-4 text-destructive" aria-label="Failure" />}
    </span>
  );
}
