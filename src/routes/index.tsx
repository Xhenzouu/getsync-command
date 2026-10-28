import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { CursorWidget } from "@/components/CursorWidget";
import { SyncTable } from "@/components/SyncTable";
import { RunDrawer } from "@/components/RunDrawer";
import { mockRuns, type SyncRun } from "@/lib/mockData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sync Runs — Shopify to HubSpot Sync Command Center" },
      { name: "description", content: "Monitor Shopify to HubSpot customer sync runs, cursor state and errors." },
      { property: "og:title", content: "Sync Runs — Sync Command Center" },
      { property: "og:description", content: "Monitor Shopify to HubSpot customer sync runs, cursor state and errors." },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<SyncRun | null>(null);
  return (
    <>
      <Header title="Shopify to HubSpot Sync" />
      <div className="space-y-6 p-8">
        <CursorWidget />
        <SyncTable runs={mockRuns} onSelect={setSelected} />
      </div>
      <RunDrawer run={selected} onClose={() => setSelected(null)} />
    </>
  );
}
