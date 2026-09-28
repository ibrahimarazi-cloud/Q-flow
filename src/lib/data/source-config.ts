export type DataSourceId = "mock" | "microsoft-lists";
const CONFIGURED = (import.meta.env["VITE_DATA_SOURCE"] as string | undefined)?.trim();
export const DATA_SOURCE: DataSourceId = CONFIGURED === "microsoft-lists" ? "microsoft-lists" : "mock";
export const DATA_SOURCE_LABELS: Record<DataSourceId,string> = { mock:"Mock Veri", "microsoft-lists":"Microsoft Lists" };
export const AUTO_REFRESH_MS = 0;
export const DATA_SOURCE_STORAGE_KEY = "qflow.dataSource";
