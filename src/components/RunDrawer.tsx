import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { formatTs, hubspotPayloadExample, type SyncRun } from "@/lib/mockData";
import { StatusPill } from "./StatusPill";

export function RunDrawer({ run, onClose }: { run: SyncRun | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {run && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            key="panel"
            className="fixed inset-y-0 right-0 z-50 flex w-[450px] max-w-full flex-col overflow-y-auto border-l border-border bg-card text-card-foreground"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between border-b border-border p-6">
              <div>
                <h2 className="font-serif text-2xl">{run.id}</h2>
                <p className="mt-1 text-xs text-muted-foreground tabular-nums">{formatTs(run.date)}</p>
                <div className="mt-3"><StatusPill status={run.status} /></div>
              </div>
              <button onClick={onClose} aria-label="Close" className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="border-b border-border p-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Run Metrics</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Customers Fetched", run.fetched],
                  ["Contacts Upserted", run.upserted],
                  ["Skipped", run.skipped],
                ].map(([label, v]) => (
                  <div key={label} className="rounded-md border border-border bg-background p-3">
                    <p className="text-3xl font-semibold tabular-nums">{v}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Run Log &amp; Errors</h3>
              {run.status === "failed" ? (
                <div className="rounded-md border border-destructive bg-destructive/10 p-3 font-mono text-sm text-destructive">
                  {run.error_message}
                </div>
              ) : run.status === "partial" ? (
                <p className="text-sm text-warning">Sync completed with {run.skipped} records skipped (missing email).</p>
              ) : (
                <p className="text-sm text-success">Sync completed successfully.</p>
              )}
              <p className="mt-6 mb-2 text-xs text-muted-foreground">HubSpot batch upsert payload</p>
              <pre className="overflow-x-auto rounded-md border border-border bg-background p-4 font-mono text-xs leading-relaxed">
                {JSON.stringify(hubspotPayloadExample, null, 2)}
              </pre>
              <p className="mt-3 text-xs text-muted-foreground">
                Cursor after run: <span className="font-mono">{formatTs(run.cursorAfter)}</span>
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
