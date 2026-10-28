export type RunStatus = "success" | "failed" | "partial";

export interface SyncRun {
  id: string;
  date: string;
  status: RunStatus;
  fetched: number;
  upserted: number;
  skipped: number;
  cursorAfter: string;
  error_message?: string;
}

export const CURRENT_CURSOR = "2026-10-07T23:47:11Z";

export const mockRuns: SyncRun[] = [
  { id: "run_0005", date: "2026-10-07T23:50:02Z", status: "success", fetched: 5, upserted: 4, skipped: 1, cursorAfter: "2026-10-07T23:47:11Z" },
  { id: "run_0004", date: "2026-10-07T23:35:00Z", status: "success", fetched: 0, upserted: 0, skipped: 0, cursorAfter: "2026-10-07T21:12:40Z" },
  { id: "run_0003", date: "2026-10-07T23:20:00Z", status: "failed", fetched: 0, upserted: 0, skipped: 0, cursorAfter: "2026-10-07T21:12:40Z", error_message: "NodeApiError: Fetch Shopify Token: Invalid URL" },
  { id: "run_0002", date: "2026-10-07T21:15:00Z", status: "success", fetched: 150, upserted: 145, skipped: 5, cursorAfter: "2026-10-07T21:12:40Z" },
  { id: "run_0001", date: "2026-10-07T18:00:00Z", status: "partial", fetched: 100, upserted: 80, skipped: 20, cursorAfter: "2026-10-07T17:58:03Z" },
];

export const hubspotPayloadExample = {
  inputs: [
    {
      idProperty: "email",
      id: "jane.doe@example.com",
      properties: {
        email: "jane.doe@example.com",
        firstname: "Jane",
        lastname: "Doe",
        phone: "+15555550123",
        shopify_customer_id: "7412398123",
        shopify_order_count: "2",
        shopify_total_spent: "13.98",
      },
    },
  ],
};

export function formatTs(iso: string) {
  return iso.replace("T", " ");
}
