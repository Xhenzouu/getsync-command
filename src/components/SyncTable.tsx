import { formatTs, type SyncRun } from "@/lib/mockData";
import { StatusPill } from "./StatusPill";

export function SyncTable({ runs, onSelect }: { runs: SyncRun[]; onSelect: (r: SyncRun) => void }) {
  const th = "px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground";
  const num = "px-5 py-3.5 text-right tabular-nums";
  return (
    <section className="overflow-hidden rounded-lg border border-border bg-card">
      <table className="w-full text-sm text-card-foreground">
        <thead className="border-b border-border">
          <tr>
            <th className={th}>Run ID</th>
            <th className={th}>Date</th>
            <th className={th}>Status</th>
            <th className={`${th} text-right`}>Fetched</th>
            <th className={`${th} text-right`}>Upserted</th>
            <th className={`${th} text-right`}>Skipped (No Email)</th>
          </tr>
        </thead>
        <tbody>
          {runs.map((r) => (
            <tr
              key={r.id}
              onClick={() => onSelect(r)}
              className="cursor-pointer border-b border-border last:border-0 transition-colors hover:bg-muted"
            >
              <td className="px-5 py-3.5 font-mono">{r.id}</td>
              <td className="px-5 py-3.5 text-muted-foreground tabular-nums">{formatTs(r.date)}</td>
              <td className="px-5 py-3.5"><StatusPill status={r.status} /></td>
              <td className={num}>{r.fetched}</td>
              <td className={num}>{r.upserted}</td>
              <td className={num}>{r.skipped}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
