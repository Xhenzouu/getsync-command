import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Sync Command Center" },
      { name: "description", content: "Configure the Shopify to HubSpot sync pipeline." },
      { property: "og:title", content: "Settings — Sync Command Center" },
      { property: "og:description", content: "Configure the Shopify to HubSpot sync pipeline." },
    ],
  }),
  component: Settings,
});

const rows = [
  ["Source", "Shopify · Customers"],
  ["Destination", "HubSpot · Contacts"],
  ["Match key", "email"],
  ["Schedule", "Every 15 minutes"],
  ["Skip rule", "Customers without email are skipped"],
];

function Settings() {
  return (
    <>
      <Header title="Settings" />
      <div className="p-8">
        <section className="rounded-lg border border-border bg-card">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-border px-6 py-4 text-sm last:border-0">
              <span className="text-muted-foreground">{k}</span>
              <span className="font-medium text-card-foreground">{v}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
